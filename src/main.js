// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import './mock.js'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$axios = Axios

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true
Vue.http.options.root = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
