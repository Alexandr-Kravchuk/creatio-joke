/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
      {
        protocol: 'https',
        hostname: 'www.creatio.com',
      },
      {
        protocol: 'https',
        hostname: 'd3a7ykdi65m4cy.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;

