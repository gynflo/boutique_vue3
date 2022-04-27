<template>
  <div class="d-flex flex-column">
    <CartProduct
      v-for="product of props.cart"
      :key="product.id"
      :product="product"
      @remove-product-from-cart="emits('removeProductFromCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";
import CartProduct from "./CartProduct.vue";
const props = defineProps<{
  cart: ProductInterface[];
}>();
const emits = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<style lang="scss" scoped></style>
