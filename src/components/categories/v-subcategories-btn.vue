<template>
  <div class="category__btn">
    <div class="category__btn__content">
      <router-link
        :to="{
          name: 'Products',
          params: {
            subId: subcategory.id,
          },
        }"
      >
        {{ subcategory.title }}
      </router-link>
      <v-button :onClick="showModal" :transparent="true">
        <template v-slot:icon>
          <img src="../../assets/img/Edit_Pencil_01.svg" alt="" />
        </template>
      </v-button>
    </div>
    <v-modal
      v-if="isShowModal"
      title="Edit subcategories"
      @closeModal="closeModal"
      @save="save"
    >
      <v-input placeholder="Name categories" v-model="name"></v-input>
    </v-modal>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useEquipment } from "@/store/equipment";
import vButton from "@/components/button/v-button.vue";
import vModal from "@/components/modal/v-modal.vue";
import vInput from "@/components/input/v-input.vue";
export default {
  components: {
    vButton,
    vModal,
    vInput,
  },
  props: {
    subcategory: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    isShowModal: false,
    name: "",
  }),
  methods: {
    ...mapActions(useEquipment, ["UPDATE_SUBCATEGORY"]),
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    save() {
      const data = {
        id: this.subcategory.id,
        title: this.name,
      };
      this.UPDATE_SUBCATEGORY(data);
      this.name = "";
      this.isShowModal = false;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
