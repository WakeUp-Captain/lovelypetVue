<template>
  <div class="showCard" >
    <el-row v-for="(rows, index) in branchData" :key="index" class="card-row">
      <el-col v-for="(item, index) in rows" :key="index" class="card-col">
        <div class="petcard" @click="toDetails(item.goodnum)">
          <img
            src="../../assets/images/dog1.jpg"
            width="100%"
            height="200px"
            align="middle"
          />
          <div>
            <div class="details">
              <span
                >#{{ item.pet.summary_classifyname }}#{{
                  item.pet.detail_classifyname
                }}</span
              >
            </div>
            <div class="details">
              <span>价格：{{ item.pet.price }}</span>
            </div>
            <div class="details">
              <span>描述：{{ item.pet.description }}</span>
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
        :page-sizes="[8, 16]"
        @size-change="handleSizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "PetsList",
  data() {
    return {
      totalPets: [],
      petsCard: [],
      branchData: [],
      totalPetsNum: 0,
      currentPage: 1,
      pageSize: 8,
    };
  },
  created() {
    this.totalPets=this.$parent.totalPets;
    console.log(this.totalPets);
    this.totalPetsNum = this.totalPets.length;
    this.getPetsCard();
    console.log("子组件creat");
    console.log(this.$parent.mes);
  },
  methods: {
    getPetsCard() {
      this.petsCard = this.totalPets.slice(
        this.pageSize * (this.currentPage - 1),
        this.pageSize * (this.currentPage - 1) + this.pageSize
      );
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
      console.log(this.branchData);
    },
    toDetails(good_num) {
      this.$router.push({ name: "petsDetails", query: { id: good_num } });
      // this.$router.push({name:"Home",path:'/home'});
      console.log(good_num);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log("handle currentPage change");
      this.getPetsCard();
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.getPetsCard();
    },
  },
};
</script>
<style scoped>
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
.pagination {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-top: 35px;
  height: 40px;
}
.details {
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
