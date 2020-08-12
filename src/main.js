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



Vue.config.productionTip = false;
Vue.prototype.GlobalCfg = Config;
Vue.use(elementUi)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'houtai'
Vue.prototype.$qs = qs

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
