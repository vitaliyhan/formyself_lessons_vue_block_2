import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import er404 from './pages/404'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
      name: 'home'
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
          name: 'CarFull',
          beforeEnter(to, from, next) {
            console.log('before enter')
            next()
            // if (false) {
            //     next()
            // } else {
            //   next(false)
            // }
          }
        }
      ]
    },
    {
      path: '/*',
      component: er404
    }
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
