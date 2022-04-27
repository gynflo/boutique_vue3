<template>
  <div class="d-flex flex-row align-items-center mb-10 p-10 product">
    <strong class="flex-fill">{{ props.product.title }}</strong>
    <span class="mr-10">Prix: {{ props.product.price }}€</span>
    <button
      class="btn btn-danger"
      @click="emit('removeProductFromCart', product.id)"
    >
      Supprimez
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/interfaces/product.interface";

const props = defineProps<{
  product: ProductInterface;
}>();
const emit = defineEmits<{
  (e: "removeProductFromCart", productId: number): void;
}>();
</script>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--gray-1);
}
</style>
