/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static export
  }, // ✅ This enables static export
};

module.exports = nextConfig;
