<template>
  <div id="app">
    <el-container style="height=100%;" direction="vertical">
      <TOPBAR></TOPBAR>
      <el-main>
        <div class="headInfo">
          <el-divider content-position="center">
            <div style="font-size:25px">
              个人中心
              <i class="el-icon-user-solid"></i>
            </div>
          </el-divider>
        </div>
        <div>
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="btn">
          <el-button type="primary" @click="tocharge">充值</el-button>
          <el-button type="primary" icon="el-icon-edit" @click="tomodifyUserInfo">修改信息</el-button>
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
  name: "detailUserInfo",
  components: {
    TOPBAR,
    FOOTBAR
  },
  data() {
    return {
      data: [
        {
          label: "昵称",
          children: [
            {
              label: "nickname"
            }
          ]
        },
        {
          label: "手机号码",
          children: [
            {
              label: "telenum"
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
              label: "sex"
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
      this.$router.push({ path: "/modifyUserInfo" });
    },
    tocharge() {
      this.$router.push({ path: "/rechargePage" });
    },
  }
};
</script>


<style>
#app {
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

.el-tree {
  height: 400px;
}
.el-tree-node__label {
  width: auto;
  float: right;
  font-family: "微软雅黑";
  font-size: 7px;
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