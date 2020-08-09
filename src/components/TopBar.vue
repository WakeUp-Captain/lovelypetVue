<template>
  <div style="margin-bottom:20px">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
      <el-menu-item index="5" v-if="!isLogin">
        <a href="#" @click="toLogin">登录</a>
      </el-menu-item>
        <el-submenu index="5" v-else>
            <template slot="title" >{{nickname}}</template>
            <el-menu-item index="5-1" @click="loginout">注销</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      isLogin:false,
      nickname:'',
    };
  },
  mounted(){
      if(this.$getSessionStorage('user') == null){
          this.isLogin=false;
      }else{
          this.isLogin=true;
          this.nickname = this.$getSessionStorage('user').nickname;
      }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin(){
        this.$router.push({path:"/login"});
    },
    loginout(){
        this.$removeSessionStorage("user");
        this.isLogin=false;
        this.$router.push({path:"/index"});
    }
  },
};
</script>
