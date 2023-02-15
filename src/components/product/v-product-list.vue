<template>
  <div class="product__list">
    <div class="product__list__top">
      <h3>Equipment Catalog</h3>
      <v-button :add="true" :onClick="showModal">
        <template v-slot:icon>
          <img src="../../assets/img/Icon.svg" alt="" />
        </template>
      </v-button>

      <v-button :onClick="addCategories">
        <template v-slot:icon>
          <img src="../../assets/img/Share_iOS_Export.svg" alt="" />
        </template>
        <template v-slot:title> Export</template>
      </v-button>
      <v-button :onClick="addCategories" :disabled="true">
        <template v-slot:icon>
          <img src="../../assets/img/Edit_Pencil_Line_02.svg" alt="" />
        </template>
        <template v-slot:title> Move & Copy</template>
      </v-button>
      <v-button :onClick="addCategories" :disabled="true">
        <template v-slot:icon>
          <img src="../../assets/img/Trash_Full.svg" alt="" />
        </template>
        <template v-slot:title> Delete</template>
      </v-button>
    </div>
    <vInput placeholder="Search category or HCPCS name" :search="true">
      <template v-slot:icon>
        <img src="../../assets/img/Search_Magnifying_Glass.svg" alt="" />
      </template>
    </vInput>

    <div class="product__list__content">
      <v-product-card
        v-for="product in GET_PRODUCTS"
        :key="product.id"
        :product="product"
      ></v-product-card>
    </div>
    <v-modal
      v-if="isShowModal"
      title="Add product"
      @closeModal="closeModal"
      @save="save"
    >
      <v-input placeholder="Product deskription" v-model="desc"></v-input>
      <v-input placeholder="Product article" v-model="article"></v-input>
    </v-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useEquipment } from "@/store/equipment";
import vButton from "@/components/button/v-button.vue";
import vInput from "@/components/input/v-input.vue";
import vProductCard from "@/components/product/v-product-card.vue";
import vModal from "@/components/modal/v-modal.vue";
export default {
  components: { vButton, vInput, vProductCard, vModal },
  data: () => ({
    isShowModal: false,
    desc: "",
    article: "",
  }),
  computed: {
    ...mapState(useEquipment, ["GET_PRODUCTS"]),
  },
  methods: {
    ...mapActions(useEquipment, ["FETCH_PRODUCTS", "ADD_PRODUCT"]),
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    save() {
      const data = {
        subId: +this.$route.params.subId,
        id: Date.now(),
        title: this.desc,
        article: this.article,
      };
      this.ADD_PRODUCT(data);
      this.name = "";
      this.isShowModal = false;
    },
  },
  watch: {
    "$route.params.subId": {
      handler: function (subId) {
        this.FETCH_PRODUCTS(subId);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/_variables.less";
.product__list {
  width: 678px;
  .add {
    margin-left: auto;
    margin-right: 20px;
  }
  .input__field {
    margin: 10px 30px 0 10px;
    box-sizing: border-box;
  }
}
.modal {
  .input__field {
    margin-bottom: 10px;
  }
}
.group__item {
  display: inline-block;
}
.button + .button {
  margin-left: 12px;
}
.product__list__top {
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  height: 55px;
  border-bottom: 1px solid @color_gray;
  h3 {
    font-size: 22px;
    font-weight: 600;
    color: @color_elem;
  }
}

.product__list__content {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
