import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Alerts from '@/components/Alerts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts
    }
  ]
})
