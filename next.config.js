const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.fastly.com'],
  },
};

module.exports = withExportImages(nextConfig);
