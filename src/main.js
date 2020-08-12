import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import elementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import qs from "qs";

import {
  getCurDate,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "./common.js";


Vue.config.productionTip = false
Vue.use(elementUi)
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:8082/";
Vue.prototype.$qs = qs;
// axios.defaults.baseURL = 'houtai'

Vue.prototype.$getCurDate = getCurDate;
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;
Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$removeLocalStorage = removeLocalStorage;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
