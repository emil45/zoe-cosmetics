import { ImageResponse } from "next/og";

// iOS / iPadOS home-screen icon. Same brand monogram, larger canvas.
// To use a real logo instead, delete this file and drop `app/apple-icon.png`.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#292521",
          color: "#fbfaf7",
          fontSize: 112,
          fontWeight: 600,
          fontFamily: "Georgia, 'Times New Roman', serif"
        }}
      >
        Z
      </div>
    ),
    { ...size }
  );
}
