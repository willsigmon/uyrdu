/**
 * Higgsfield Asset Generator
 *
 * Generates cinematic AI videos and images for:
 * - Kyndred (dating app)
 * - Leavn (spiritual wellness)
 * - Modcaster (podcast app)
 * - RDU Heatwave (212 networking)
 *
 * Usage:
 *   npx tsx generate.ts [project] [--dry-run]
 *   npx tsx generate.ts all
 *   npx tsx generate.ts heatwave
 */

import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

// ── Auth ──────────────────────────────────────────────────────

function getCredentials(): string {
  const envCreds = process.env.HF_CREDENTIALS;
  if (envCreds) return envCreds;

  try {
    const keyId = execSync(
      'op item get "Higgsfield" --vault="Automation" --fields username',
      { encoding: "utf-8" },
    ).trim();
    const keySecret = execSync(
      'op item get "Higgsfield" --vault="Automation" --fields credential',
      { encoding: "utf-8" },
    ).trim();
    return `${keyId}:${keySecret}`;
  } catch {
    throw new Error(
      "Could not retrieve Higgsfield credentials from 1Password or HF_CREDENTIALS env var",
    );
  }
}

// ── API Client ────────────────────────────────────────────────

const BASE_URL = "https://platform.higgsfield.ai";

interface JobResult {
  id: string;
  status: "queued" | "in_progress" | "completed" | "failed" | "nsfw";
  url?: string;
  thumbUrl?: string;
}

async function apiCall(
  credentials: string,
  endpoint: string,
  body: Record<string, unknown>,
): Promise<string> {
  const resp = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials}`,
      "Content-Type": "application/json",
      "User-Agent": "higgsfield-asset-gen/1.0",
    },
    body: JSON.stringify(body),
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`API ${resp.status}: ${text}`);
  }
  const data = (await resp.json()) as { id?: string; request_id?: string };
  return data.request_id ?? data.id ?? "";
}

async function pollStatus(
  credentials: string,
  requestId: string,
  maxWaitMs = 300_000,
): Promise<JobResult> {
  const start = Date.now();
  const pollInterval = 3000;

  while (Date.now() - start < maxWaitMs) {
    const resp = await fetch(
      `${BASE_URL}/requests/${requestId}/status`,
      {
        headers: { Authorization: `Bearer ${credentials}` },
      },
    );
    const data = (await resp.json()) as {
      status: string;
      jobs?: Array<{
        results?: { raw?: { url?: string }; min?: { url?: string } };
      }>;
    };

    if (data.status === "completed") {
      const job = data.jobs?.[0];
      return {
        id: requestId,
        status: "completed",
        url: job?.results?.raw?.url,
        thumbUrl: job?.results?.min?.url,
      };
    }
    if (data.status === "failed" || data.status === "nsfw") {
      return { id: requestId, status: data.status as JobResult["status"] };
    }

    console.log(`  [${requestId.slice(0, 8)}] ${data.status}...`);
    await new Promise((r) => setTimeout(r, pollInterval));
  }
  throw new Error(`Timeout waiting for ${requestId}`);
}

async function downloadFile(url: string, dest: string): Promise<void> {
  const resp = await fetch(url);
  const buffer = Buffer.from(await resp.arrayBuffer());
  writeFileSync(dest, buffer);
  console.log(`  Downloaded: ${dest}`);
}

// ── Asset Definitions ─────────────────────────────────────────

interface AssetSpec {
  name: string;
  type: "image" | "video";
  prompt: string;
  aspect_ratio: string;
  endpoint: string;
  outDir: string;
  filename: string;
  videoModel?: string;
}

const KYNDRED_ASSETS: AssetSpec[] = [
  {
    name: "Kyndred Hero — Connection",
    type: "image",
    prompt:
      "Two young professionals having an authentic conversation at a cozy upscale coffee shop, warm golden hour lighting through floor-to-ceiling windows, shallow depth of field, candid and genuine moment, modern minimal interior, earth tones with warm amber accents, editorial photography style, no text",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/kyndred/assets/generated",
    filename: "hero-connection.png",
  },
  {
    name: "Kyndred Hero — City Night",
    type: "image",
    prompt:
      "Raleigh NC downtown skyline at twilight, warm streetlights reflecting off modern glass buildings, couples walking along Fayetteville Street, romantic urban atmosphere, cinematic color grading with deep teals and warm oranges, drone perspective slightly elevated, no text no logos",
    aspect_ratio: "16:9",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/kyndred/assets/generated",
    filename: "hero-city-night.png",
  },
  {
    name: "Kyndred Social Reel — Spark",
    type: "image",
    prompt:
      "Close-up of two hands reaching toward each other across a rustic wooden table, coffee cups in soft focus background, warm directional sunlight casting long shadows, intimate and hopeful mood, film grain texture, vertical composition with breathing room at top and bottom, no text",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/kyndred/assets/generated",
    filename: "social-spark.png",
  },
];

const LEAVN_ASSETS: AssetSpec[] = [
  {
    name: "Leavn App Store — Devotional Moment",
    type: "image",
    prompt:
      "Person sitting in a sunlit window seat with an open Bible and journal, morning light streaming through sheer curtains, peaceful contemplative mood, warm cream and gold tones, soft bokeh plants in background, editorial lifestyle photography, no text no logos, clean and serene",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/LeavnOfficial/assets/generated",
    filename: "appstore-devotional.png",
  },
  {
    name: "Leavn App Store — Community Prayer",
    type: "image",
    prompt:
      "Small group of diverse friends praying together in a modern living room, hands clasped, eyes closed, warm ambient lighting from table lamps, cozy and intimate atmosphere, earth tones with soft sage green accents, candid documentary style photography, no text no logos",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/LeavnOfficial/assets/generated",
    filename: "appstore-community-prayer.png",
  },
  {
    name: "Leavn Social — Scripture Study",
    type: "image",
    prompt:
      "Overhead flat lay of an open Bible surrounded by a coffee mug, reading glasses, journal with handwritten notes, dried flowers, on a light oak desk, natural window light from above casting soft shadows, warm minimalist aesthetic, Instagram-ready vertical crop, no text overlays",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/LeavnOfficial/assets/generated",
    filename: "social-scripture-study.png",
  },
];

const MODCASTER_ASSETS: AssetSpec[] = [
  {
    name: "Modcaster Hero — Studio Setup",
    type: "image",
    prompt:
      "Professional podcast recording studio with high-end condenser microphone in foreground, soft purple and blue LED ambient lighting, acoustic foam panels on walls, mixing console with glowing meters in background, cinematic depth of field, moody and premium atmosphere, no text no logos",
    aspect_ratio: "16:9",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/Modcaster/assets/generated",
    filename: "hero-studio.png",
  },
  {
    name: "Modcaster Social — Listening",
    type: "image",
    prompt:
      "Person wearing premium over-ear headphones on a city bus, eyes closed, absorbed in audio, morning commute light through transit window, urban lifestyle photography, warm muted tones with cool blue accents, shallow depth of field on the headphones, vertical composition, no text",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/Modcaster/assets/generated",
    filename: "social-listening.png",
  },
  {
    name: "Modcaster Feature — Waveform",
    type: "image",
    prompt:
      "Abstract audio waveform visualization glowing in electric purple and deep blue against a dark background, particles of light floating along the wave peaks, futuristic and clean, resembling a premium music player interface, 3D render style, no text no UI elements",
    aspect_ratio: "16:9",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/Modcaster/assets/generated",
    filename: "feature-waveform.png",
  },
];

const HEATWAVE_ASSETS: AssetSpec[] = [
  {
    name: "Heatwave Hero — Networking Energy",
    type: "image",
    prompt:
      "Dynamic group of business professionals in smart casual attire networking at a modern brewery taproom, animated conversation and genuine laughter, warm industrial interior with exposed brick and Edison bulbs, fire orange accent lighting, energy and momentum in the scene, editorial business photography, no text no logos",
    aspect_ratio: "16:9",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/RDUHeatWave/assets/generated",
    filename: "hero-networking.png",
  },
  {
    name: "Heatwave Hero — 212 Degrees",
    type: "image",
    prompt:
      "Dramatic close-up of boiling water with intense steam rising, lit from below with deep fire orange and amber light, bubbles catching light like molten glass, black background, the raw power of transformation captured at the molecular level, cinematic macro photography, hyper-detailed, no text",
    aspect_ratio: "16:9",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/RDUHeatWave/assets/generated",
    filename: "hero-212-degrees.png",
  },
  {
    name: "Heatwave Social — Raleigh Skyline Fire",
    type: "image",
    prompt:
      "Raleigh North Carolina downtown skyline at sunset with an impossibly dramatic sky of deep oranges, magentas, and fire reds reflecting off glass skyscrapers, shot from Dorothea Dix Park looking across the city, ultra-wide cinematic composition, volumetric clouds backlit by the setting sun, the city glowing like its on fire, no text no logos",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/RDUHeatWave/assets/generated",
    filename: "social-raleigh-fire.png",
  },
  {
    name: "Heatwave Video — Steam Rising",
    type: "image",
    prompt:
      "Extreme slow motion of steam erupting from boiling water surface, dramatic side lighting in deep orange and amber, individual water droplets suspended in air catching light, volumetric steam tendrils curling upward, pure black background, cinematic and hypnotic, macro photography, no text",
    aspect_ratio: "9:16",
    endpoint: "/flux-pro/kontext/max/text-to-image",
    outDir: "/Volumes/GitHubMaster/RDUHeatWave/assets/generated",
    filename: "video-steam-source.png",
  },
];

// ── Pipeline ──────────────────────────────────────────────────

const ALL_PROJECTS: Record<string, AssetSpec[]> = {
  kyndred: KYNDRED_ASSETS,
  leavn: LEAVN_ASSETS,
  modcaster: MODCASTER_ASSETS,
  heatwave: HEATWAVE_ASSETS,
};

async function generateAsset(
  credentials: string,
  spec: AssetSpec,
  dryRun: boolean,
): Promise<void> {
  console.log(`\n>> ${spec.name}`);
  console.log(`   Type: ${spec.type} | ${spec.aspect_ratio}`);
  console.log(`   Prompt: ${spec.prompt.slice(0, 80)}...`);

  if (!existsSync(spec.outDir)) {
    mkdirSync(spec.outDir, { recursive: true });
  }

  if (dryRun) {
    console.log("   [DRY RUN] Would generate this asset");
    return;
  }

  try {
    const requestId = await apiCall(credentials, spec.endpoint, {
      prompt: spec.prompt,
      aspect_ratio: spec.aspect_ratio,
      safety_tolerance: 2,
    });
    console.log(`   Request: ${requestId}`);

    const result = await pollStatus(credentials, requestId);

    if (result.status === "completed" && result.url) {
      const ext = spec.type === "video" ? "mp4" : "png";
      const outPath = path.join(
        spec.outDir,
        spec.filename.replace(/\.\w+$/, `.${ext}`),
      );
      await downloadFile(result.url, outPath);

      // If this is marked for video conversion, queue image-to-video
      if (spec.name.includes("Video")) {
        console.log("   Converting to video via image-to-video...");
        const videoRequestId = await apiCall(
          credentials,
          "/v1/image2video/dop",
          {
            model: spec.videoModel ?? "dop-turbo",
            prompt: `Cinematic slow motion with subtle parallax movement. ${spec.prompt.slice(0, 100)}`,
            input_images: [{ type: "image_url", image_url: result.url }],
          },
        );
        const videoResult = await pollStatus(credentials, videoRequestId);
        if (videoResult.status === "completed" && videoResult.url) {
          const videoPath = path.join(
            spec.outDir,
            spec.filename.replace(/\.\w+$/, ".mp4"),
          );
          await downloadFile(videoResult.url, videoPath);
        }
      }
    } else {
      console.log(`   FAILED: ${result.status}`);
    }
  } catch (err) {
    console.error(`   ERROR: ${err}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const projectArg = args.find((a) => !a.startsWith("--")) ?? "all";

  const credentials = getCredentials();
  console.log("Higgsfield credentials loaded");

  const projects =
    projectArg === "all"
      ? Object.entries(ALL_PROJECTS)
      : [[projectArg, ALL_PROJECTS[projectArg]] as const].filter(
          ([, v]) => v,
        );

  if (projects.length === 0) {
    console.error(
      `Unknown project: ${projectArg}. Options: ${Object.keys(ALL_PROJECTS).join(", ")}`,
    );
    process.exit(1);
  }

  for (const [name, assets] of projects) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`  ${(name as string).toUpperCase()} — ${(assets as AssetSpec[]).length} assets`);
    console.log(`${"=".repeat(60)}`);

    for (const asset of assets as AssetSpec[]) {
      await generateAsset(credentials, asset, dryRun);
    }
  }

  console.log("\n\nDone! All assets generated.");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
