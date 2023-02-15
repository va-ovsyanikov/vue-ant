<template>
  <div class="doctors page">
    <h2>Doctors List</h2>
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
