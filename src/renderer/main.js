import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import tustnet from '../tustnet'

import { Spinner, Switch, Button, Header, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
import './assets/global.css'

Vue.component(Spinner.name, Spinner)
Vue.component(Switch.name, Switch)
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.adapter = require('axios/lib/adapters/http')
axios.defaults.timeout = 2000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
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
