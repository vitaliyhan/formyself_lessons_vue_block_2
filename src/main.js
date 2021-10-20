import Vue from 'vue'
import App from './App'

Vue.filter('lowCase', (value)=>{
  return value.toLowerCase()
})

new Vue({
  el: '#app',
  render: h => h(App),

})


