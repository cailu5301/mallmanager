import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login'
import Home from '@/components/Home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
