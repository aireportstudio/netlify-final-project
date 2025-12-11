

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  // Netlify handles compression via CDN
  compress: false,

  images: {
    unoptimized: true, // ✅ REQUIRED for Netlify static + CDN image handling
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ai-report-studio.projectwork9892.workers.dev",
      },
      {
        protocol: "https",
        hostname: "www.ai-report-studio.projectwork9892.workers.dev",
      },
    ],
  },

  // ✅ Use Netlify/Cloudflare redirect instead of Next.js host-based redirect
  async redirects() {
    return [];
  },
};

export default nextConfig;
