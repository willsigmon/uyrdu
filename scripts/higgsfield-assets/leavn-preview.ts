/**
 * Leavn App Store Preview Video Generator
 *
 * Takes existing Leavn screenshots → Higgsfield image-to-video →
 * Downloads cinematic clips ready for Remotion stitching.
 *
 * Usage:
 *   npx tsx leavn-preview.ts [--dry-run]
 */

import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "fs";
import path from "path";

const LEAVN_ROOT = "/Volumes/GitHubMaster/LeavnOfficial";
const SCREENSHOTS_DIR = `${LEAVN_ROOT}/LeavnOfficial/screenshots/audit`;
const OUT_DIR = `${LEAVN_ROOT}/assets/preview-video`;

// App Store preview: 886x1920 (iPhone 6.7"), up to 30 seconds
// We'll generate 5 clips at ~5 seconds each = 25 seconds total

const SCENES = [
  {
    screenshot: "01-home-main.png",
    motion: "Gentle slow zoom-in revealing the home feed, warm and inviting",
    caption: "Your faith community, together",
  },
  {
    screenshot: "02-bible-main.png",
    motion: "Smooth scroll-down revealing Bible text, contemplative and focused",
    caption: "Multi-translation Bible study",
  },
  {
    screenshot: "02-bible-ai-scholar.png",
    motion: "Subtle pan across AI Scholar response, intelligent and helpful",
    caption: "AI-powered Scripture insights",
  },
  {
    screenshot: "03-explore-main.png",
    motion: "Slow zoom-out revealing reading plans and explore content, discovery mood",
    caption: "Curated reading plans",
  },
  {
    screenshot: "06-ai-assistant-devotion.png",
    motion: "Gentle parallax revealing devotional content, peaceful morning light feel",
    caption: "Daily devotions, your way",
  },
];

function getCredentials(): string {
  const envCreds = process.env.HF_CREDENTIALS;
  if (envCreds) return envCreds;
  const keyId = execSync(
    'op item get "Higgsfield" --vault="Automation" --fields username',
    { encoding: "utf-8" },
  ).trim();
  const keySecret = execSync(
    'op item get "Higgsfield" --vault="Automation" --fields credential',
    { encoding: "utf-8" },
  ).trim();
  return `${keyId}:${keySecret}`;
}

const BASE_URL = "https://platform.higgsfield.ai";

async function uploadAndConvert(
  credentials: string,
  imagePath: string,
  motionPrompt: string,
): Promise<string | null> {
  // For local files, we need to either host them or use base64
  // Using the image URL approach — first generate a hosted version
  const imageBuffer = readFileSync(imagePath);
  const base64 = imageBuffer.toString("base64");
  const mimeType = imagePath.endsWith(".png") ? "image/png" : "image/jpeg";
  const dataUrl = `data:${mimeType};base64,${base64}`;

  const resp = await fetch(`${BASE_URL}/v1/image2video/dop`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "dop-turbo",
      prompt: motionPrompt,
      input_images: [{ type: "image_url", image_url: dataUrl }],
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error(`  API error: ${resp.status} ${text.slice(0, 200)}`);
    return null;
  }

  const data = (await resp.json()) as { request_id?: string; id?: string };
  const requestId = data.request_id ?? data.id ?? "";

  // Poll
  const maxWait = 300_000;
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    const statusResp = await fetch(
      `${BASE_URL}/requests/${requestId}/status`,
      { headers: { Authorization: `Bearer ${credentials}` } },
    );
    const statusData = (await statusResp.json()) as {
      status: string;
      jobs?: Array<{ results?: { raw?: { url?: string } } }>;
    };

    if (statusData.status === "completed") {
      return statusData.jobs?.[0]?.results?.raw?.url ?? null;
    }
    if (
      statusData.status === "failed" ||
      statusData.status === "nsfw"
    ) {
      console.error(`  Generation ${statusData.status}`);
      return null;
    }
    console.log(`  [${requestId.slice(0, 8)}] ${statusData.status}...`);
    await new Promise((r) => setTimeout(r, 3000));
  }
  return null;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const credentials = getCredentials();

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  console.log("Leavn App Store Preview Generator");
  console.log(`Screenshots: ${SCREENSHOTS_DIR}`);
  console.log(`Output: ${OUT_DIR}`);
  console.log(`Scenes: ${SCENES.length}`);
  console.log();

  const manifest: Array<{
    scene: number;
    caption: string;
    videoPath: string;
  }> = [];

  for (let i = 0; i < SCENES.length; i++) {
    const scene = SCENES[i];
    const screenshotPath = path.join(SCREENSHOTS_DIR, scene.screenshot);

    console.log(`[${i + 1}/${SCENES.length}] ${scene.caption}`);
    console.log(`  Screenshot: ${scene.screenshot}`);
    console.log(`  Motion: ${scene.motion}`);

    if (!existsSync(screenshotPath)) {
      console.error(`  SKIP — screenshot not found: ${screenshotPath}`);
      continue;
    }

    if (dryRun) {
      console.log("  [DRY RUN] Would convert to video");
      manifest.push({
        scene: i + 1,
        caption: scene.caption,
        videoPath: path.join(OUT_DIR, `scene-${i + 1}.mp4`),
      });
      continue;
    }

    const videoUrl = await uploadAndConvert(
      credentials,
      screenshotPath,
      scene.motion,
    );

    if (videoUrl) {
      const videoPath = path.join(OUT_DIR, `scene-${i + 1}.mp4`);
      const resp = await fetch(videoUrl);
      writeFileSync(videoPath, Buffer.from(await resp.arrayBuffer()));
      console.log(`  Saved: ${videoPath}`);
      manifest.push({ scene: i + 1, caption: scene.caption, videoPath });
    }
  }

  // Write manifest for Remotion stitching
  const manifestPath = path.join(OUT_DIR, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nManifest: ${manifestPath}`);
  console.log(
    "Next: Use Remotion to stitch clips with captions and transitions",
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
