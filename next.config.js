const { PHASE_PRODUCTION_SERVER } = require('next/constants');
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ]
  },
}

const nextConfig_production = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dkecotech.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ]
  },
}

module.exports = (phase) => {
  return phase === PHASE_PRODUCTION_SERVER ? withNextIntl(nextConfig_production) : withNextIntl(nextConfig);
}