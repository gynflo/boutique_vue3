<template>
  <div
    class="boutique-container"
    :class="{
      'grid-empty': cartIsEmpty,
    }"
  >
    <Shop
      class="shop"
      :products="filtersProduct"
      :filters="state.filters"
      @add-product-to-cart="addProductToCart"
      @update-filter="updateFilter"
    />
    <Cart
      v-if="!cartIsEmpty"
      class="cart"
      :cart="state.cart"
      @remove-product-from-cart="removeProductFromCart"
    />
  </div>
</template>

<script setup lang="ts">
import Cart from "./components/Cart/Cart-component.vue";
import Shop from "./components/Shop/Shop-component.vue";

import { DEFAULT_FILTERS } from "@/data/filters";
import { reactive, computed } from "vue";
import type {
  ProductCartInterface,
  ProductInterface,
  FiltersInterface,
  FilterUpdate,
} from "@/interfaces";

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
  filters: FiltersInterface;
}>({
  products: [],
  cart: [],
  filters: { ...DEFAULT_FILTERS },
});

const cartIsEmpty = computed(() => state.cart.length === 0);
const products = await (
  await fetch("https://restapi.fr/api/productVueGynflo")
).json();
if (products && Array.isArray(products)) {
  state.products = products;
} else [products];

const filtersProduct = computed(() => {
  return state.products.filter((product) => {
    if (
      product.title
        .toLowerCase()
        .startsWith(state.filters.search.toLowerCase()) &&
      product.price >= state.filters.priceRange[0] &&
      product.price <= state.filters.priceRange[1] &&
      (product.category === state.filters.category ||
        state.filters.category === "all")
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

<style lang="scss">
.boutique-container {
  display: grid;
  grid-template-columns: 75% 25%;
}
.grid-empty {
  grid-template-columns: 100%;
}
.cart {
  background-color: white;
  border-left: var(--border);
}
</style>
