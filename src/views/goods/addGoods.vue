<template>
  <div>
    <div class="cur-location">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>发布宝贝</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-divider content-position="center">
            <div style="font-size:25px">
              发布宝贝
              <i class="el-icon-goods"></i>
            </div>
          </el-divider>
        <div class="show">
          <el-form
            class="form-wrapper padding"
            ref="addGoodsForm"
            :model="addGoodsForm"
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
                  <img v-if="addGoodsForm.photo!=''" :src="addGoodsForm.photo" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
                </el-upload>
              </el-col>
            </el-form-item>
            <el-form-item label="宝贝分类:">
              <el-col :span="5">
                <el-select v-model="addGoodsForm.sort" placeholder="请选择分类">
                  <el-option label="猫" value="mao"></el-option>
                  <el-option label="狗" value="gou"></el-option>
                </el-select>
              </el-col>
              <el-col class="line" :span="1"></el-col>
              <el-col :span="6">
                <el-select v-model="addGoodsForm.kind" placeholder="请选择品种">
                  <el-option label="吉娃娃" value="jiwawa"></el-option>
                  <el-option label="泰迪" value="泰迪"></el-option>
                </el-select>
              </el-col>
            </el-form-item>
            <el-form-item label="价格:" prop="price">
              <el-col :span="11">
                <el-input placeholder="请输入价格" v-model="addGoodsForm.price" clearable></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="宝贝描述" prop="desc">
              <el-col :span="11">
                <el-input type="textarea" v-model="addGoodsForm.desc" placeholder="请简短的描述物品"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-col :span="11">
                <el-button type="primary" @click="release">确认</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </div>
  </div>
</template>

<script>
export default {
  name: "addGoods",
  data() {
    return {
      addGoodsForm: {
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
        This.addGoodsForm.photo = this.result;
      };
    },
    resetForm() {
      this.$refs.addGoodsForm.resetFields();
      this.addGoodsForm.kind = "";
      this.addGoodsForm.sort = "";
    },
    release() {}
  }
};
</script>

<style>
.show {
  margin-top: 50px;
  padding-left: 30%;
  height: 100%;
}
.cur-location {
  padding-left: 150px;
  margin-top: 20px;
}
</style>