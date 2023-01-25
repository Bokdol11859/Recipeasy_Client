/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'recipeasy-data.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'recipeasy-image.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
