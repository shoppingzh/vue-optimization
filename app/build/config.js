const useCDN = true

const externals = useCDN ? {
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
  externals,
  enableBundleAnalyzer: process.env.NODE_ENV === 'development'
}
