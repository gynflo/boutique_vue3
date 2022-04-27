<template>
  <div class="p-20">
    <h2 class="mb-10">Panier :</h2>
    <CartProductList
      :cart="props.cart"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";
import CartProductList from "./CartProductList.vue";
const props = defineProps<{
  cart: ProductInterface[];
}>();
const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<style lang="scss" scoped></style>
