import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/Index')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
