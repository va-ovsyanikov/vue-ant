<template>
  <div class="equipment page">
    <v-page-top title="Equipment Catalog"></v-page-top>
    <div class="equipment__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vPageTop from "@/components/top/v-page-top.vue";

export default {
  components: {
    vPageTop,
  },
};
</script>

<style lang="less" scoped>
@import "../assets/_variables.less";
.equipment{
  height: 100%;
}
.equipment__content {
  display: flex;
  height: calc(100% - 60px);
}
</style>
