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
  ]
}
