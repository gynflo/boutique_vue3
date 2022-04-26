<template>
  <div>
    <ShopProductList
      :products="products"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";
import ShopProductList from "./ShopProductList.vue";

defineProps<{
  products: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
}>();
</script>

<style lang="scss" scoped></style>
