<template>
    <div>
        <div class="cur-location">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/user/myinfo' }">我的资料</el-breadcrumb-item>
                <el-breadcrumb-item>修改资料</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider content-position="center">
            <div style="font-size:25px">
                修改个人信息
                <i class="el-icon-user-solid"></i>
            </div>
        </el-divider>
        <div class="show">
            <el-form
                    ref="modifyUserInfo"
                    :model="modifyUserInfo"
                    :rules="modifyFormRules"
                    label-width="80px"
            >
                <el-form-item label="手机号:" prop="telenum">
                    <el-col :span="13">
                        <el-input v-model="modifyUserInfo.telenum" placeholder="请输入手机号码"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <el-col :span="13">
                        <el-input show-password v-model="modifyUserInfo.password" placeholder="请输入8-16位密码"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="确认密码:" prop="confirm">
                    <el-col :span="13">
                        <el-input show-password v-model="modifyUserInfo.confirm" placeholder="请再次输入密码"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="昵称:" prop="nickname">
                    <el-col :span="13">
                        <el-input v-model="modifyUserInfo.nickname" placeholder="请输入昵称"></el-input>
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
                            <img v-if="modifyUserInfo.headicon!=''" :src="modifyUserInfo.headicon" class="avatar"/>
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-col>
                </el-form-item>
                <el-form-item label="性别:" prop="sex">
                    <el-col :span="9">
                        <el-radio-group v-model="modifyUserInfo.sex">
                            <el-radio label="男">男</el-radio>
                            <el-radio label="女">女</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-form-item>
                <el-form-item label="生日" prop="birthday">
                    <el-col :span="13">
                        <el-input v-model="modifyUserInfo.birthday" placeholder="请输入出生日期"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="居住地:" prop="address">
                    <el-col :span="13">
                        <el-input v-model="modifyUserInfo.address" placeholder="请输入居住地"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-col :span="5">
                        <el-button round @click="resetUserInfo">重置</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="success" icon="el-icon-check" round @click="confirmUserInfo">确认修改</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
        <!-- </el-main> -->
        <FOOTBAR></FOOTBAR>
        <!-- </el-container> -->
    </div>
</template>

<script>
    // import TOPBAR from "../layout/Topbar";
    // import FOOTBAR from "../layout/Footer";
    export default {
        name: "modifyUserInfo",
        data() {
            return {
                modifyUserInfo: {
                    telenum: "",
                    password: "",
                    confirm: "",
                    nickname: "",
                    headicon: "",
                    sex: "男",
                    birthday: "",
                    address: "",
                },
                modifyFormRules: {},
            };
        },
        mounted() {
            this.init();
        },
        methods: {

            init() {
                this.modifyUserInfo = this.$getSessionStorage("user");
            },
            resetUserInfo() {
                this.$refs.modifyUserInfo.resetFields();
            },
            changeFile(file) {
                var This = this;
                var reader = new FileReader();
                reader.readAsDataURL(file.raw);
                reader.onload = function () {
                    This.modifyUserInfo.headicon = this.result;
                };
            },
            confirmUserInfo() {
                this.$http
                    .post(
                        "user/update",
                        this.$qs.stringify(this.modifyUserInfo)
                    )
                    .then(response => {
                        let user = response.data.data;
                        if (response.data.code == 200) {
                            this.$removeSessionStorage("user");
                            this.$setSessionStorage("user", user);
                            alert("修改成功");
                        } else {
                            alert("修改失败，请重新填写");

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

<style>
    .show {
        margin-top: 30px;
        padding-left: 150px;
        padding-right: 150px;
        height: 100%;
    }

    .cur-location {
        padding-left: 150px;
        margin-top: 20px;
    }

    .el-form {
        margin-left: 400px;
        margin-bottom: 120px;
    }
</style>