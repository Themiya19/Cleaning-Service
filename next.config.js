/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Removed 'output: export' to enable server-side features like API routes
};

module.exports = nextConfig;
