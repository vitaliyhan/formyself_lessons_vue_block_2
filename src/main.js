import Vue from 'vue'
import App from './App'
import List from "./List";
import mixin from "./mixin";

Vue.component('app-list',List)
Vue.filter('lowCase', (value)=>{
  return value.toLowerCase()
})

Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate')
  }
})

new Vue({
  el: '#app',
  render: h => h(App),

})


