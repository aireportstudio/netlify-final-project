// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   compress: true, // ✅ enable gzip/brotli compression

// images: {
//     unoptimized: false, // ✅ let Next optimize images
//     formats: ["image/avif", "image/webp"], // ✅ modern formats
//     minimumCacheTTL: 31536000, // ✅ cache images for 1 year

//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "api.aiprojectreport.com",
//       },
//       {
//         protocol: "https",
//         hostname: "www.api.aiprojectreport.com",
//       },
//     ],
//   },

//   async redirects() {
//     return [
//       {
//         source: "/:path*",
//         has: [{ type: "host", value: "aiprojectreport.com" }],
//         destination: "https://www.aiprojectreport.com/:path*",
//         permanent: true,
//       },
//     ]
//   },
// }

// export default nextConfig



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
        hostname: "api.aiprojectreport.com",
      },
      {
        protocol: "https",
        hostname: "www.api.aiprojectreport.com",
      },
    ],
  },

  // ✅ Use Netlify/Cloudflare redirect instead of Next.js host-based redirect
  async redirects() {
    return [];
  },
};

export default nextConfig;
