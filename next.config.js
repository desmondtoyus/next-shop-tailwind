/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'cdn.builder.io',
      'cdn.shopify.com',
      'seal-alaskaoregonwesternwashington.bbb.org',
    ],
  },
};

module.exports = nextConfig;
