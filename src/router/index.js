import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/tologinPage.vue";
import Register from "../views/register/toregisterPage.vue";
import Index from "../views/index.vue";

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
    {
        path:"/index",
        component:Index,
    },
    {
        path:"/",
        component:Index,
    }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
   mode:'history',
  routes
});

export default router;
