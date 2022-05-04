<template>
  <div class="admin-container d-flex justify-content-center align-items-center">
    <ProductForm />
  </div>
</template>

<script setup lang="ts">
import ProductForm from "./components/ProductForm.vue";
</script>

<style scoped lang="scss">
.admin-container {
  height: 100vh;
}
</style>
