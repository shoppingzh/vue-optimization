export function inPluginEnv(name, cb) {
  console.warn(`===================================== ${name} =====================================`)
  cb && cb()
  console.warn(`===================================== ${name} =====================================`)
  console.log('')
  console.log('')
}
