/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_OUTPUT_MODE || 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config) => {
    if (process.env.NEXT_OUTPUT_MODE !== 'export' || !config.module) {
      return config
    }
    config.module.rules?.push(
      {
        test: /src\/app\/api/,
        loader: 'ignore-loader',
      },
      {
        test: /src\/app\/dashboard/,
        loader: 'ignore-loader',
      }
    )
    return config
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'giveth.mypinata.cloud',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'image.nftscan.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
