<template>
    <div>
        <el-divider content-position="center">
            <div style="font-size:25px">
                注册
                <i class="el-icon-user"></i>
            </div>
        </el-divider>
        <div class="show">
            <el-form ref="registerFormRef" :model="register" :rules="regFormRules" label-width="80px">
                <el-form-item label="手机号:">
                    <el-col :span="13">
                        <el-input v-model="register.telenum" placeholder="请输入手机号码"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-col :span="13">
                        <el-input v-model="register.password" placeholder="请输入8-16位密码" show-password></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="确认密码:">
                    <el-col :span="13">
                        <el-input v-model="register.confirm" placeholder="请再次输入密码" show-password></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="昵称:">
                    <el-col :span="13">
                        <el-input v-model="register.nickname" placeholder="请输入昵称"></el-input>
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
                            <img v-if="register.headicon!=''" :src="register.headicon" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-col>
                </el-form-item>

                <el-form-item label="性别:">
                    <el-col :span="9">
                        <el-radio-group v-model="register.sex">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-form-item>
                <el-form-item label="生日">
                    <el-col :span="13">
                        <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="register.birthday"
                                style="width: 100%;"
                        ></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="居住地:">
                    <el-col :span="9">
                        <el-select v-model="register.province" placeholder="请选择省份">
                            <el-option label="湖北" value="hubei"></el-option>
                            <el-option label="湖南" value="hunan"></el-option>
                            <el-option label="河北" value="hebei"></el-option>
                            <el-option label="河南" value="henan"></el-option>
                            <el-option label="广东" value="guangdong"></el-option>
                            <el-option label="广西" value="guangxi"></el-option>
                        </el-select>
                    </el-col>
                    <el-col class="line" :span="2">--</el-col>
                    <el-col :span="9">
                        <el-select v-model="register.city" placeholder="请选择城市">
                            <el-option label="武汉" value="wuhan"></el-option>
                            <el-option label="广州" value="广州"></el-option>
                            <el-option label="深圳" value="shenzhen"></el-option>
                            <el-option label="桂林" value="guilin"></el-option>
                            <el-option label="石家庄" value="shijiazhaung"></el-option>
                            <el-option label="洛阳" value="luoyang"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">注册</el-button>
                    <span @click="toLogin">已有账号去登录>>></span>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                register: {
                    telenum: "",
                    password: "",
                    confirm: "",
                    nickname: "",
                    headicon: "",
                    sex: "男",
                    birthday: "",
                    province: "",
                    city: ""
                },
                regFormRules: {},
                dialogTableVisible: false,
                dialogFormVisible: false,
            };
        },
        methods: {
            handleRemove(file, headicon) {
                console.log(file, headicon);
            },
            changeFile(file) {
                var This = this;
                var reader = new FileReader();
                reader.readAsDataURL(file.raw);
                reader.onload = function () {
                    This.register.headicon = this.result;
                };
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, headicon) {
                this.$message.warning(
                    `当前限制选择 3 个文件，本次选择了 ${
                        files.length
                    } 个文件，共选择了 ${files.length + headicon.length} 个文件`
                );
            },
            beforeRemove(file, headicon) {// eslint-disable-line no-unused-vars
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            registering() {
                alert("注册成功");
                this.$router.push({path: '/home'});
                this.$router.go(0);
            },
            resetInfo() {
                this.$refs.registerFormRef.resetFields();
            },
            toLogin() {
                this.$router.push("/user/login");
            },
            onSubmit() {
                this.$http
                    .post(
                        "user/register",
                        this.$qs.stringify(this.register)
                    )
                    .then(response => {
                        let user = response.data.data;
                        if (response.data.code == 200) {
                            // 注册成功
                            this.$setSessionStorage("user", user[0]);
                            this.registering();
                        } else {
                            // 注册失败
                            alert("用户名已被注册，请重新填写");

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
        background-color: #FFECCB;
        color: #333;
        font-weight: 700;
        text-align: center;
        line-height: 60px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }

    .registerbox {
        height: 470px;
        margin-top: 55px;
    }

    .el-form {
        margin-left: 150px;
        /* margin-top: -80px; */
    }

    .dialog-footer {
        margin-right: 300px;
        margin-top: -80px;
    }

    .regiDialog {
        font-size: 20px;
    }

    /* .line{
      text-align: center;
    } */
    .show {
        margin-top: 40px;
        padding-left: 350px;
        padding-right: 150px;
        height: 100%;
    }

    .el-button {
        margin-left: 160px;
    }

    span {
        margin-left: 90px;
        cursor: pointer;
    }
</style>