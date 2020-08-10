<template>
  <div id="modifyUser">
    <el-container style="height=100%;" direction="vertical">
      <TOPBAR></TOPBAR>
      <el-main>
        <div class="headInfo">
          <el-divider content-position="center">
            <div style="font-size:25px">
              修改个人信息
              <i class="el-icon-user-solid"></i>
            </div>
          </el-divider>
        </div>
        <div>
          <el-form
            ref="modifyUserInfo"
            :model="modifyUserInfo"
            :rules="modifyFormRules"
            label-width="80px"
          >
            <el-form-item label="手机号:">
              <el-col :span="13">
                <el-input v-model="modifyUserInfo.iphone" placeholder="请输入手机号码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="密码:">
              <el-col :span="13">
                <el-input v-model="modifyUserInfo.password" placeholder="请输入8-16位密码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="确认密码:">
              <el-col :span="13">
                <el-input v-model="modifyUserInfo.confirm" placeholder="请再次输入密码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="昵称:">
              <el-col :span="13">
                <el-input v-model="modifyUserInfo.nickname" placeholder="请输入昵称"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="头像:">
              <el-col :span="10">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="modifyUserInfo.fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-col>
            </el-form-item>
            <el-form-item label="性别:">
              <el-col :span="9">
                <el-radio-group v-model="modifyUserInfo.sex">
                  <el-radio label="男">男</el-radio>
                  <el-radio label="女">女</el-radio>
                </el-radio-group>
              </el-col>
            </el-form-item>
            <el-form-item label="生日">
              <el-col :span="13">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="modifyUserInfo.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="居住地:">
              <el-col :span="5">
                <el-select v-model="modifyUserInfo.provice" placeholder="请选择省份">
                  <el-option label="湖北" value="hubei"></el-option>
                  <el-option label="湖南" value="hunan"></el-option>
                  <el-option label="河北" value="hebei"></el-option>
                  <el-option label="河南" value="henan"></el-option>
                  <el-option label="广东" value="guangdong"></el-option>
                  <el-option label="广西" value="guangxi"></el-option>
                </el-select>
              </el-col>
              <el-col class="line" :span="1">--</el-col>
              <el-col :span="5">
                <el-select v-model="modifyUserInfo.city" placeholder="请选择城市">
                  <el-option label="武汉" value="wuhan"></el-option>
                  <el-option label="广州" value="广州"></el-option>
                  <el-option label="深圳" value="shenzhen"></el-option>
                  <el-option label="桂林" value="guilin"></el-option>
                  <el-option label="石家庄" value="shijiazhaung"></el-option>
                  <el-option label="洛阳" value="luoyang"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-col :span="5">
                <el-button round @click="resetUserInfo">重置</el-button>
              </el-col>
              <el-col :span="5">
                <el-button type="success" icon="el-icon-check" round @click="confirmUserInfo">确认修改</el-button>
              </el-col>
            </el-form-item>
          </el-form>
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
  name: "modifyUserInfo",
  components: {
    TOPBAR,
    FOOTBAR
  },
  data() {
    return {
      modifyUserInfo: {
        iphone: "",
        password: "",
        confirm: "",
        nickname: "",
        fileList: [],
        sex: "男",
        date1: "",
        provice: "",
        city: ""
      },
      modifyFormRules: {},
      dialogTableVisible: false,
      dialogFormVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {// eslint-disable-line no-unused-vars
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    confirmUserInfo() {},
    resetUserInfo() {
      this.$refs.modifyUserInfo.resetFields();
    }
  }
};
</script>

<style>
#modifyUserInfo {
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
.el-form {
  margin-left: 400px;
  margin-bottom: 120px;
}
</style>