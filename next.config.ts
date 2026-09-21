import createMDX from "@next/mdx";
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cdn.kora.com.br" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

// Plugins como strings para compatibilidade com Turbopack (serializável).
const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [["rehype-slug"], ["rehype-autolink-headings", { behavior: "wrap" }]],
  },
});

export default withSentryConfig(withMDX(nextConfig), {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  // Silencioso no dev; loga só no CI. Upload de sourcemaps só roda se
  // SENTRY_AUTH_TOKEN estiver presente (build da Vercel) — caso contrário é pulado.
  silent: !process.env.CI,
  widenClientFileUpload: true,
  // Remove os logs de debug do SDK no bundle de produção.
  webpack: { treeshake: { removeDebugLogging: true } },
});
