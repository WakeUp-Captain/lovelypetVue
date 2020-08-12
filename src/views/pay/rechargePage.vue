<template>
  <div id="recharge">
    <el-container style="height=100%;" direction="vertical">
      <TOPBAR></TOPBAR>
      <el-main>
        <div style="margin-top:100px">
          金额：
          <el-input placeholder="请输入充值金额" v-model="balance" clearable></el-input>
        </div>
        <div style="margin-top:-50px">
            <el-button type="warning" @click="checkChange">确认充值</el-button>
        </div>
      </el-main>
      <FOOTBAR></FOOTBAR>
    </el-container>
  </div>
</template>

<script>
import TOPBAR from "../layout/Topbar";
import FOOTBAR from "../layout/Footer";
export default {
  name: "rechargePage",
  components: {
    TOPBAR,
    FOOTBAR,
  },
  data() {
    return {
      balance: "",
    };
  },
  methods:{
      //更新数据库中的余额，然后更新个人信息
      checkChange(){
         
      }
  }
};
</script>

<style scoped>
#recharge {
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
.el-input {
  width: auto;
}
</style>