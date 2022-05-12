<template>
  <div class="d-flex flex-row">
    <ShopFilters
      class="shop-filter"
      :nbr-of-results="products.length"
      :filters="filters"
      @update-filter="emit('updateFilter', $event)"
    />
    <ShopProductList
      class="flex-fill scrollable"
      :products="products"
      :more-results="moreResults"
      @add-product-to-cart="emit('addProductToCart', $event)"
      @inc-page="emit('incPage')"
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
  moreResults: boolean;
}>();

const emit = defineEmits<{
  (e: "addProductToCart", productId: string): void;
  (e: "updateFilter", updateFilter: FilterUpdate): void;
  (e: "incPage"): void;
}>();
</script>

<style lang="scss" scoped>
.shop-filter {
  flex: 0 0 200px;
}

.scrollable {
  overflow-y: auto;
  height: calc(100vh - 96px);
}
</style>
