<template>
  <div id="app" class="loginbox">
    <el-container style="height=100%;" direction="vertical">
      <el-header>
        当猫爱上狗
        <el-button type="success" @click="dialogFormVisible = true">登录</el-button>
      </el-header>
      <el-main>
        <div class="loginbody">
          <el-dialog class="loginDialog" title="登录" :visible.sync="dialogFormVisible">
            <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" label-width="100px">
              <el-form-item label="手机号:" prop="telenum" auto-complete="off">
                <el-col :span="14">
                  <el-input
                    prefix-icon="el-icon-phone"
                    v-model="loginForm.telenum"
                    placeholder="请输入手机号"
                  ></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="密码:" prop="password">
                <el-col :span="14">
                  <el-input
                    prefix-icon="el-icon-lock"
                    v-model="loginForm.password"
                    placeholder="请输入密码"
                    show-password
                  ></el-input>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-col :span="12">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button type="primary" @click="toregister">注册</el-button>
                </el-col>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import Footer from "../../components/Fooder";

export default {
  components: {
    Footer
  },
  data() {
    return {
      loginFormRules: {
        telenum: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在8至16个字符", trigger: "blur" }
        ]
      },
      loginForm: {
        telenum: "",
        password: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    // 点击登入按钮
    submitForm() {
      this.$axios.post("/user/login", this.$qs.stringify(this.loginForm))
      .then(res => {
          let user = res.data;
          if (user == null || user == "") {
            this.$message.error("用户名或密码不正确");
            return false;
          } else {
            user.headicon = "";
            this.$setSessionStorage('user',user);
            this.$router.push({ path: "/index" });
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    toregister(){
      this.$router.push({path:"/register"});
    },
  }
};
</script>


<style scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
html,
body,
.loginbox,
.el-container {
  margin: 0px;
  padding: 0px;
  height: 100%;
}
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
  width: 800px;
  height: 800px;
  background: url("../../assets/background.jpg");
  background-size: 100%, 100%;
  height: 100%;
  position: fixed;
  width: 100%;
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