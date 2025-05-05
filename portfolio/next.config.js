module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Alias Drei’s Stats import if used elsewhere
    config.resolve.alias['three/examples/js/libs/stats.min'] =
      require.resolve('three/examples/jsm/libs/stats.module.js');
    return config;
  },
};