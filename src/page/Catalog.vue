<template>
  <div class="wrapp">
    <div class="categories__list">
      <div class="categories__list__top">
        <h3>Categories</h3>
        <v-button :add="true" :onClick="showModal">
          <template v-slot:icon>
            <img src="../assets/img/Icon.svg" alt="" />
          </template>
        </v-button>
      </div>

      <v-categories-btn
        v-for="category in GET_CATEGORIES"
        :key="category"
        :category="category"
      ></v-categories-btn>

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
import vCategoriesBtn from "@/components/categories/v-categories-btn.vue";
import vModal from "@/components/modal/v-modal.vue";
import vInput from "@/components/input/v-input.vue";
export default {
  components: { vButton, vCategoriesBtn, vModal, vInput },
  data: () => ({
    isShowModal: false,
    name: "",
  }),
  computed: {
    ...mapState(useEquipment, ["GET_CATEGORIES"]),
  },
  methods: {
    ...mapActions(useEquipment, ["ADD_CATEGORIES", "FETCH_CATEGORIES"]),
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    save() {
      const data = {
        id: new Date(),
        title: this.name,
      };
      this.ADD_CATEGORIES(data);
    },
  },
  mounted() {
    this.FETCH_CATEGORIES();
  },
};
</script>

<style lang="less">
@import "../assets/_variables.less";
.wrapp {
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
