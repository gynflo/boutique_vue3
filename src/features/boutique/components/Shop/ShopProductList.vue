<script setup lang="ts">
import ShopProduct from "./ShopProduct.vue";

import type { ProductInterface } from "@/shared/interfaces";
import { ref, watch } from "vue";

const scrollableDiv = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  products: ProductInterface[];
  moreResults: boolean;
  page: number;
}>();

watch(
  () => props.page,
  () => {
    if (props.page === 1) {
      scrollableDiv.value?.scrollTo(0, 0);
    }
  }
);

const emit = defineEmits<{
  (e: "addProductToCart", productId: string): void;
  (e: "IncPage"): void;
}>();
</script>

<template>
  <div ref="scrollableDiv" class="d-flex flex-column p-20">
    <div class="grid mb-20">
      <ShopProduct
        v-for="product of products"
        :product="product"
        :key="product._id"
        @add-product-to-cart="emit('addProductToCart', $event)"
      />
    </div>
    <div
      v-if="props.moreResults && products.length"
      class="d-flex align-items-center justify-content-center"
    >
      <button @click="emit('IncPage')" class="btn btn-primary">
        Chargez plus de produits
      </button>
    </div>
  </div>
</template>

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
