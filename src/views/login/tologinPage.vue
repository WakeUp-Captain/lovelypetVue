<template>
  <div  class="loginbox">
            <el-form ref="loginFormRef" :model="login" :rules="loginFormRules" label-width="100px">
              <el-form-item label="手机号:" prop="iphone"  @keyup.enter.native="handleLogin" auto-complete="off">
                <el-col :span="14">
                  <el-input prefix-icon="el-icon-phone" v-model="login.iphone" placeholder="请输入手机号" @keyup.enter.native="handleLogin"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="密码:" prop="password">
                <el-col :span="14">
                  <el-input
                    prefix-icon="el-icon-lock"
                    v-model="login.password"
                    placeholder="请输入密码"
                    show-password
                  ></el-input>
                </el-col>
              </el-form-item>
            </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginFormRules: {
        iphone: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在8至16个字符", trigger: "blur" }
        ],
      },
      login: {
        iphone: "",
        password: "",
        verifycode: "",
      },
      dialogFormVisible: false
    };
  },
  methods: {
    // 点击登入按钮
    // handleLogin() {
    //   this.$refs.loginFormRef.validate(valid => {
    //     if (valid) {
    //       this.$router.push("/");
    //     } else {
    //       this.$router.push("/login");
    //     }
    //   });
    // },
    applyFor() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    },
    // handleLogin () {
    //   alert('登陆成功')
    //   this.dialogVisible = false
    // },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style scoped>
.el-main {
  text-align: center;
  line-height: 160px;
}

.el-header {
  background-color: #ffeccb;
  color: #333;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.loginbox {
  height: 350px;
  margin-top:60px;
}
.el-form {
  margin-left: 150px;
  margin-top: -50px;
}
.dialog-footer {
  margin-right: 300px;
  margin-top: -50px;
}
.loginDialog {
  font-size: 20px;
}
</style>