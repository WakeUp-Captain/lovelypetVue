<template>
  <div class="registerbox">
          <el-form ref="registerFormRef" :model="register" :rules="regFormRules" label-width="80px">
            <el-form-item label="手机号:">
              <el-col :span="13">
                <el-input v-model="register.iphone" placeholder="请输入手机号码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="密码:">
              <el-col :span="13">
                <el-input v-model="register.password" placeholder="请输入8-16位密码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="确认密码:">
              <el-col :span="13">
                <el-input v-model="register.confirm" placeholder="请再次输入密码"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="昵称:">
              <el-col :span="13">
                <el-input v-model="register.nickname" placeholder="请输入昵称"></el-input>
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
                  :file-list="register.fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-col>
            </el-form-item>
            <el-form-item label="性别:">
              <el-col :span="9">
                <el-radio-group v-model="register.sex">
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
                  v-model="register.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="居住地:">
              <el-col :span="9">
                <el-select v-model="register.provice" placeholder="请选择省份">
                  <el-option label="湖北" value="hubei"></el-option>
                  <el-option label="湖南" value="hunan"></el-option>
                  <el-option label="河北" value="hebei"></el-option>
                  <el-option label="河南" value="henan"></el-option>
                  <el-option label="广东" value="guangdong"></el-option>
                  <el-option label="广西" value="guangxi"></el-option>
                </el-select>
              </el-col>
              <el-col class="line" :span="2">--</el-col>
              <el-col :span="9">
                <el-select v-model="register.city" placeholder="请选择城市">
                  <el-option label="武汉" value="wuhan"></el-option>
                  <el-option label="广州" value="广州"></el-option>
                  <el-option label="深圳" value="shenzhen"></el-option>
                  <el-option label="桂林" value="guilin"></el-option>
                  <el-option label="石家庄" value="shijiazhaung"></el-option>
                  <el-option label="洛阳" value="luoyang"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        iphone: "fsa",
        password: "",
        confirm: "",
        nickname: "",
        fileList: [],
        sex: "男",
        date1: "",
        provice: "",
        city: ""
      },
      regFormRules:{

      },
      dialogTableVisible: false,
      dialogFormVisible: false,
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
    registering() {
     alert("注册成功");
     this.$router.push({path:'/login'});
    },
    resetInfo(){
      this.$refs.registerFormRef.resetFields();
    },
  }
};
</script>


<style scoped>
.el-main {
  text-align: center;
  line-height: 160px;
  
}

.el-header{
background-color: #FFECCB;
  color: #333;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.registerbox{
  height: 470px;
  margin-top:55px;
}
.el-form {
  margin-left: 150px;
  margin-top: -80px;
}
.dialog-footer{
  margin-right: 300px;
  margin-top: -80px;
}
.regiDialog{
  font-size: 20px;
}
.line{
  text-align: center;
}
</style>