import observe from './observe'

function defineReactive(data, key, value) {
  // value有可能是个嵌套对象
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal === value) {
        return
      }
      value = newValue
    }
  })
}

export default defineReactive