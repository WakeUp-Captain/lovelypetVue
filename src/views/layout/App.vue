<template>
  <div class="main">
    <div class="topbar">
      <Topbar />
    </div>
    <div class="body">
      <div class="content">
        <router-view />
      </div>
    </div>
    <div class="foot">
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Topbar from "./Topbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  data() {
    return {
      userName: "",
    };
  },
  computed: mapState(["system"]),
  methods: {},
  components: { Topbar, Footer },
};
</script>
<style scoped lang="scss">
.main {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.topbar {
  width: 100%;
  height: 80px;
  background-color: #409eff;
  position: fixed;
  z-index: 3;
  padding-right: 5px;
  top: 0px;
}
.body {
  width: 100%;
  min-height: 85%;
  margin-top: 80px;
}
.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  min-height: 84vh;
  margin-bottom: 5px;
  display: inline-block;
  &::-webkit-scrollbar {
    display: none;
  }
}
.foot {
  width: 99%;
  height: 20px;
  margin-bottom: 5px;
}
</style>
