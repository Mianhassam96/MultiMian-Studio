/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // enable static export
  basePath: '/MultiMian-Studio', // GitHub repo name
  assetPrefix: '/MultiMian-Studio/', // ensures assets load correctly
  experimental: {
    turbo: {},
  },
}

module.exports = nextConfig
