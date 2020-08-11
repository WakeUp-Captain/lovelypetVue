<template>
  <div id="addGoods">
    <el-container style="height=100%;" direction="vertical">
      <TOPBAR></TOPBAR>
      <el-main>
        <div>
          <el-divider content-position="center">
            <div style="font-size:25px">
              发布物品
              <i class="el-icon-sell"></i>
            </div>
          </el-divider>
        </div>
        <div>
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
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="imgVisible">
                  <img width="100%" :src="ImageUrl" alt />
                </el-dialog>
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
                <el-button type="primary" @click="release">发布物品</el-button>
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
      addGoodsForm: {
        photo: "", // 图片
        sort: "", //分类
        kind: "", //品种
        price: "", //价格
        desc: "" //描述
      },
      addRules: {
        // 表单验证规则
        photo: [{ required: true, message: "请上传活动图片", trigger: "blur" }]
      },
      ImageUrl: "", // 图片预览地址
      imgVisible: false // 上传图片预览
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    resetForm() {
      this.$refs.addGoodsForm.resetFields();
      this.addGoodsForm.kind="";
      this.addGoodsForm.sort="";
    },
    release() {
      
    }
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