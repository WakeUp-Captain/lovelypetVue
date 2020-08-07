<<<<<<< HEAD
<<<<<<< HEAD
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Pet",
    redirect: "/home",
    meta: {
      title: "当猫爱上狗"
    },
    children: [
      {
        path: "home",
        name: "Home",
        meta: {
          title: "首页"
        },
        component: resolve => require(["@/views/home/Index.vue"], resolve)
      }
    ]
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes
});

export default router;
=======
<template>
    <h1></h1>
</template>

>>>>>>> origin/master
=======
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
>>>>>>> 0b40069007c974be5bfac0c5f44e8ebed25cdf69
