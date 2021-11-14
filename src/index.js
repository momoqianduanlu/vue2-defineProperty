import Vue from 'vue'

const vm = new Vue({
  el: '#app',
  data() {
    return {
      name: 'sabo',
      info: {
        a: {
          b: 1
        }
      },
      list: ['aaa', 'bbb', 'ccc'],
      people: [
        {
          id: 1,
          name: '小明'
        },
        {
          id: 2,
          name: '小刘'
        }
      ]
    }
  }
})

console.log(vm.name, vm);