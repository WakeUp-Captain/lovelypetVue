<template>
  <div id="payment">
    <el-container style="height=100%;" direction="vertical">
      <TOPBAR></TOPBAR>
      <el-main>
        <div>
          <el-image style="width: 1100px; height: 500px"  :lazy='true' :src="imgUrl"></el-image>
        </div>
        <div style="margin-top:-120px">请使用微信扫码支付</div>
      </el-main>
      <FOOTBAR></FOOTBAR>
    </el-container>
  </div>
</template>

<script>
import TOPBAR from "../layout/Topbar";
import FOOTBAR from "../layout/Footer";
export default {
  name: "payment",
  components: {
    TOPBAR,
    FOOTBAR
  },
  data(){
    return{
        imgUrl: require("../../assets/images/pay.png")
    }
  }
};
</script>

<style>
#payment {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
html,
body,
.el-container {
  margin: 0px;
  padding: 0px;
  height: 100%;
}
.el-main {
  text-align: center;
  line-height: 160px;
}
</style>