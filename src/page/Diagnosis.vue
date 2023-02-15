<template>
  <div class="diagnosis page">
    <h2>Diagnosis</h2>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useEquipment } from "@/store/equipment";
export default {
  computed: {
    ...mapState(useEquipment, ["categories"]),
  },
};
</script>

<style lang="less"></style>
