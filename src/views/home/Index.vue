<template>

  <div class="homebody">
    <div class="search">
      <el-row :gutter="20">
        <el-col :span="6" class="selectcol">
          <div>
            <template>
              <el-select v-model="typeValue" placeholder="请选择种类" class="select">
                <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </div>
        </el-col>
        <el-col :span="6" class="selectcol"><div>
            <template>
              <el-select v-model="classValue" placeholder="请选择品种" class="select">
                <el-option
                  v-for="item in classes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template></div
        ></el-col>
        <el-col :span="6" class="selectcol"><div>
            <el-button type="primary" icon="el-icon-search" :round=true @click="search">搜索</el-button>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="show">
        <template>
            <div v-for="(rows,index) in branchData" :key="index">
                <el-row  >
                    <el-col v-for="(item,index) in rows" :key="index" >
                        <div class="petcard" @click="toDetails">
                            <img :src="item.imgUrl" :alt="item.imgUrl" width="300px" height="200px" align="middle"/>
                            <div>
                                <div class="details"><span>#{{item.type}}#{{item.classes}}</span></div>
                                <div class="details"><span>价格：{{item.price}}</span></div>
                                <div class="details"><span>描述：{{item.description}}</span></div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </template>
    </div>
  </div>
</template>

<script>
// import Search from "@/components/home/search.vue";
// import { component } from 'vue/types/umd';
export default {
  name:"HomeIndex",
  data() {
    return {
      types: [
        {
          value: "dog",
          label: "狗",
        },
        {
          value: "cat",
          label: "猫",
        },
      ],
      typeValue: "",
      classes: [
        {
          value: "taidi",
          label: "泰迪",
        },
        {
          value: "jiwawa",
          label: "吉娃娃",
        },
      ],
      classValue: "",
      petsCard:[{imgUrl:require("../../assets/images/dog1.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"},
    {imgUrl:require("../../assets/images/dog2.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"},
    {imgUrl:require("../../assets/images/dog3.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"},
    {imgUrl:require("../../assets/images/dog1.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"},
    {imgUrl:require("../../assets/images/dog2.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"},
    {imgUrl:require("../../assets/images/dog3.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"},
    {imgUrl:require("../../assets/images/dog1.jpg"),type:"狗",classes:"吉娃娃",price:"1000.00",description:"这是一只可爱的小狗"}],
    branchData: []
    };
    
  },
  mounted () {
         this.getRow();
     },
      
  methods: {
    search(){
          console.log(this.typeValue,this.classValue);
      },
      getRow () {
         let arr = [];
        let row = Math.ceil(this.petsCard.length / 4);
         for (let i = 0; i < row; i++) {
           arr[i] = [];
           let modLast = this.petsCard.length % 4 === 0 ? 4 : this.petsCard.length % 4;
           let lastRow = i === (row - 1) ? modLast : 4;
           for (let j = 0; j < lastRow; j++) {
                  arr[i][j] = this.petsCard[4 * i + j];
           }
         }
         this.branchData = arr;
       },
       toDetails(){
           console.log("toDetails");
       }
  },
};
</script>
<style scoped>
/* @import "../../assets/css/variables.scss"; */
.homebody {
  width: 100%;
  height: 100%;
}
.search {
  position: absolute;
  width: 100%;
  top: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  /* margin-left:150px; */
}
.selectcol{
    width:300px;
}
.el-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  float: left;
  display:flex
}
.el-col {
  align-items: center;
  border-radius: 4px;
  margin: 5px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.select{
    border-radius: 10px;
    box-shadow: 2px 2px 5px #888888;
}
.show{
    margin-top:80px;
    padding-left:150px;
}
.petcard{
    width: 300px;
    height: 350px;
    margin-left: 0px;
    padding: 0px;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    
}
.details{    
    height:50px;
    display:flex;
    align-items: center;
}

</style>
