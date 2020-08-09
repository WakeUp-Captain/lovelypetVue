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
axios.defaults.baseURL = 'http://localhost:8082'
Vue.prototype.$qs = qs;

Vue.prototype.$getCurDate = getCurDate;
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;
Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$removeLocalStorage = removeLocalStorage;

router.beforeEach(function(to, from, next) {
  let user = sessionStorage.getItem("user");
  //除了登陆、注册、首页、商家列表、商家信息之外，都需要判断是否登陆了
  if (
    !(
      to.path == "/" ||
      to.path == "/register" ||
      to.path == "/login"
    )
  ) {
    if (user == null) {
      router.push("/login");
      location.reload();
    }
  }
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
