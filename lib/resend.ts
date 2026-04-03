const RESEND_BASE = "https://api.resend.com";

function getApiKey(): string | undefined {
  return process.env.RESEND_API_KEY;
}

function getAudienceId(): string | undefined {
  return process.env.RESEND_AUDIENCE_ID;
}

async function resendFetch(path: string, body: Record<string, unknown>) {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const res = await fetch(`${RESEND_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return res;
}

export async function sendNotification(subject: string, body: string) {
  return resendFetch("/emails", {
    from: "Uniquely You! <noreply@updates.uyrdu.com>",
    to: process.env.NOTIFY_EMAIL ?? "will.sigmon@n2co.com",
    subject: `[UY Raleigh Metro] ${subject}`,
    text: body,
  });
}

export async function addContact(email: string) {
  const audienceId = getAudienceId();
  if (!audienceId) return null;

  return resendFetch(`/audiences/${audienceId}/contacts`, {
    email,
    unsubscribed: false,
  });
}
