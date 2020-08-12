<template>
<div class="detail">
    <div class="goback" @click="goback()">
       <i class="el-icon-arrow-left" />
      <span>返回</span>
    </div>
    <div class="petsdetail">
        
         <el-container>
    <el-aside width="45%">
        <el-carousel height="375px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </el-aside>
    <el-main>
        <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple">详细描述</div></el-col>
  <!-- <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col> -->
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple">价格</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">分类</div></el-col>
  <!-- <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
</el-row>
<el-row>
  <el-col :span="12"><div class="grid-content bg-purple">发布者</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">收藏数量</div></el-col>
  <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
  <!-- <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col> -->
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
    </el-main>
  </el-container>
    </div>
</div>  
</template>
<script>
// import TopBar from "../layout/Topbar"
export default {
    name:"petsDetail",
    // components:{ TopBar}
    created(){
        // console.log(this.$router.query.id);
        console.log("success");
    },
    methods:{
        goback(){
            this.$router.go(-1);
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
.goback:hover{
    color: blue;
}
.detail{
    height: 100%;
}
.petsdetail{
    padding-left: 150px;
    padding-right: 150px;
    margin-top:30px;
}
.el-container{
    
    height: 430px;
    /* padding-left:20px; */
    /* padding-right:20px; */
}
.el-main{
    margin-left:80px;
    background-color: aquamarine;
}
.el-aside{
    margin-top:10px;
    background-color: aquamarine;
    border: rgb(236, 236, 228) solid 7px;
    padding:10px;
}
.el-carousel__item h3 {
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