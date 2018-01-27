import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import AlertsList from '@/components/Alerts/List'
import SingleAlert from '@/components/Alerts/Single'
import NewAlert from '@/components/Alerts/New'

Vue.use(Router)

export default new Router({
  mode: 'history', // <=
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: AlertsList
    },
    {
      path: '/alerts/new',
      name: 'New Alert',
      component: NewAlert
    },
    {
      path: '/alerts/:id',
      name: 'Alert',
      component: SingleAlert
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
