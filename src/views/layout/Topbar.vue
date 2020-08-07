<template>
  <div class="topbar-menu">
    <!-- <div class="topbar-menu"> -->
    <span>欢迎来到当猫爱上狗！</span>
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item :index="toHome">首页</el-menu-item>
      <el-menu-item @click="toLogin = true">登录</el-menu-item>
      <el-dialog title="登录" :visible.sync="toLogin" width="600px" :center="true">
        <LoginForm />
        <div slot="footer" class="dialog-footer">
              <el-button @click="toLogin = false">取消</el-button>
              <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
            </div>
      </el-dialog>
      <el-menu-item @click="toRegist = true">注册</el-menu-item>
      <el-dialog title="注册" :visible.sync="toRegist" width="600px" :center="true">
        <RegistForm />
        <div slot="footer" class="dialog-footer">
              <el-button @click="toRegist = false">取消</el-button>
              <el-button type="primary" @click.native.prevent="handleLogin">注册</el-button>
            </div>
      </el-dialog>
      <el-submenu index="4">
        <template slot="title">我的宝贝</template>
        <el-menu-item index="4-1">已买的宝贝</el-menu-item>
        <el-menu-item index="4-2">已卖出的宝贝</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">收藏夹</el-menu-item>
      <el-submenu index="6">
        <template slot="title">个人中心</template>
        <el-menu-item index="6-1">个人资料</el-menu-item>
        <el-menu-item index="6-2">地址管理</el-menu-item>
        <el-menu-item index="6-3">消息</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoginForm from "../login/tologinPage.vue";
import RegistForm from "../register/toregisterPage.vue"
// import Menu from "@/menu/index"
export default {
  name: "Topbar",
  data() {
    return {
      toHome: "/",
      toLogin: false,
      toRegist: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: mapState(["system"]),
  components: { LoginForm,RegistForm },
};
</script>
<style scoped lang="scss">
.topbar-menu {
  width: 100%;
  height: 80px;
  background-color: #409eff;
}
span {
  position: absolute;
  margin-left: 80px;
  margin-top: 30px;
  font-size: 18px;
  color: #fff;
}
.topbar-menu ul {
  // width:100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 800px;
}
.topbar-menu ul li {
  font-size: 20px;
}

</style>
<style>
.el-menu--horizontal > .el-submenu .el-submenu__title {
  font-size: 20px;
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  size: 20px;
  color: #fff;
}
</style>
