<template>
  <div class="product__card" :class="{ active: checked }">
    <v-checkbox v-model="checked"></v-checkbox>
    <img src="../../assets/img/img.svg" alt="" />
    <h5 class="product__card__title">{{ product.article }}</h5>
    <p class="product__card__desc">
      {{ product.title }}
    </p>
  </div>
</template>
<script>
import vCheckbox from "@/components/checkbox/v-checkbox.vue";
export default {
  components: {
    vCheckbox,
  },
  props: {
    product: {
      type: Object,
      default: "",
    },
  },
  data: () => ({
    checked: "",
  }),
};
</script>

<style lang="less" scoped>
@import "../../assets/_variables.less";
.product__card {
  width: 206px;
  height: 272px;
  border: 1px solid @color_gray;
  padding: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  .active {
    border: 1px solid @color_beruza;
  }
  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    display: block;
  }
}
.product__card__title {
  color: @color_elem_sub;
  font-size: 16px;
  font-weight: 600;
}
.product__card__desc {
  font-size: 14px;
  color: @color_gray;
}
.checkbox__field {
  margin-left: auto;
}
</style>
