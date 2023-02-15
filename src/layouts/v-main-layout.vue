<template>
  <div class="wrapp">
    <div class="container__left">
      <v-menu></v-menu>
    </div>
    <div class="container__right">
      <router-view />
    </div>
  </div>
</template>

<script>
import vMenu from "@/components/menu/v-menu.vue";
export default {
  components: {
    vMenu,
  },
};
</script>
<style lang="less" scoped>
@import "../assets/_variables.less";
.wrapp {
  margin: 20px auto;
  max-width: 1440px;
  display: flex;
  height: 1024px;
  border: 1px solid @color_gray;
}
.container__left {
  width: 240px;
  background-color: @bg_container_left;
  border-right: 1px solid @color_gray;
}
.container__right {
  width: calc(100% - 240px);
      overflow: auto;
}
</style>
