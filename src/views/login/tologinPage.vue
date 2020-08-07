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
              <el-form-item label="验证码:" prop="verifycode">
                <el-col :span="14">
                  <el-input v-model="login.verifycode" placeholder="请输入验证码" class="identifyinput">
                    <i slot="prefix" class="el-input__icon el-icon-s-check" style="font-size: 22px"></i>
                  </el-input>
                </el-col>
              </el-form-item>
              <el-form-item>
                <div class="identifybox">
                  <div @click="refreshCode">
                    <s-identify :identifyCode="identifyCode"></s-identify>
                    <el-button @click="refreshCode" type="text" class="textbtn">看不清，换一张</el-button>
                  </div>
                </div>
              </el-form-item>
            </el-form>
  </div>
</template>

<script>
import SIdentify from "../../components/indetify";

export default {
  components: {
    SIdentify
  },
  data() {
    const validateVerifycode = (rule, value, callback) => {
      let newVal = value.toLowerCase();
      let identifyStr = this.identifyCode.toLowerCase();
      if (newVal === "") {
        callback(new Error("请输入验证码"));
      } else if (newVal !== identifyStr) {
        console.log("validateVerifycode:", value);
        callback(new Error("验证码不正确!"));
      } else {
        callback();
      }
    };

    return {
      loginFormRules: {
        iphone: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "长度在8至16个字符", trigger: "blur" }
        ],
        verifycode: [
          { required: true, trigger: "blur", validator: validateVerifycode }
        ]
      },
      login: {
        iphone: "",
        password: "",
        verifycode: "",
      },
      identifyCodes: "1234567890ABCDEFGHIGKLMNoPQRSTUVWXYZ",
      identifyCode: "",
      dialogFormVisible: false
    };
  },
  created() {},
  mounted() {
    // 验证码初始化
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  computed: {},
  props: [],
  methods: {
    // 点击登入按钮
    handleLogin() {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          this.$router.push("/login");
        }
      });
    },
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
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
.identifybox{
  display: flex;
  justify-content: space-between;
  margin-top:7px;
}
</style>