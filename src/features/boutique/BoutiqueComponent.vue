<script setup lang="ts">
import Cart from "./components/Cart/Cart-component.vue";
import Shop from "./components/Shop/Shop-component.vue";

import { DEFAULT_FILTERS } from "@/data/filters";
import { reactive, computed, watchEffect, watch, provide, toRef } from "vue";
import type {
  ProductCartInterface,
  ProductInterface,
  FiltersInterface,
  FilterUpdate,
} from "@/interfaces";
import { fetchProduct } from "@/shared/services/product.service";
import { pageKey } from "@/shared/injectionKeys/pageKey";

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
  filters: FiltersInterface;
  page: number;
  isLoading: boolean;
  moreResults: boolean;
}>({
  products: [],
  cart: [],
  filters: { ...DEFAULT_FILTERS },
  page: 1,
  isLoading: true,
  moreResults: true,
});

provide(pageKey, toRef(state, "page"));

watch([() => state.filters.priceRange, () => state.filters.category], () => {
  state.page = 1;
  state.products = [];
});

watchEffect(async () => {
  state.isLoading = true;
  const products = await fetchProduct(state.filters, state.page);
  if (Array.isArray(products)) {
    state.products = [...state.products, ...products];
    if (products.length < 20) {
      state.moreResults = false;
    }
  } else {
    state.products = [...state.products, products];
  }
});
state.isLoading = false;

const filtersProduct = computed(() => {
  return state.products.filter((product) => {
    if (
      product.title.toLowerCase().startsWith(state.filters.search.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
});

function addProductToCart(productId: string): void {
  const product = state.products.find((product) => product._id === productId);
  if (product) {
    const checkProductInCart = state.cart.find(
      (product) => product._id === productId
    );
    if (checkProductInCart) {
      checkProductInCart.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  }
}
function removeProductFromCart(productId: string): void {
  const checkProductFromCart = state.cart.find(
    (product) => product._id === productId
  );
  if (checkProductFromCart) {
    if (checkProductFromCart.quantity === 1) {
      state.cart = state.cart.filter((product) => product._id !== productId);
    } else {
      checkProductFromCart.quantity--;
    }
  }
}
function updateFilter(filterUpdate: FilterUpdate) {
  if (filterUpdate.search !== undefined) {
    state.filters.search = filterUpdate.search;
  } else if (filterUpdate.priceRange) {
    state.filters.priceRange = filterUpdate.priceRange;
  } else if (filterUpdate.category) {
    state.filters.category = filterUpdate.category;
  } else {
    state.filters = { ...DEFAULT_FILTERS };
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <Shop
      class="shop"
      :products="filtersProduct"
      :filters="state.filters"
      :more-results="state.moreResults"
      :page="state.page"
      @add-product-to-cart="addProductToCart"
      @update-filter="updateFilter"
      @inc-page="state.page++"
    />
    <Cart
      :cart="state.cart"
      @remove-product-from-cart="removeProductFromCart"
    />
  </div>
</template>

<style lang="scss"></style>
