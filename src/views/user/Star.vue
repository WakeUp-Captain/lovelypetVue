<template>
  <div>
    <div class="top">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>收藏夹</el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="main">
      <el-table
        :data="list"
        style="width: 100%;"
        v-show="list.length"
        highlight-current-row
      >
        <el-table-column
          label="复选框"
          width="100"
          style="color:red"
          :render-header="renderHeader"
        >
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.checked"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="180" >
          <img
            src="../../assets/images/dog1.jpg"
            height="150px"
            width="150px"
          />
        </el-table-column>
        <el-table-column prop="pet.detail_classifyname" label="品种" width="180" >
        </el-table-column>
        <el-table-column prop="pet.description" label="商品描述" width="180" >
        </el-table-column>
        <el-table-column prop="pet.price" label="商品价钱" width="180" >
        </el-table-column>
        <el-table-column label="商品数量" width="180" >x1 </el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <div>
              <el-button type="primary" icon="el-icon-search" plain @click="toDetails(scope.row.pet.goodnum)"
                >查看</el-button
              >
              <el-popover
                placement="top"
                width="160"
                v-model="scope.row.remove"
              >
                <p>确定删除此商品吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button
                    size="mini"
                    type="text"
                    @click="scope.row.remove = false"
                    >取消</el-button
                  >
                  <el-button
                    type="primary"
                    size="mini"
                    @click="removeId(scope.row)"
                    >确定</el-button
                  >
                </div>
                <el-button
                  slot="reference"
                  icon="el-icon-delete"
                  type="danger"
                  plain
                  >删除</el-button
                >
              </el-popover>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div
        v-show="isnull"
        style="font-size:20px;color:red;display:none"
      >
        商品全部为空
      </div>
      <div class="bottom">
        <div class="deleteall">
          <el-button type="danger" round >批量删除</el-button>
        </div>
        
        <div class="sum">
          <span class="space"></span>
          合计:<span>{{totalPrice}}</span>&emsp;
          <el-button type="success" round="" >去结算<span>({{totalNum}})</span></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getStarList } from "@/api/starManage/getStarList"
import { deleteStar } from "@/api/starManage/deleteStar"
export default {
  name: "Star",
  data() {
    return {
      list: [],
      count: 0,
      istrue: false,
      user:{telenum:'admin'},
      isnull:false
    };
  },
  created() {
    this.init();
  },
  computed: {
    totalPrice: function () {
        let a = 0;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
                a += this.list[i].pet.price ;
                
            }
        }
        return a;
    },
    totalNum:function() {
        let a=0;
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
                a += 1;
            }
        }
        return a;

    }
  },
  watch: {
    istrue: function() {
      if (this.istrue == true) {
        for (let k = 0; k < this.list.length; k++) {
          this.list[k].checked = true;
        }
      } else {
        for (let k = 0; k < this.list.length; k++) {
          this.list[k].checked = false;
        }
      }
    },
  },
  methods: {
    init(){
      getStarList(this.$qs.parse(this.user))
      .then((r) => {
          console.log(r);
          
        this.list=r.data;
        if(this.list.length==0){
          this.isnull=true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
    toDetails(good_num) {
      this.$router.push({ name: "petsDetails", query: { id: good_num } });
      console.log(good_num);
    },
    removeId(value) {
      var star = {starid:value.starid};
      deleteStar(this.$qs.parse(star))
      .then((r)=>{
        if(r.success==true){
          console.log("delete success");
          this.init();
        }
        else{
          console.log("delete fail");
        }
      });
      // for (var i = 0; i < this.list.length; i++) {
      //   if (ids == this.list[i].id) {
      //     this.list.splice(i, 1);
      //   }
      // }
    },
    renderHeader: function(h) {
      //实现table表头添加
      var self = this;
      return h("div", [
        h(
          "el-checkbox",
          {
            on: {
              change: (i) => {
                self.istrue = i;
              },
            },
          },
          "全选"
        ),
      ]);
    },
  },
};
</script>
<style scoped>
.warning-row {
  background-color: aqua !important;
}
.top {
  padding-left: 150px;
  margin-top: 20px;
}
.main {
  margin-top: 30px;
  padding-left: 150px;
  padding-right: 150px;
  height: 100%;
}

.buttom {
  width: 100%;
  height: 100px;
}
.deleteall{
  float: left;
  margin-top: 30px;
}
.sum {
  float:right;
  margin-top: 30px;
  margin-right: 20px;
}
</style>
<style>
.el-table td, .el-table th{
  text-align: center !important
}
</style>
