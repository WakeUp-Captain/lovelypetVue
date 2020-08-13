import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import elementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import store from "./store";
import "@/utils/v-auth.js";
import Config from "@/config/app";
import  qs from 'qs'

import {
  getCurDate,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  sessionStorage,
} from "./common.js";


Vue.config.productionTip = false;
Vue.prototype.GlobalCfg = Config;
Vue.use(elementUi)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/'
Vue.prototype.$qs = qs

Vue.prototype.$getCurDate = getCurDate;
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;
Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$removeLocalStorage = removeLocalStorage;
Vue.prototype.$sessionStorage = sessionStorage;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
