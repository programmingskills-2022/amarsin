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

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;
