<template>
  <div>
    <component :is="layout"> </component>
    <notifications class="my_notification" width="400px" height="150px" />
  </div>
</template>
<script>
import authLayout from "@/layouts/v-auth-layout.vue";
import mainLayout from "@/layouts/v-main-layout.vue";
export default {
  components: {
    authLayout,
    mainLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    },
  },
};
// const equipment = useEquipment()
</script>

<style lang="less" scoped>
@import "./assets/_variables.less";
</style>
