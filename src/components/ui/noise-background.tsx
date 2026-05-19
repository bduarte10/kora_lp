export function NoiseBackground() {
  return (
    <div className="aurora-bg" aria-hidden>
      {/* Layer 1: diagonal light modeling — luz top-left, sombra bottom-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: [
            "linear-gradient(135deg, rgba(245, 165, 110, 0.88) 0%, transparent 45%)",
            "linear-gradient(315deg, rgba(28, 7, 2, 0.85) 0%, transparent 45%)",
          ].join(", "),
        }}
      />

      {/* Layer 2: grade técnica cream */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: [
            "linear-gradient(rgba(250, 246, 242, 0.055) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(250, 246, 242, 0.055) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "72px 72px",
        }}
      />

      {/* Layer 3: grain fotográfico */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.38, mixBlendMode: "overlay" } as React.CSSProperties}
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
    </div>
  );
}
