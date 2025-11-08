// Flat config for ESLint v9: import Next's recommended config
// This uses the shareable config provided by eslint-config-next.
// If eslint-config-next is not installed, `next lint` will install it.
try {
  const nextConfig = require('eslint-config-next')
  // many shareable configs expose a `configs` object; prefer the core-web-vitals variant
  const base = (nextConfig && nextConfig.configs && nextConfig.configs['next/core-web-vitals']) || nextConfig
  module.exports = Array.isArray(base) ? base : [base]
} catch (e) {
  // Fallback: minimal config so ESLint doesn't crash. Next will still manage .eslintrc.json.
  module.exports = []
}
