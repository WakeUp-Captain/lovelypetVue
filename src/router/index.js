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
