<template>
<div class="wrapp">
  <div class="categories__list">
    <div class="categories__list__top">
      <h3>Subcategories</h3>
      <v-button :add="true" :onClick="showModal">
        <template v-slot:icon>
          <img src="../assets/img/Icon.svg" alt="" />
        </template>
      </v-button>
    </div>
    <v-sub-categories-btn
      v-for="subcategory in GET_SUBCATEGORIES.subCat"
      :key="subcategory.id"
      :subcategory="subcategory"
    ></v-sub-categories-btn>
    <v-modal
      v-if="isShowModal"
      title="Add categories"
      @closeModal="closeModal"
      @save="save"
    >
      <v-input placeholder="Name categories" v-model="name"></v-input>
    </v-modal>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useEquipment } from "@/store/equipment";
import vButton from "@/components/button/v-button.vue";
import vSubCategoriesBtn from "@/components/categories/v-subcategories-btn.vue";
import vModal from "@/components/modal/v-modal.vue";
import vInput from "@/components/input/v-input.vue";
export default {
  components: { vButton, vSubCategoriesBtn, vModal, vInput },
  props: {
    title: {
      type: Text,
      default: "",
    },
  },
  data: () => ({
    isShowModal: false,
    name: "",
    categoryId: "",
  }),
   computed: {
    ...mapState(useEquipment, [
      "GET_SUBCATEGORIES",
    ]),
  },
  methods: {
    ...mapActions(useEquipment, ["FETCH_SUBCATEGORIES"]),
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    save() {
      console.log("save");
    },
  },
  mounted() {
    this.FETCH_SUBCATEGORIES(this.$route.params.id);
  },
};
</script>

<style lang="less">
@import "../assets/_variables.less";
.wrapp{
  display: flex;
}
.categories__list {
  height: 100%;
  width: 260px;
  border-right: 1px solid @color_gray;
}
.categories__list__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid @color_gray;
  height: 55px;
  h3 {
    font-size: 22px;
    font-weight: 600;
    color: @color_elem;
  }
}
.input__field {
  margin-top: 50px;
  // width: 300px;
}
</style>
