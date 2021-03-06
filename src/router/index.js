import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login'
import Home from '@/components/Home/home'
import User from '@/components/Users/users.vue'
import Rights from '@/components/Rights/Rights'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/users',
        name: 'users',
        component: User
      }, {
        path: '/rights',
        name: 'rights',
        component: Rights
      }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
