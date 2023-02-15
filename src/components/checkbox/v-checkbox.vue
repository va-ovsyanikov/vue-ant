<template>
  <div class="checkbox__field">
    <input
      class="checkbox"
      type="checkbox"
      v-model="localValue"
      id="checkbox"
    />
    <label for="checkbox"></label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    event: "change",
    prop: "value",
  }),
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("change", newValue);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.checkbox__field {
  display: inline-block;
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + label::before {
  content: "";
  display: block;
  height: 18px;
  width: 18px;
  background-image: url("../../assets/img/Vector.svg");
}
.checkbox:checked + label::before {
  content: "";
  background-image: url("../../assets/img/Checkbox.svg");
  display: block;
  height: 18px;
  width: 20px;
  background-position: 30% 50%;
}
</style>
