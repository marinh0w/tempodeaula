// const withTypescript = require("@zeit/next-typescript");

// module.exports = withTypescript({
//   useFileSystemPublicRoutes: false,
// });

  /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 
