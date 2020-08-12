import Layout from "@/views/layout/App.vue";
import SoldOrder from "@/views/order/SoldOrder.vue"
import BoughtOrder from "@/views/order/BoughtOrder.vue"
export default{
    path: "/order",
    component: Layout,
    name: "Order",
    meta: {
      title: "我的宝贝"
    },
    children: [
      {
        path: "boughtOrder",
        name: "BoughtOrder",
        component: BoughtOrder
      },
      {
        path: "soldOrder",
        name: "SoldOrder",
        component: SoldOrder
      },
    ]
}