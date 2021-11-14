import { methodsToPatch } from './config'

const originalArray = Array.prototype // 数组原型
const arrayMethods = Object.create(originalArray)

methodsToPatch.forEach(method => {
  arrayMethods[method] = function() {
    const args = originalArray.slice.call(arguments)
    const result = originalArray[method].apply(this, args) // 执行原有数组方法
    /**
     * 为什么要对数组方法做响应式？
     * 因为数组的七种方法会新增或删除原数组，
     * 新增的数据也要进行get set，
     */
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) {
      observerArray(inserted)
    }
    return result
  }
})

export {
  arrayMethods
}