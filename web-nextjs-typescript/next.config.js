const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    // eslint-disable-next-line no-param-reassign
    config.node = {
      fs: 'empty',
    };
    
    return config;
  },
  async exportPathMap() {
    return {
      '/': { page: '/' },
      // '/picture': { page: '/picture' },
    };
  },
  assetPrefix: isProd ? '.' : '',
};
