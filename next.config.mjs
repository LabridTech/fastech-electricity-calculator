import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let userConfig = undefined;

try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Consider enabling for production
  },
  typescript: {
    ignoreBuildErrors: false, // Consider enabling for production
  },
  images: {
    unoptimized: true,
    domains: [
      'example.com',
      'yourcdn.com'
    ]
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src')
    return config
  },
  async redirects() {
    return []
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return nextConfig
  }

  return {
    ...nextConfig,
    ...userConfig,
    experimental: {
      ...nextConfig.experimental,
      ...userConfig.experimental,
    },
    images: {
      ...nextConfig.images,
      ...userConfig.images,
    },
    webpack: (config, options) => {
      let modifiedConfig = config;
      
      if (nextConfig.webpack) {
        modifiedConfig = nextConfig.webpack(modifiedConfig, options);
      }
      
      if (userConfig.webpack) {
        modifiedConfig = userConfig.webpack(modifiedConfig, options);
      }
      
      return modifiedConfig;
    },
  }
}

export default mergeConfig(nextConfig, userConfig);
