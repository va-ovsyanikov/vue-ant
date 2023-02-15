<template>
  <teleport to="body">
    <div class="modal_wrapp">
      <div class="modal">
        <div class="modal__header">
          <div class="modal__name">{{ title }}</div>
          <div class="modal__close">
            <v-button :onClick="closeModal" :transparent="true">
              <template v-slot:icon>
                <img src="../../assets/img/Close_LG.svg" alt="" />
              </template>
            </v-button>
          </div>
        </div>
        <div class="modal__content">
          <slot></slot>
        </div>
        <div class="modal__footer">
          <v-button :onClick="closeModal" :cancel="true">
            <template v-slot:title> Cancel </template>
          </v-button>
          <v-button :onClick="save" :save="true">
            <template v-slot:icon>
              <img src="../../assets/img/Icon-save.svg" alt="" />
            </template>
            <template v-slot:title> Save </template>
          </v-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import vButton from "@/components/button/v-button.vue";
export default {
  components: {
    vButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    save() {
      this.$emit("save");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/_variables.less";
.modal_wrapp {
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 500px;
  min-height: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid @color_gray_border_modal;
}
.modal__content {
  margin-top: 20px;
  padding: 0 20px;
}
.modal__footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: auto;
  height: 60px;
  padding: 0 20px;
  border-top: 1px solid @color_gray_border_modal;
}
.modal__name {
  color: @color_beruza;
  font-weight: 600;
  font-size: 20px;
}
.save {
  margin-left: 10px;
}
</style>
