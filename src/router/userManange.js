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
    ]
}