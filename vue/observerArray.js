import observe from './observe'

function observerArray(array) {
  for (let i = 0; i < array.length; i++) {
    // 响应式处理
    observe(array[i])
  }
}

export default observerArray