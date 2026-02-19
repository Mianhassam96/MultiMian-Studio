/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/MultiMian-Studio',
  trailingSlash: true,
}

module.exports = nextConfig
