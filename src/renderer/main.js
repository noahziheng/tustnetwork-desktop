import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import tustnet from '../tustnet'

import { Spinner } from 'mint-ui'

Vue.component(Spinner.name, Spinner)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.adapter = require('axios/lib/adapters/http')
axios.defaults.timeout = 2000
Vue.http = Vue.prototype.$http = axios
Vue.prototype.tustnet = tustnet
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
