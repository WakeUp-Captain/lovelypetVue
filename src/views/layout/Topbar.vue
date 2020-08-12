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
      <el-menu-item>
        <router-link to="/goodsList">测试</router-link>
      </el-menu-item>
      <div class="loginbody">
        <el-dialog title="登录" :visible.sync="toLogin" width="600px" :center="true">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginFormRules"
            label-width="100px"
            style="margin-left: 100px;margin-top: 20px;"
          >
            <el-form-item
              label="手机号:"
              prop="iphone"
              @keyup.enter.native="handleLogin"
              auto-complete="off"
            >
              <el-col :span="14">
                <el-input
                  prefix-icon="el-icon-phone"
                  v-model="loginForm.telenum"
                  placeholder="请输入手机号"
                  @keyup.enter.native="handleLogin"
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
                <el-button @click="toLogin = false">取消</el-button>
                <el-button type="primary" @click="handleLogin">登录</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
      <el-menu-item @click="toRegist = true">注册</el-menu-item>
      <div class="registerbody">
        <el-dialog class="regiDialog" title="注册" :visible.sync="toRegist">
          <el-form
            ref="registerForm"
            :model="registerForm"
            :rules="regFormRules"
            label-width="80px"
            style="margin-left: 130px;margin-top: 20px;"
          >
            <el-form-item label="手机号:" prop="telenum">
              <el-col :span="13">
                <el-input v-model="registerForm.telenum" placeholder="请输入手机号码" @blur="checkTelenum"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-col :span="13">
                <el-input v-model="registerForm.password" placeholder="请输入8-16位密码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="确认密码:" prop="confirm">
              <el-col :span="13">
                <el-input v-model="registerForm.confirm" placeholder="请再次输入密码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="昵称:" prop="nickname">
              <el-col :span="13">
                <el-input v-model="registerForm.nickname" placeholder="请输入昵称"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="头像:" prop="headicon">
              <el-col :span="10">
                <el-upload
                  class="avatar-uploader"
                  action
                  :show-file-list="false"
                  :auto-upload="false"
                  :on-change="changeFile"
                >
                  <img v-if="registerForm.headicon!=''" :src="registerForm.headicon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-col>
            </el-form-item>
            <el-form-item label="性别:" prop="sex">
              <el-col :span="9">
                <el-radio-group v-model="registerForm.sex">
                  <el-radio label="男">男</el-radio>
                  <el-radio label="女">女</el-radio>
                </el-radio-group>
              </el-col>
            </el-form-item>
            <el-form-item label="生日" prop="birthday">
              <el-col :span="13">
                <el-input v-model="registerForm.birthday" placeholder="请输入出生日期"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="居住地:" prop="address">
              <el-col :span="13">
                <el-input v-model="registerForm.address" placeholder="请输入居住地"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-col :span="9">
                <el-button @click="toRegist = false">取消</el-button>
              </el-col>
              <el-col :span="9">
                <el-button type="primary" @click="handleRegister">注册</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>

      <el-submenu index="4">
        <template slot="title">我的订单</template>
        <el-menu-item index="4-1">
          <router-link to="/boughtOrder">我买到的宝贝</router-link>
        </el-menu-item>
        <el-menu-item index="4-2">
          <router-link to="/saledOrder">我卖出的宝贝</router-link>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">我的宝贝</template>
        <el-menu-item index="5-1">
          <router-link to="/releasedGoods">我发布的宝贝</router-link>
        </el-menu-item>
        <el-menu-item index="5-2">
          <router-link to="/offShelfGoods">我下架的宝贝</router-link>
        </el-menu-item>
        <el-menu-item index="5-3">
          <router-link to="/addGoods">发布宝贝</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">个人中心</template>
        <el-menu-item index="6-1">
          <router-link to="/detailUserInfo">个人资料</router-link>
        </el-menu-item>
        <el-menu-item index="6-2">
          <router-link to="/myStar">我的收藏</router-link>
        </el-menu-item>
        <el-menu-item index="6-3">
          <router-link to="/scanLog">浏览记录</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
// import Menu from "@/menu/index"
export default {
  name: "Topbar",
  data() {
    return {
      toHome: "/",
      toLogin: false,
      toRegist: false,
      loginFormRules: {
        iphone: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
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
      registerForm: {
        telenum: "",
        password: "",
        confirm: "",
        nickname: "",
        headicon: "",
        sex: "男",
        birthday: "",
        address: ""
      },
      regFormRules: {}
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleLogin() {
      this.$axios
        .post("/home", this.$qs.stringify(this.loginForm))
        .then(res => {
          let user = res.data;
          if (user == null || user == "") {
            this.$message.error("用户名或密码不正确");
            return false;
          } else {
            user.headicon = "";
            this.$setSessionStorage("user", user);
            this.$message.success("登录成功");
            this.toLogin = false;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    applyFor() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
    },
    handleRegister() {
      if (this.registerForm.telenum == "") {
        this.$message.error("手机号码不能为空");
        return;
      }
      if (this.registerForm.password == "") {
        this.$message.error("密码不能为空");
        return;
      }
      if (
        this.registerForm.password != "" &&
        this.registerForm.password != this.registerForm.confirm
      ) {
        this.$message.error("两次输入密码不一致");
        return;
      }
      if (this.registerForm.nickname == "") {
        this.$message.error("昵称不能为空");
        return;
      }
      this.$axios
        .post("/insert", this.$qs.stringify(this.registerForm))
        .then(res => {
          if (res.data > 0) {
            this.$message.success("注册成功");
            this.toRegist = false;
          } else {
            this.$message.error("注册失败");
          }
        })
        .catch(e => {
          this.$message.error("服务器内部发生异常");
          console.log(e);
        });
    },
    checkTelenum() {
      this.$axios
        .post(
          "/isexistuser",
          this.$qs.stringify({ telenum: this.registerForm.telenum })
        )
        .then(res => {
          if (res.data == 1) {
            this.$message.error("用户名已存在");
          } else {
            this.$message.success("用户名可以使用");
          }
        })
        .catch(e => {
          this.$message.error("服务器内部发生异常");
          console.log(e);
        });
    },
    changeFile(file) {
      var This = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function() {
        This.registerForm.headicon = this.result;
      };
    }
  },
  computed: mapState(["system"])
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
