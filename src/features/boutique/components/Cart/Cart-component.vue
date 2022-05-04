<template>
  <div class="d-flex flex-column p-20">
    <h2 class="mb-10">Panier :</h2>
    <CartProductList
      class="flex-fill"
      :cart="props.cart"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
    <button class="btn btn-success">Commander ({{ totalPrice }}€)</button>
  </div>
</template>

<script setup lang="ts">
import type { ProductCartInterface } from "@/interfaces";
import { computed } from "vue";
import CartProductList from "./CartProductList.vue";
const props = defineProps<{
  cart: ProductCartInterface[];
}>();
const emit = defineEmits<{
  (e: "removeProductFromCart", productId: string): void;
}>();
const totalPrice = computed(() =>
  props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
);
</script>

<style lang="scss" scoped></style>
