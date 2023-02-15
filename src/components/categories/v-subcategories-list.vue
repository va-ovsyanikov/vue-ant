<template>
  <div class="categories__main">
    <div class="categories__list">
      <div class="categories__list__top">
        <h3>Subcategories</h3>
        <v-button :add="true" :onClick="showModal">
          <template v-slot:icon>
            <img src="../../assets/img/Icon.svg" alt="" />
          </template>
        </v-button>
      </div>
      <v-sub-categories-btn
        v-for="subcategory in GET_SUBCATEGORIES"
        :key="subcategory.id"
        :subcategory="subcategory"
      ></v-sub-categories-btn>
      <v-modal
        v-if="isShowModal"
        title="Add subcategories"
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
  }),
  computed: {
    ...mapState(useEquipment, ["GET_SUBCATEGORIES"]),
  },
  methods: {
    ...mapActions(useEquipment, ["FETCH_SUBCATEGORIES", "ADD_SUBCATEGORY"]),
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    save() {
      const data = {
        catId: +this.$route.params.catId,
        id: Date.now(),
        title: this.name,
      };
      this.ADD_SUBCATEGORY(data);
      this.name = "";
      this.isShowModal = false;
    },
  },
  watch: {
    "$route.params.catId": {
      handler: function (catId) {
        this.FETCH_SUBCATEGORIES(catId);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
</style>
