<template>
  <div class="input__field">
    <div class="input__icon">
      <slot name="icon"> </slot>
    </div>
    <input
      :value="modelValue"
      @change="input"
      :placeholder="placeholder"
      type="text"
      :class="{ search: search }"
    />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    search: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    input(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/_variables.less";
.input__field {
  ::-webkit-input-placeholder {
    color: @color_placeholder;
    font-size: 16px;
  }
  ::-moz-placeholder {
    color: @color_placeholder;
    font-size: 16px;
  }
  :-moz-placeholder {
    color: @color_placeholder;
    font-size: 16px;
  }
  :-ms-input-placeholder {
    color: @color_placeholder;
    font-size: 16px;
  }
  position: relative;
}
.input__icon {
  position: absolute;
  top: 5px;
  left: 10px;
}
input {
  width: 100%;
  height: 35px;
  padding-left: 10px;
  border: 1px solid @color_gray;
  border-radius: 3px;
  font-size: 16px;
  &:focus {
    border: 1px solid @color_beruza;
    outline: 0;
  }
}
.search {
  padding-left: 40px;
}
</style>
