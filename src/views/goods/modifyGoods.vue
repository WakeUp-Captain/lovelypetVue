<template>
  <div id="modifyGoods">
    <el-container style="height=100%;" direction="vertical">
      <TOPBAR></TOPBAR>
      <el-main>
        <div style="margin-bottom:150px">
          <el-divider content-position="center">
            <div style="font-size:25px">
              修改物品信息
              <i class="el-icon-edit"></i>
            </div>
          </el-divider>
        </div>
        <div>
          <el-form
            class="form-wrapper padding"
            ref="modifyGoodsForm"
            :model="modifyGoodsForm"
            :rules="addRules"
            label-width="110px"
          >
            <el-form-item label="宝贝图片：" prop="photo">
              <el-col :span="10">
                <el-upload
                  class="avatar-uploader"
                  action
                  :show-file-list="false"
                  :auto-upload="false"
                  :on-change="changeFile"
                >
                  <img v-if="modifyGoodsForm.photo!=''" :src="modifyGoodsForm.photo" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-col>
            </el-form-item>
            <el-form-item label="宝贝分类:">
              <el-col :span="5">
                <el-select v-model="modifyGoodsForm.sort" placeholder="请选择分类">
                  <el-option label="猫" value="mao"></el-option>
                  <el-option label="狗" value="gou"></el-option>
                </el-select>
              </el-col>
              <el-col class="line" :span="1"></el-col>
              <el-col :span="6">
                <el-select v-model="modifyGoodsForm.kind" placeholder="请选择品种">
                  <el-option label="吉娃娃" value="jiwawa"></el-option>
                  <el-option label="泰迪" value="泰迪"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item label="价格:" prop="price">
              <el-col :span="11">
                <el-input placeholder="请输入价格" v-model="modifyGoodsForm.price" clearable></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="宝贝描述" prop="desc">
              <el-col :span="11">
                <el-input type="textarea" v-model="modifyGoodsForm.desc" placeholder="请简短的描述物品"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-col :span="11">
                <el-button type="primary" @click="modify">确认修改</el-button>
                <el-button @click="resetForm">重置</el-button>
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
  name: "add",
  components: {
    TOPBAR,
    FOOTBAR
  },
  data() {
    return {
      modifyGoodsForm: {
        photo: "", // 图片
        sort: "", //分类
        kind: "", //品种
        price: "", //价格
        desc: "" //描述
      },
      addRules: {
        // 表单验证规则
        photo: [{ required: true, message: "请上传图片", trigger: "blur" }]
      },
    };
  },
  methods: {
    changeFile(file) {
      var This = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function() {
        This.modifyGoodsForm.photo = this.result;
      }
    },
    resetForm() {
      this.$refs.addGoodsForm.resetFields();
      this.modifyGoodsForm.kind = "";
      this.modifyGoodsForm.sort = "";
    },
    modify() {}
  }
};
</script>

<style>
#addGoods {
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
</style>