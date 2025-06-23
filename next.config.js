/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Optional: for cleaner URLs with `/about/`
  images: {
    unoptimized: true, // Optional: only if not using image optimization
  },
  output: 'standalone', // Optional: better for Vercel/Node serverless functions
};

module.exports = nextConfig;
