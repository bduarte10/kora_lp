export function NoiseBackground() {
  return (
    <div className="aurora-bg" aria-hidden>
      {/* Luz suave no topo esquerdo; baixa o bastante para o texto cream manter contraste */}
      <div
        className="hero-light-breathe"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(90% 70% at 0% 0%, rgba(245, 165, 110, 0.22) 0%, transparent 60%)",
        }}
      />

      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.18, mixBlendMode: "overlay" } as React.CSSProperties}
      >
        <title>Ruído decorativo</title>
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
