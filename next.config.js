/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',           // static export — required for GitHub Pages
  basePath: '/MultiMian-Studio',
  assetPrefix: '/MultiMian-Studio/',
  images: {
    unoptimized: true,        // required for static export
  },
  eslint: {
    ignoreDuringBuilds: true, // lint separately; don't block the build
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
