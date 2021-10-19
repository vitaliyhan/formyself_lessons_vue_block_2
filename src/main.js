import Vue from 'vue'
import App from './App'

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})


