import Vue from 'vue'

const vm = new Vue({
  el: '#app',
  data() {
    return {
      name: 'sabo'
    }
  }
})

console.log(vm.name, vm);