<template>
  <div class="grid p-20">
    <ShopProduct />
    <ShopProduct />
    <ShopProduct />
    <ShopProduct />
    <ShopProduct />
    <ShopProduct />
    <ShopProduct />
    <ShopProduct />
  </div>
</template>

<script setup lang="ts">
import ShopProduct from "./ShopProduct.vue";
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* Définit la hauteur des rangées secondaires */
  grid-auto-rows: 300px;
  /* Définit la hauteur & largeur des goutieres */
  gap: 20px;

}
</style>
