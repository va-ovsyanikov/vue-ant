<template>
  <div class="category__btn">
    <div class="category__btn__content">
      <router-link
        :to="{
          name: 'Subcategories',
          params: {
            catId: category.id,
          },
        }"
      >
        {{ category.title }}
      </router-link>
      <v-button :onClick="showModal" :transparent="true">
        <template v-slot:icon>
          <img src="../../assets/img/Edit_Pencil_01.svg" alt="" />
        </template>
      </v-button>
    </div>
    <v-modal
      v-if="isShowModal"
      title="Edit categories"
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
    category: {
      type: Object,
      default: {},
    },
  },
  data: () => ({
    isShowModal: false,
    name: "",
  }),
  methods: {
    ...mapActions(useEquipment, ["UPDATE_CATEGORY"]),

    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    save() {
      const data = {
        id: this.category.id,
        title: this.name,
      };
      this.UPDATE_CATEGORY(data);
    },
  },
};
</script>

<style lang="less" scoped></style>
