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
import type { ProductCartInterface } from "@/interfaces";
import CartProduct from "./CartProduct.vue";
const props = defineProps<{
  cart: ProductCartInterface[];
}>();
const emits = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<style lang="scss" scoped></style>
