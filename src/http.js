import axios from 'axios'

const httpServer = {}
httpServer.install = function (Vue, options) {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  // 请求拦截器
  axios.interceptors.request.use(function (config) {
    console.log('请求拦截器被触发了....')
    if (config.url !== 'login') { 
      const AUTH_TOKEN = localStorage.getItem('token')
      config.headers['Authorization'] = AUTH_TOKEN
    }
    console.log(config)
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })
  Vue.prototype.$http = axios
}

export default httpServer
