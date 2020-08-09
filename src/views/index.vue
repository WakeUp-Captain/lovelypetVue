<template>
<div>
    <el-header>
        <TopBar></TopBar>
      </el-header>
</div>
</template>

<script>
import TopBar from "../components/TopBar"
export default {
    components:{
        TopBar,
    }
}
</script>

<style  scoped>
.el-header {
  color: #333;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>