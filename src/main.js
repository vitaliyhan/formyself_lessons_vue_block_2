import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'


Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/'

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0e.....etc')
  request.headers.set('Accept', 'application/json')
  next()
})

new Vue({
  el: '#app',
  render: h => h(App),
})


