<template>
  <div
    class="button"
    :class="{
      add: add,
      transparent: transparent,
      disabled: disabled,
      save: save,
      cancel: cancel,
      login: login,
    }"
  >
    <button @click="onClick" :disabled="disabled">
      <div class="button__icon">
        <slot name="icon"></slot>
      </div>

      <slot name="title"></slot>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: Function,
    },
    add: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    save: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: Boolean,
      default: false,
    },
    login: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/_variables.less";
.button {
  display: inline-block;
}
button {
  border-radius: 2px;
  width: 100%;
  transition: background-color 0.35s;
  font-size: 14px;
  color: @color_gray;
  border: 1px solid @color_gray;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-weight: 600;
  height: 32px;
  padding: 0 10px;
}
.button__icon {
  margin-right: 5px;
  position: relative;
  top: 1px;
}
.add {
  button {
    background-color: @color_beruza;
    color: #fff;
    border: 0;
    width: 30px;
    height: 30px;
    .button__icon {
      margin: 0;
    }
    &:hover {
      background-color: @color_beruza_dark;
    }
  }
}
.transparent {
  button {
    border: 1px solid transparent;
  }
}
.disabled {
  button {
    border: 1px solid @color_gray_light;
    color: @color_gray_light;
  }
}
.save {
  button {
    background-color: @color_beruza;
    color: #fff;
    border: 0;
    // height: 40px;
    padding: 0 16px;
    .button__icon {
      margin: 5px;
    }
    &:hover {
      background-color: @color_beruza_dark;
    }
  }
}
.cancel {
  button {
    // height: 40px;
    padding: 0 16px;
  }
}
.login {
  width: 100%;
  button {
    background-color: @color_beruza;
    color: #fff;
    border: 0;
    // height: 40px;
    &:hover {
      background-color: @color_beruza_dark;
    }
  }
}
</style>
