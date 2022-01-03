const { isDevMode, enableBundleAnalyzer, externals } = require('./config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  externals,
  plugins: [
    ...(enableBundleAnalyzer ? [new BundleAnalyzerPlugin()] : []),
    ...(isDevMode ? [] : [new CompressionPlugin({
      test: /\.js$/,
      algorithm: 'gzip',
      threshold: 0,
      deleteOriginalAssets: true
    })])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 20000,
      cacheGroups: {
        vendors: {
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `npm.${packageName.replace('@', '')}`
          },
          test: /[\\/]node_modules[\\/]/,
          maxSize: 500 * 1000,
          priority: -10,
          chunks: 'initial'
        }
      }
    }
  }
}
