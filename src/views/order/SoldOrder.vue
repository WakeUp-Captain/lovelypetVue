<template>
  <div>
    <div class="cur-location">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">我的宝贝</el-breadcrumb-item>
        <el-breadcrumb-item>已卖出的宝贝</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="show" v-if="refresh">
      <PetsList />
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>抱歉！没有找到相关信息哦!去首页看看吧！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goHome()"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import PetsList from "../pets/PetsList";
import { soldOrder } from "@/api/orderManage/soldOrder";
import { deleteSoldOrder } from "@/api/orderManage/soldOrder"
export default {
  name: "BoughtOrder",
  data() {
    return {
      totalPets: [],
      refresh: false,
      dialogVisible: false,
      user:{nickname:'admin'}
    };
  },
  created() {
    soldOrder(this.$qs.parse(this.user))
      .then((r) => {
          console.log(r);
        if (r.data == "") {
          this.dialogVisible = true;
        } else {
          this.totalPets = r.data;
          console.log("creat父组件");
          this.refresh = true;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
  components: { PetsList },

  methods: {
    goHome() {
      this.$router.push('/');
      this.dialogVisible=false;
    },
    deleteRecord(item) {
      console.log("这里是父组件的删除函数");
      let order={orderid:item.orderid}
      console.log(this.$qs.parse(order));
      deleteSoldOrder(this.$qs.parse(order))
      .then((r) => {
          
        if (r.success == true) {
          console.log("success");
          this.$router.go(0);
        } else {
          console.log("fail");
        }
      })
      .catch((e) => {
        console.log(e);
      });
    },
  },
};
</script>
<style scoped>
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
</style>
