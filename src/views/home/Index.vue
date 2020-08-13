<template>
  <div class="homebody">
    <div class="search">
      <el-row :gutter="20">
        <el-col :span="6" class="selectcol">
          <div class="search-row">
            <template>
              <el-select
                v-model="typeValue"
                placeholder="请选择种类"
                class="select"
              >
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
        <el-col :span="6" class="selectcol"
          ><div>
            <template>
              <el-select
                v-model="classValue"
                placeholder="请选择品种"
                class="select"
              >
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
        <el-col :span="6" class="selectcol"
          ><div>
            <el-button
              type="primary"
              icon="el-icon-search"
              :round="true"
              @click="search"
              >搜索</el-button
            >
          </div></el-col
        >
      </el-row>
      <!-- </div> -->
    </div>
    <div class="show">
      <template>
        <div class="showCard">
          <el-row
            v-for="(rows, index) in branchData"
            :key="index"
            class="card-row"
          >
            <el-col v-for="(item, index) in rows" :key="index" class="card-col">
              <div class="petcard" @click="toDetails(item.good_num)">
                <img
                  src="../../assets/images/dog1.jpg"
                  width="100%"
                  height="200px"
                  align="middle"
                />
                <div>
                  <div class="details">
                    <span
                      >#{{ item.summary_classifyname }}#{{
                        item.detail_classifyname
                      }}</span
                    >
                  </div>
                  <div class="details">
                    <span>价格：{{ item.price }}</span>
                  </div>
                  <div class="details">
                    <span>描述：{{ item.description }}</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <div class="pagination">
            <el-pagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalPetsNum"
              :current-page="currentPage"
              @current-change="handleCurrentChange"
              :page-size="pageSize"
              :page-sizes="[8,16]"
              @size-change="handleSizeChange"
            >
            </el-pagination>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { petsList } from "@/api/petManage/petsList";
export default {
  name: "HomeIndex",
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
        }],
        classValue: "",
      typeValue:"",
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
      totalPets:[],
      petsCard: [],
      branchData: [],
      totalPetsNum: 0,
      currentPage: 1,
      pageSize: 8,
    }
  },
  mounted() {
      this.getRow();
      this.getGoodsList();
  },
      
  created() {
    petsList()
      .then((r) => {
        console.log("这里是首页");
        this.totalPets = r;
        this.totalPetsNum = this.totalPets.length;
        this.getPetsCard();
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    search() {
      console.log(this.typeValue, this.classValue);
    },
    getPetsCard(){
      this.petsCard = this.totalPets.slice(this.pageSize*(this.currentPage-1),this.pageSize*(this.currentPage-1)+8);
        console.log("success");
        console.log(this.petsCard);
        this.getRow();
    },
    getRow() {
      let arr = [];
      let row = Math.ceil(this.petsCard.length / 4);
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        let modLast =
          this.petsCard.length % 4 === 0 ? 4 : this.petsCard.length % 4;
        let lastRow = i === row - 1 ? modLast : 4;
        for (let j = 0; j < lastRow; j++) {
          arr[i][j] = this.petsCard[4 * i + j];
        }
      }
      this.branchData = arr;
    },
    toDetails(good_num) {
      this.$router.push({name:'petsDetails',query:{id:good_num}});
      // this.$router.push({name:"Home",path:'/home'});
      console.log(good_num);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log("handle currentPage change");
      this.getPetsCard();
    },
    handleSizeChange(size){
      this.pageSize = size;
      this.getPetsCard();
    }
  },
};
</script>
<style scoped>
.homebody {
  width: 100%;
  height: 100%;
  position: relative;
}
.search {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.search-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.selectcol {
  width: 30%;
  align-items: center;
}
.show {
  margin-top: 10px;
  padding-left: 150px;
  padding-right: 150px;
  height: 100%;
}
.showCard {
  height: 100%;
  width: 100%;
  position: relative;
}
.petcard {
  width: 100%;
  height: 350px;
  margin-left: 0px;
  padding: 0px;

  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}
.card-row {
  margin-bottom: 5px;
  float: left;
  display: flex;
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
}
.card-col {
  width: 25%;
}
.el-col {
  align-items: center;
  border-radius: 4px;
  margin: 5px;
  /* width:33%;  */
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.select {
  border-radius: 10px;
  box-shadow: 2px 2px 5px #888888;
}

.details {
  height: 50px;
  display: flex;
  align-items: center;
}
.pagination{
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-top: 35px;
  height: 40px;
}
</style>
