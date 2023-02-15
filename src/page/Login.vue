<template>
  <div class="login_container">
    <v-input placeholder="Email" v-model="email"></v-input>
    <v-input
      placeholder="Password"
      v-model="password"
    ></v-input>
    <v-button :login="true" :onClick="onLogin">
      <template v-slot:title> Login </template>
    </v-button>
  </div>
</template>

<script>
import vInput from "@/components/input/v-input.vue";
import vButton from "@/components/button/v-button.vue";
export default {
  components: {
    vInput,
    vButton,
  },
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    onLogin() {
      if (this.email.length && this.password.length) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            email: this.email,
            password: this.password,
          })
        );
        this.$router.push({ name: "Catalog" });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/_variables.less";
.login_container {
  padding: 40px;
  width: 430px;
  margin: 10% auto;
  background-color: @color_gray_light;
  .input__field{
    margin-bottom: 10px;
  }
}
</style>
