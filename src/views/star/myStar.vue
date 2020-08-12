<template>
  <div>
    <p>
      我的收藏页
      收藏页相当于购物车，可以由此去支付页
    </p>
    <el-button type="danger" @click="topay">去支付</el-button>
  </div>
</template>

<script>
export default {
  name: "myStar",
  methods: {
    topay(){
        this.$router.push({path:"/payment"});
    }
  }
};
</script>

<style scoped>
</style>