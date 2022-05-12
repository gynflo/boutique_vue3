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
      v-if="props.moreResults"
      class="d-flex align-items-center justify-content-center"
    >
      <button @click="emit('IncPage')" class="btn btn-primary">
        Chargez plus de produits
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/interfaces";
import { pageKey } from "@/shared/injectionKeys/pageKey";
import { inject, ref, watch } from "vue";
import ShopProduct from "./ShopProduct.vue";

const scrollableDiv = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  products: ProductInterface[];
  moreResults: boolean;
}>();

const page = inject(pageKey)!;

watch(page, () => {
  if (page.value === 1) {
    scrollableDiv.value?.scrollTo(0, 0);
  }
});

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
  (e: "IncPage"): void;
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
