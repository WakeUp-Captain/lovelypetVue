<template>
  <div class="topbar-menu">
    <!-- <div class="topbar-menu"> -->
    <div class="welcome">

      <span>欢迎来到当猫爱上狗！</span>
      <!-- <span> -->

      <span v-if="user != null">
        {{user.nickname}}
        <img width="30px" height="30px" :src="this.user.headicon"/>
      </span>

      <span  v-if="user == null">
        <button  @click="toLogin()">登录</button>
        <button @click="toRegister()">注册</button>
      </span>

      <!-- <el-dialog
        title="登录"
        :visible.sync="toLogin"
        width="600px"
        :center="true"
        :modal="false"
      >
        <LoginForm />
        <div slot="footer" class="dialog-footer">
          <el-button @click="toLogin = false">取消</el-button>
          <el-button type="primary" @click.native.prevent="handleLogin"
            >登录</el-button
          >
        </div>
      </el-dialog> -->

<!--      <el-dialog-->
<!--        title="注册"-->
<!--        :visible.sync="toRegist"-->
<!--        width="600px"-->
<!--        :center="true"-->
<!--        :modal="false"-->
<!--      >-->
<!--        <RegistForm />-->
<!--        <div slot="footer" class="dialog-footer">-->
<!--          <el-button @click="toRegist = false">取消</el-button>-->
<!--          <el-button type="primary" @click.native.prevent="handleLogin"-->
<!--            >注册</el-button-->
<!--          >-->
<!--        </div>-->
<!--      </el-dialog>-->
      <!-- </span> -->

    </div>
    <div class="menu">
      <el-menu
        :default-active="this.$route.path"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="/order">
          <template slot="title">我的宝贝</template>
          <el-menu-item index="/order/boughtOrder">已买的宝贝</el-menu-item>
          <el-menu-item index="/order/soldOrder">已卖出的宝贝</el-menu-item>
        </el-submenu>
        <el-menu-item index="/user/star">收藏夹</el-menu-item>
        <el-submenu index="/user">
          <template slot="title">个人中心</template>
          <el-menu-item index="/user/myinfo">个人资料</el-menu-item>
          <el-menu-item index="/user/rechargePage">充值中心</el-menu-item>
          <el-menu-item index="/user/addPets">发布宝贝</el-menu-item>
          <el-menu-item @click="loginOut()">退出登录</el-menu-item>
          <el-menu-item index="/user/history">浏览历史</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import LoginForm from "../login/tologinPage.vue";
// import RegistForm from "../register/toregisterPage.vue"
export default {
  name: "Topbar",
  data() {
    return {
      toHome: "/home",
      // toLogin: false,
      toRegist: false,
      user:this.$getSessionStorage("user"),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin(){
      this.$router.push("/user/login")
    },
    toRegister() {
      this.$router.push("/user/register");
    },
    // 点击退出登录
    loginOut(){
      this.$removeSessionStorage("user");
      alert("已退出登录！！");
      this.$router.push("/home");
      this.$router.go(0);
    },
  },
  computed: mapState(["system"]),
  // components: { RegistForm },
}
</script>
<style scoped lang="scss">
.topbar-menu {
  width: 100%;
}
.welcome {
  margin-left: 80px;
  margin-top: 30px;
  font-size: 18px;
  color: #fff;
}
.menu {
  padding-right: 50px;
  float: right;
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: -55px;
}
.topbar-menu ul {
  border: none;
  display: flex;
  align-items: center;
  justify-items: center;
}
.topbar-menu ul li {
  font-size: 20px;
}
button {
  border: none;
  font-size: 18px;
  background-color: #409eff;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;
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
