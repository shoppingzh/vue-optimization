const packageConfig = require('../package.json')
const isDevMode = process.env.NODE_ENV === 'development'

const externals = packageConfig.useCDN ? {
  'vue': 'Vue',
  'video.js': 'videojs',
  'axios': 'axios',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'lodash': '_',
  'dayjs': 'dayjs',
  'echarts': 'echarts',
  'moveable': 'Moveable',
  'pdfjs-dist': 'pdfjsLib'
} : {}

module.exports = {
  packageConfig,
  externals,
  isDevMode,
  enableBundleAnalyzer: isDevMode
}
