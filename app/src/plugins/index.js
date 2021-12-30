import * as log from '@/utils/log'

const loader = require.context('.', true, /^\.\/[\w-]+\/index.js$/)

loader.keys().map(path => {
  const mod = loader(path).default
  const pluginName = path.match(/^\.\/([\w-]+)\/index.js$/)[1]
  log.inPluginEnv(pluginName, () => {
    console.log(mod)
  })
})
