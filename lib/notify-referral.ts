import { Resend } from "resend"

interface ReferralEntry {
  service_label: string
  business_name: string
  contact_name: string | null
  contact_number: string | null
}

export interface ReferralNotification {
  submissionId: string
  submitter_name: string
  submitter_email: string | null
  submitter_phone: string | null
  relationship_to_community: string | null
  notes: string | null
  entries: ReferralEntry[]
}

const DEFAULT_TO = "will.sigmon@n2co.com"
const DEFAULT_FROM = "Uniquely You! <referrals@uyrdu.com>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function renderEntryHtml(entry: ReferralEntry) {
  const contactBits = [entry.contact_name, entry.contact_number]
    .filter(Boolean)
    .map((v) => escapeHtml(String(v)))
    .join(" · ")

  return `
    <tr>
      <td style="padding:10px 14px;border-top:1px solid #e6e6e6;font-size:14px;line-height:1.5;color:#0b0b0b">
        <div style="font-weight:600">${escapeHtml(entry.business_name)}</div>
        <div style="color:#666;font-size:13px;margin-top:2px">${escapeHtml(entry.service_label)}</div>
        ${contactBits ? `<div style="color:#444;font-size:13px;margin-top:4px">${contactBits}</div>` : ""}
      </td>
    </tr>
  `
}

function renderHtml(payload: ReferralNotification, crmUrl: string | null) {
  const headerBits = [
    payload.submitter_email ? `<a href="mailto:${escapeHtml(payload.submitter_email)}" style="color:#5ea8ff">${escapeHtml(payload.submitter_email)}</a>` : null,
    payload.submitter_phone ? escapeHtml(payload.submitter_phone) : null,
    payload.relationship_to_community ? escapeHtml(payload.relationship_to_community) : null,
  ]
    .filter(Boolean)
    .join(" · ")

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0b0b0b">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#666">New referral</p>
      <h1 style="margin:0 0 4px;font-size:22px;line-height:1.25">${escapeHtml(payload.submitter_name)}</h1>
      ${headerBits ? `<p style="margin:0 0 16px;color:#444;font-size:13px">${headerBits}</p>` : `<div style="height:8px"></div>`}

      ${payload.notes ? `<blockquote style="margin:0 0 16px;padding:10px 14px;background:#f6f6f6;border-left:3px solid #ddd;font-size:13px;line-height:1.5;color:#333">${escapeHtml(payload.notes)}</blockquote>` : ""}

      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;border:1px solid #e6e6e6;border-radius:8px;overflow:hidden">
        <thead>
          <tr><td style="padding:8px 14px;background:#fafafa;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#666;font-weight:600">Recommended (${payload.entries.length})</td></tr>
        </thead>
        <tbody>
          ${payload.entries.map(renderEntryHtml).join("")}
        </tbody>
      </table>

      ${crmUrl ? `<p style="margin:20px 0 0;font-size:13px"><a href="${escapeHtml(crmUrl)}" style="display:inline-block;padding:8px 14px;border-radius:6px;background:#0b0b0b;color:#fff;text-decoration:none">Open in CRM</a></p>` : ""}

      <p style="margin:24px 0 0;font-size:11px;color:#999">Submission ID: ${escapeHtml(payload.submissionId)}</p>
    </div>
  `
}

function renderText(payload: ReferralNotification, crmUrl: string | null) {
  const lines: string[] = []
  lines.push(`New referral from ${payload.submitter_name}`)
  if (payload.submitter_email) lines.push(`Email: ${payload.submitter_email}`)
  if (payload.submitter_phone) lines.push(`Phone: ${payload.submitter_phone}`)
  if (payload.relationship_to_community) lines.push(`Role: ${payload.relationship_to_community}`)
  if (payload.notes) lines.push("", `Notes: ${payload.notes}`)
  lines.push("", `Recommended (${payload.entries.length}):`)
  for (const e of payload.entries) {
    const contactBits = [e.contact_name, e.contact_number].filter(Boolean).join(" · ")
    lines.push(`- ${e.business_name} — ${e.service_label}${contactBits ? ` (${contactBits})` : ""}`)
  }
  if (crmUrl) {
    lines.push("", `Open in CRM: ${crmUrl}`)
  }
  lines.push("", `Submission ID: ${payload.submissionId}`)
  return lines.join("\n")
}

export async function sendReferralNotification(payload: ReferralNotification): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    console.warn("[referral-notify] RESEND_API_KEY not set — skipping email notification")
    return
  }

  const to = (process.env.REFERRAL_NOTIFY_TO?.trim() || DEFAULT_TO)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const from = process.env.REFERRAL_NOTIFY_FROM?.trim() || DEFAULT_FROM
  const crmBase = process.env.CRM_BASE_URL?.trim().replace(/\/$/, "") || "https://uyraleighmetro.vercel.app"
  const crmUrl = `${crmBase}/recommendations`

  const subject = `New referral · ${payload.submitter_name} (${payload.entries.length})`

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html: renderHtml(payload, crmUrl),
      text: renderText(payload, crmUrl),
      replyTo: payload.submitter_email || undefined,
    })
    if (error) {
      console.error("[referral-notify] Resend returned an error", error)
    }
  } catch (err) {
    console.error("[referral-notify] Unexpected error sending email", err)
  }
}
