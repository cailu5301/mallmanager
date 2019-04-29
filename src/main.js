// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import axios from 'axios'
import moment from 'moment'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
Vue.prototype.$http = axios
const AUTH_TOKEN = localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.filter('fmtDate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
