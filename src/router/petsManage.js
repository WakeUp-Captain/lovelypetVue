// import PetsDetails from "@/views/pets/PetsDetails.vue";
import Layout from "@/views/layout/App.vue";
export default{
    path: "/pets",
    component: Layout,
    name: "Pet",
    meta: {
      title: "当猫爱上狗"
    },
    children: [
      {
        path: "details",
        name: "petsDetails",
        component: resolve => require(["@/views/pets/PetsDetails.vue"], resolve)
      },
    ]
}