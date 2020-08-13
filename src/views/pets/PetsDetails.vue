<template>
    <div class="detail">
        <div class="goback" @click="goback()">
            <i class="el-icon-arrow-left"/>
            <span>返回</span>
        </div>
        <div class="petsdetail">
            <el-container>
                <!--                左边-->
                <el-aside width="45%">
                    <el-carousel height="375px">
                        <el-carousel-item v-for="item in pic" :key="item">
                            <img width="375px" height="375px"
                                 :src="item">
                        </el-carousel-item>
                    </el-carousel>
                </el-aside>

                <!--右边-->
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-dark"></div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple">详细描述:
                                <span>
                                {{this.goods.description}}</span>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple">价格:
                                <span>
                                {{this.goods.price}}</span>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-light">分类:
                                <span>
                                {{this.goods.summaryClassifyname+"  "}} {{this.goods.detailClassifyname}}
                                </span>
                            </div>
                        </el-col>
                        <!-- <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <div class="grid-content bg-purple">发布者
                                <span>
                                {{this.goods.owner}}</span>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="grid-content bg-purple-light">收藏数量:
                                <span>
                                {{this.goods.starCount}}
                                </span></div>
                        </el-col>
                    </el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <el-button  v-if="!this.isStar" @click="insertStar()" type="primary">收藏</el-button>
                            <el-button  v-if="this.isStar" @click="insertStar()" type="primary">取消收藏</el-button>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <el-button @click="purchase" type="success">购买</el-button>
                        </div>
                    </el-col>
                </el-main>
            </el-container>


            <!--            留言内容-->
            <el-divider content-position="center">
                <div style="font-size:25px">
                    用户留言
                </div>
            </el-divider>
            <ul>
                <li v-for="(item, index) in this.leaveMessage" :key="index">
                    <h5>{{item.telenum}} &nbsp; &nbsp;&nbsp;---{{item.date}}</h5>
                    <br>
                    <p>{{item.message}}</p>
                    <br>
                </li>
            </ul>

            <!--            留言框-->
            <div>
                <div class="cur-location">
                </div>
                <el-divider content-position="center">
                    <div style="font-size:25px">
                        留言
                    </div>
                </el-divider>
                <div class="show">
                    <br>
                    <br>
                    <br>
                    <el-input placeholder="请输入留言内容：" v-model="form.message" clearable></el-input>
                    <div class="confirm">
                        <el-button type="warning" @click="submitLeaveMessage">提交</el-button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    // import TopBar from "../layout/Topbar"
    export default {
        name: "petsDetail",
        // components:{ TopBar}
        data() {
            return {
                isStar:false,
                pic: null,
                goods: null,
                form: {
                    goodnum: this.$getSessionStorage("goodnum"),
                    telenum: this.$getSessionStorage("user").telenum,
                    message: "",
                },
                leaveMessage: [],
            };
        },
        created() {
            // console.log(this.$router.query.id);
            console.log("success");
        },
        mounted() {
            this.getDetailGoods();
            this.getLavaMessge();
        },
        methods: {
            handleChange(val) {
                console.log(val);
            },
            goback() {
                this.$router.go(-1);
            },
            getPic() {
                this.pic = [this.goods.pic1,
                    this.goods.pic2, this.goods.pic3]
            },
            insertStar() {

                if(this.isStar)
                {
                    alert("取消收藏成功 ");
                    this.isStar = !this.isStar;
                }
                else
                {
                    alert("收藏成功 ");
                    this.isStar = !this.isStar;
                }
                this.$http
                    .post(
                        "star/insertStar",
                        this.$qs.stringify(this.form)
                    )
                    .then(response => {
                        console.log(response);

                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            purchase() {
                this.$router.push({
                    path: '/payment',
                    query: {
                        sellerid:this.goods.telenum,
                    }
                });
            },
            getLavaMessge() {
                this.$http
                    .post(
                        "leaveMessage/getMassage",
                        this.$qs.stringify(this.form)
                    )
                    .then(response => {
                        console.log(response);
                        this.leaveMessage = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            submitLeaveMessage() {
                this.$http
                    .post(
                        "leaveMessage/insertMassage",
                        this.$qs.stringify(this.form)
                    )
                    .then(response => {
                        console.log(this.form);
                        console.log(response);
                        this.$router.go(0);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            getDetailGoods() {
                this.$http
                    .post(
                        "goods/detailGoods",
                        this.$qs.stringify(this.form)
                    )
                    .then(response => {
                        console.log(response);
                        this.goods = response.data.data[0];
                        this.getPic();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
<style scoped>
    .goback {
        padding-left: 140px;
        margin-top: 20px;
        cursor: pointer;

    }

    .goback:hover {
        color: blue;
    }

    .detail {
        height: 100%;
    }

    .petsdetail {
        padding-left: 150px;
        padding-right: 150px;
        margin-top: 30px;
    }

    .el-container {

        height: 430px;
        /* padding-left:20px; */
        /* padding-right:20px; */
    }

    .el-main {
        margin-left: 80px;
        background-color: aquamarine;
    }

    .el-main {
        margin-left: 80px;
        background-color: #E9EEF3;
        color: #333;
        text-align: left;
        line-height: 20px;
    }

    .el-aside {
        margin-top: 10px;
        background-color: aquamarine;
        border: rgb(236, 236, 228) solid 7px;
        padding: 10px;
    }

    .el-carousel__item {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>