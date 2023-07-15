/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  output: "export",
  publicRuntimeConfig: {
    staticFolder: "/public",
  },
};

module.exports = nextConfig;
