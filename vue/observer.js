import defineReactive from './reactive'
import { arrayMethods } from './array'
import observeArray from './observerArray'

function Observer(data) {
  // 数组响应式
  if (Array.isArray(data)) {
    data.__proto__ = arrayMethods
    observeArray(data)
  } else {
    // 对象响应式
    this.walk(data)
  }
}

Observer.prototype.walk = function(data) {
  const keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = data[key]
    defineReactive(data, key, value)
  }
}

export default Observer