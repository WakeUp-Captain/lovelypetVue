import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/App.vue";
import Login from "../views/login/tologinPage.vue";
import Register from "../views/register/toregisterPage.vue";
import addGoods from "../views/goods/addGoods.vue";
import detailGoods from "../views/goods/detailGoods.vue";
import modifyGoods from "../views/goods/modifyGoods.vue";
import boughtOrder from "../views/order/boughtOrder";
import saledOrder from "../views/order/saledOrder";
import payment from "../views/pay/payment";
import myStar from "../views/star/myStar";
import detailUserInfo from "../views/userInfo/detailUserInfo";
import modifyUserInfo from "../views/userInfo/modifyUserInfo";
import rechargePage from "../views/pay/rechargePage";
import scanLog from "../views/star/scanLog";
import releasedGoods from "../views/goods/releasedGoods";
import offShelfGoods from "../views/goods/offShelfGoods";
import goodsList from "../views/goods/goodsList";

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
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: "/addGoods",
        component: addGoods
    },
    {
        path: "/detailGoods",
        component: detailGoods
    },
    {
        path: "/modifyGoods",
        component: modifyGoods
    },
    {
        path: "/boughtOrder",
        component: boughtOrder
    },
    {
        path: "/saledOrder",
        component: saledOrder
    },
    {
        path: "/payment",
        component: payment
    },
    {
        path: "/myStar",
        component: myStar
    },
    {
        path: "/detailUserInfo",
        component: detailUserInfo
    },
    {
        path: "/modifyUserInfo",
        component: modifyUserInfo
    },
    {
        path: "/rechargePage",
        component: rechargePage
    },
  {
    path: "/scanLog",
    component: scanLog
  },
    {
        path: "/offShelfGoods",
        component: offShelfGoods
    },
    {
        path: "/releasedGoods",
        component: releasedGoods
    },
    {
        path: "/goodsList",
        component: goodsList
    }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
    routes
});

export default router;
