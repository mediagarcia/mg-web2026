import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Media Garcia - RevOps & CRM Experts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 12,
            background: "#3BB782",
            marginBottom: 40,
            fontSize: 32,
            fontWeight: 700,
            color: "white",
          }}
        >
          M
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Media Garcia
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#3BB782",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          RevOps & CRM Experts
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          We build and run digital platforms that keep companies lean, growing, and easy to do business with.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #3BB782, #EE82F0)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
