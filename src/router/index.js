import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeView'
import Evaluador from '@/components/profile-tabs/Evaluador'
import Club from '@/components/profile-tabs/Club'
import Admin from '@/components/profile-tabs/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/evaluador',
      name: 'Evaluador',
      component: Evaluador
    },
    {
      path: '/club',
      name: 'Club',
      component: Club
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
