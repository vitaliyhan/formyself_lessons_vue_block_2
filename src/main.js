import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  render: h => h(App)
})

export const eventEmitter = new Vue()
