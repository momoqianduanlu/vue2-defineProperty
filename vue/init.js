import proxyData from './proxy'

function initState(vm) {
  let options = vm.$options
  if (options.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
  // proxy
  for (let key in data) {
    proxyData(vm, '_data', key)
  }
}

export {
  initState
}