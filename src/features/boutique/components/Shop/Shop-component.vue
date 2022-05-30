<script setup lang="ts">
import type {
  FiltersInterface,
  FilterUpdate,
  ProductInterface,
} from "@/interfaces";
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";
import Calc from "@/components/Calc-component.vue";
import { reactive } from "vue";

const state = reactive<{
  open: boolean;
  isMobile: boolean;
}>({
  open: matchMedia("(max-width: 575px)").matches,
  isMobile: matchMedia("( max-width: 575px )").matches,
});

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
  moreResults: boolean;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: string): void;
  (e: "updateFilter", updateFilter: FilterUpdate): void;
  (e: "incPage"): void;
}>();
</script>

<template>
  <div class="d-flex shop-container">
    <Calc :open="state.open" :transparent="true" @close="state.open = false" />
    <transition>
      <ShopFilters
        class="shop-filter"
        v-if="state.open"
        :nbr-of-results="products.length"
        :filters="filters"
        @update-filter="emit('updateFilter', $event)"
      />
    </transition>
    <div class="d-flex flex-column">
      <button
        @click="state.open = !state.open"
        class="btn btn-primary d-flex justify-content-center align-items.center"
      >
        <i class="uil uil-search mr-10"></i>
        <span>Rechercher</span>
      </button>
      <ShopProductList
        class="flex-fill scrollable"
        :products="products"
        :more-results="moreResults"
        @add-product-to-cart="emit('addProductToCart', $event)"
        @inc-page="emit('incPage')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/mixin";
.shop-filter {
  flex: 0 0 200px;
  @include mixin.sm {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--white);
    z-index: 2;
  }
}

button {
  margin: 20px 20px 10px 20px;
  @include mixin.sm {
    display: none;
  }
}

.shop-container {
  position: relative;
}

.scrollable {
  overflow-y: auto;
  height: calc(100vh - 96px);
}

/* ANIMATION */

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: 0.3s;
}
</style>
