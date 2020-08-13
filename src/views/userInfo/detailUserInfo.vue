<template>
  <div >
    <div class="cur-location">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
          <el-divider content-position="center">
            <div style="font-size:25px">
              我的资料
              <i class="el-icon-user-solid"></i>
            </div>
          </el-divider>
        <!-- </div> -->
        <div class="show">
          <el-tree :data="data" :props="defaultProps" :default-expand-all="true" @node-click="handleNodeClick" ></el-tree>
          <div class="btn">
          <!-- <el-button type="primary" @click="tocharge">充值</el-button> -->
          <el-button type="primary" icon="el-icon-edit" @click="tomodifyUserInfo">修改信息</el-button>
        </div>
        </div>
  </div>
</template>

<script>

export default {
  name: "detailUserInfo",
  data() {
    return {
      data: [
        {
          label: "昵称",
          children: [
            {
              label: "头秃"
            }
          ]
        },
        {
          label: "手机号码",
          children: [
            {
              label: "好烦"
            }
          ]
        },
        {
          label: "头像",
          children: [
            {
              label: "headicon"
            }
          ]
        },
        {
          label: "性别",
          children: [
            {
              label: "男"
            }
          ]
        },
        {
          label: "生日",
          children: [
            {
              label: "birthday"
            }
          ]
        },
        {
          label: "家乡",
          children: [
            {
              label: "address"
            }
          ]
        },
        {
          label: "余额",
          children: [
            {
              label: 'balance'
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    tomodifyUserInfo() {
      this.$router.push({ path: "/user/modifyUserInfo" });
    },
    // tocharge() {
    //   this.$router.push({ path: "/user/rechargePage" });
    // },
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
.el-tree {
  height: 400px;
}
.el-tree-node__label {
  width: auto;
  float: right;
  font-family: "微软雅黑";
  font-size: 15px;
  color: black;
  line-height: 30px;
  letter-spacing: 1px;
  text-align: center;
}

.el-tree-node__content {
  background-color: #ffff;
}

.el-tree-node__children {
  text-align: center;
}
</style>