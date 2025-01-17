require('dotenv-expand').expand({ parsed: { ...process.env } })

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, { test: /\.md$/, loader: 'raw-loader' }],
    },
  }),
}

module.exports = nextConfig
