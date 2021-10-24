import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/cars',
      component: Cars,
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'CarFull'
        }
      ]
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, save) {
    if (save) {
      return save
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }


  }

})
