// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.css'
import moment from 'moment'
import cusBread from '@/components/cusBread/cusBread'
import http from './http'

Vue.use(http)

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.filter('fmtDate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})

/* eslint-disable no-new */
Vue.component(cusBread.name, cusBread)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
