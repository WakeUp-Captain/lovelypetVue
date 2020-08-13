import Layout from "@/views/layout/App.vue";
export default{
    path: "/user",
    component: Layout,
    name: "User",
    meta: {
      title: "个人中心"
    },
    children: [
      {
        path: "history",
        name: "History",
        component: resolve => require(["@/views/user/BrowseHistory.vue"], resolve)
      },
      {
        path: "star",
        name: "Star",
        component: resolve => require(["@/views/user/Star.vue"], resolve)
      },
      {
        path: "myinfo",
        name: "Myinfo",
        component: resolve => require(["@/views/userInfo/detailUserInfo.vue"], resolve)
      },
      {
        path: "modifyUserInfo",
        name: "ModifyUserInfo",
        component: resolve => require(["@/views/userInfo/modifyUserInfo.vue"], resolve)
      },
      {
        path: "rechargePage",
        name: "RechargePage",
        component: resolve => require(["@/views/pay/rechargePage.vue"], resolve)
      },
      {
        path: "addPets",
        name: "AddPets",
        component: resolve => require(["@/views/goods/addGoods.vue"], resolve)
      },
      {
        path: "login",
        name: "Login",
        component: resolve => require(["@/views/login/tologinPage.vue"], resolve)
      },
      {
        path: "register",
        name: "Register",
        component: resolve => require(["@/views/register/toregisterPage.vue"], resolve)
      },
    ]
}