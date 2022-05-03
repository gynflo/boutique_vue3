<template>
  <div class="d-flex flex-row">
    <ShopFilters
      class="shop-filter"
      :nbr-of-results="products.length"
      :filters="filters"
      @update-filter="emit('updateFilter', $event)"
    />
    <ShopProductList
      class="flex-fill"
      :products="products"
      @add-product-to-cart="emit('addProductToCart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type {
  FiltersInterface,
  FilterUpdate,
  ProductInterface,
} from "@/interfaces";
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: number): void;
  (e: "updateFilter", updateFilter: FilterUpdate): void;
}>();
</script>

<style lang="scss" scoped>
.shop-filter {
  flex: 0 0 200px;
}
</style>
