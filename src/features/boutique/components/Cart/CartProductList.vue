<script setup lang="ts">
import CartProduct from "./CartProduct.vue";

import type { ProductCartInterface } from "@/shared/interfaces";
const props = defineProps<{
  cart: ProductCartInterface[];
}>();
const emits = defineEmits<{
  (e: "removeProductFromCart", productId: string): void;
}>();
</script>

<template>
  <div class="d-flex flex-column">
    <CartProduct
      v-for="product of props.cart"
      :key="product._id"
      :product="product"
      @remove-product-from-cart="emits('removeProductFromCart', $event)"
    />
  </div>
</template>



<style lang="scss" scoped></style>
