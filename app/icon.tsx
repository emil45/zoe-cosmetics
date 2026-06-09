import { ImageResponse } from "next/og";

// Browser tab / favicon. Brand monogram in the site palette (ink + porcelain).
// To use a real logo instead, delete this file and drop `app/icon.png`.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
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
