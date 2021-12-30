const { enableBundleAnalyzer, externals } = require('./config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  externals,
  plugins: [
    ...(enableBundleAnalyzer ? [new BundleAnalyzerPlugin()] : [])
  ]
}
