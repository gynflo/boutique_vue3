<template>
  <div class="grid p-20">
    <ShopProduct
      v-for="product of products"
      :product="product"
      :key="product._id"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/interfaces";
import ShopProduct from "./ShopProduct.vue";

defineProps<{
  products: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/scss/mixin" as m;
.grid {
  display: grid;
  grid-template-columns: 1fr;

  @include m.md {
    grid-template-columns: 1fr 1fr;
  }
  @include m.lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include m.xl {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  /* Définit la hauteur des rangées secondaires */
  grid-auto-rows: 400px;
  /* Définit la hauteur & largeur des goutieres */
  gap: 20px;
}
</style>
