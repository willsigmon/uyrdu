import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(160deg, #fffdf7 0%, #fff7f1 48%, #ffe8de 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Rainbow bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "12px",
            background: "linear-gradient(90deg, #12d6a0 0%, #ffcc00 26%, #ff6b6b 58%, #5ea8ff 100%)",
          }}
        />

        {/* Teal accent blob top-left */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "14%",
            width: "320px",
            height: "80px",
            borderRadius: "999px",
            background: "rgba(18, 214, 160, 0.85)",
            transform: "rotate(-8deg)",
          }}
        />

        {/* Purple accent blob right */}
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "80px",
            width: "100px",
            height: "280px",
            borderRadius: "999px",
            background: "rgba(155, 69, 255, 0.7)",
            transform: "rotate(16deg)",
          }}
        />

        {/* Yellow accent blob bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "999px",
            background: "rgba(255, 204, 0, 0.35)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            zIndex: 1,
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: "86px",
              fontWeight: 900,
              color: "#2c0b5a",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            Uniquely You!
          </div>

          {/* Region chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "999px",
              border: "3px solid #2c0b5a",
              background: "rgba(255, 253, 247, 0.98)",
              padding: "12px 28px",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase" as const,
              color: "#2c0b5a",
              boxShadow: "0 4px 0 0 rgba(44, 11, 90, 0.12)",
            }}
          >
            Raleigh Metro
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #12d6a0, #ff6b6b)",
              marginTop: "8px",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#6f4f94",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
              marginTop: "4px",
            }}
          >
            Celebrating the disability community
            <br />
            in NC&apos;s Triangle region
          </div>

          {/* Counties */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "8px",
            }}
          >
            {["Wake", "Durham", "Orange", "Johnston", "Chatham"].map(
              (county) => (
                <div
                  key={county}
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#ff6b6b",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {county}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "linear-gradient(90deg, #5ea8ff 0%, #ff6b6b 42%, #ffcc00 74%, #12d6a0 100%)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
