<template>
    <div>
        <div class="cur-location">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
                <el-breadcrumb-item>充值</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider content-position="center">
            <div style="font-size:25px">
                充值
                <i class="el-icon-money"></i>
            </div>
        </el-divider>
        <div class="show">
            金额：{{form.balance}}
            <br>
            <br>
            <br>
            <el-input placeholder="请输入充值金额" v-model="form.recharge" clearable></el-input>
            <div class="confirm">
                <el-button type="warning" @click="checkChange">确认充值</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rechargePage",
        data() {
            return {
                form: {
                    balance: this.$getSessionStorage("user").balance,
                    recharge: null,
                    telenum: this.$getSessionStorage("user").telenum
                }

            };
        },
        methods: {
            //更新数据库中的余额，然后更新个人信息
            checkChange() {

                this.$http
                    .post(
                        "user/recharge",
                        this.$qs.stringify(this.form)
                    )
                    .then(response => {
                        let user = response.data.data;
                        if (response.data.code == 200) {
                            this.$removeSessionStorage("user");
                            this.$setSessionStorage("user", user);
                            console.log("1");
                            console.log(response.data.data);
                            this.$router.push({path: '/user/rechargePage'});
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
    .show {
        margin-top: 40px;
        padding-left: 40%;
        /* padding-right: 150px; */
        height: 100%;
    }

    .confirm {
        margin-top: 20px;
        padding-left: 90px;
    }

    .cur-location {
        padding-left: 150px;
        margin-top: 20px;
    }

    .el-input {
        width: auto;
    }
</style>