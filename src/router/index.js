import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import Login from "../views/login/tologinPage.vue";
import Register from "../views/register/toregisterPage.vue";
// import PetsDetails from "@/views/pets/PetsDetails.vue"
import PetsManage from "./petsManage"
import OrderManage from "./orderManage";
import UserManage from "./userManange";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "PetHome",
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
      },
    ]
  },
  PetsManage,
  OrderManage,
  UserManage,
  {
    path:'/login',
    component:Login,
},
{
    path:'/register',
    component:Register,
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
