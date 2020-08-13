<template>
    <div id="payment">
        <el-container style="height=100%;" direction="vertical">
            <TOPBAR></TOPBAR>
            <el-main>
                <div>
                    <el-image style="width: 1100px; height: 500px" :lazy='true' :src="imgUrl"></el-image>
                </div>
                <el-divider content-position="center">
                    <div style="font-size:25px">
                        支付
                    </div>
                </el-divider>
                <div class="show">
                    <el-input show-password placeholder="请输入密码：" v-model="form.password"></el-input>
                    <div class="confirm">
                        <el-button type="warning" @click="topay()">提交</el-button>
                    </div>
                </div>
            </el-main>
            <FOOTBAR></FOOTBAR>
        </el-container>
    </div>
</template>

<script>
    import TOPBAR from "../layout/Topbar";
    import FOOTBAR from "../layout/Footer";

    export default {
        name: "payment",
        components: {
            TOPBAR,
            FOOTBAR
        },
        data() {
            return {
                imgUrl: require("../../assets/images/pay.png"),
                form: {
                    password: "",
                    telenum: this.$getSessionStorage("user").telenum,
                    goodnum: this.$getSessionStorage("goodnum"),
                    seller: this.$route.query.sellerid,

                },
                returnUser: null,
            }
        },
        methods: {
            topay() {
                this.$http
                    .post(
                        "user/login",
                        this.$qs.stringify(this.form)
                    )
                    .then(response => {
                        console.log(response);
                        if (response.data.code != 200) {
                            alert("密码错误，请重新输入");
                        } else {
                            // alert("密码正确");
                            this.$http
                                .post(
                                    "order/insertOrderinfo",
                                    this.$qs.stringify(this.form)
                                )
                                .then(response => {
                                    console.log(response);
                                    alert("支付成功！！");
                                    this.$router.go(-1);
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });

            },
        }
    };
</script>

<style>
    #payment {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    html,
    body,
    .el-container {
        margin: 0px;
        padding: 0px;
        height: 100%;
    }

    .el-main {
        text-align: center;
        line-height: 160px;
    }
</style>