import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/tologinPage.vue";
import Register from "../views/register/toregisterPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/register',
        component:Register,
    },
];


const router = new VueRouter({
   mode:'history',
  routes
});

export default router;
