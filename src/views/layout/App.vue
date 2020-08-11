<template>
  <div class="main">
    <div class="topbar">
      <Topbar />
    </div>
    <div class="body">
      <router-view />
    </div>
    <div >
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Topbar from "./Topbar.vue";
import Footer from "./Footer.vue"

export default {
  name: "App",
  data() {
    return {
      userName: "",
    };
  },
  computed: mapState(["system"]),
  methods: {},
  components: { Topbar,Footer },
};
</script>
<style scoped lang="scss">
.main {
  height: 100%;
  width: 100%;
}
.topbar {
  width: 100%;
  height: 80px;
}
.body {
  left: 80px;
  height: 100%;
}
</style>
