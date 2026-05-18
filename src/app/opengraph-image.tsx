import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F6F5F2",
        padding: 80,
        fontFamily: "Georgia, serif",
        color: "#0C0C0E",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#56565C",
        }}
      >
        {site.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: "-0.03em" }}>
          A IA já está aqui.
        </div>
        <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: "-0.03em", color: "#56565C" }}>
          Sua empresa também?
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#56565C" }}>
        <span>{site.tagline}</span>
        <span style={{ color: "#A86026" }}>kora.com.br</span>
      </div>
    </div>,
    { ...size },
  );
}
