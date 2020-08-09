import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import elementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';



Vue.config.productionTip = false
Vue.use(elementUi)
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:8080/";
// axios.defaults.baseURL = 'houtai'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
