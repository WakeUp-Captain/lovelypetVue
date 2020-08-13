<template>
    <div>
        <el-divider content-position="center">
            <div style="font-size:25px">
                登录
                <i class="el-icon-user"></i>
            </div>
        </el-divider>
        <div class="show">

            <el-form
                    ref="loginFormRef"
                    :model="login"
                    :rules="loginFormRules"
                    label-width="100px"
            >
                <el-form-item
                        label="手机号:"
                        prop="telenum"
                        @keyup.enter.native="handleLogin"
                        auto-complete="off"
                >
                    <el-col :span="14">
                        <el-input
                                prefix-icon="el-icon-phone"
                                v-model="login.telenum"
                                placeholder="请输入手机号"
                                @keyup.enter.native="handleLogin"
                        ></el-input>
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
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <span @click="toRegister">没有账号去注册>>></span>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginFormRules: {
                    telenum: [
                        {required: true, message: "请输入手机号码", trigger: "blur"},
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {min: 0, max: 16, message: "长度在8至16个字符", trigger: "blur"},
                    ],
                },
                login: {
                    telenum: "",
                    password: "",
                    verifycode: "",
                },
                dialogFormVisible: false,
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
            },
            toRegister() {
                this.$router.push("/user/register");
            },
            onSubmit() {
                this.$http
                    .post(
                        "user/login",
                        this.$qs.stringify(this.login)
                    )
                    .then(response => {
                        let user = response.data.data;
                        if (response.data.code == 200) {
                            // 登录成功
                            this.$setSessionStorage("user", user[0]);
                            console.log("1");
                            alert(user[0].nickname + "   登录成功");
                            console.log(response.data.data[0]);
                            console.log("1");
                            this.$router.push({path: '/home'});
                            this.$router.go(0);
                        } else {
                            // 登陆失败
                            alert("账号或密码有误");

                        }
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error);
                    });
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
        height: 250px;
        margin-top: 60px;
    }

    .show {
        margin-top: 40px;
        padding-left: 350px;
        padding-right: 150px;
        height: 100%;
    }

    .el-form {
        margin-left: 125px;
    }

    .dialog-footer {
        margin-right: 300px;
        margin-top: -50px;
    }

    .loginDialog {
        font-size: 20px;
    }

    .el-button {
        margin-left: 160px;
    }

    span {
        margin-left: 90px;
        cursor: pointer;
    }
</style>
