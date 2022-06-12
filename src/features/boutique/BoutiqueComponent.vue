<script setup lang="ts">
import Cart from "./components/Cart/Cart-component.vue";
import Shop from "./components/Shop/Shop-component.vue";

import { useProducts } from "./stores/products.store";
import { useCart } from "./stores/cart.store";
import type { FilterUpdate } from "@/shared/interfaces";

const productStore = useProducts();
const cartStore = useCart();

//Init produits
//productStore.seed()

function updateFilter(filterUpdate: FilterUpdate): void {
  productStore.updateFilter(filterUpdate);
}
function incPage() {
  productStore.incPage;
}

function addProductToCart(productId: string) {
  cartStore.addProductToCart(productId);
}
function removeProductFromCart(productId: string) {
  cartStore.removeProductFromCart(productId);
}

//Ecoute des effets sur les actions incPage && updtaeFilter
productStore.$onAction(({ name, after, args }) => {
  console.log(args);
  if (name === "updateFilter" && args[0].search === undefined) {
    after(() => {
      productStore.page = 1;
      (productStore.products = []), productStore.fetchProduct();
    });
  } else if (name === "incPage") {
    after(() => {
      productStore.fetchProduct();
    });
  }
});
</script>

<template>
  <div class="d-flex flex-column">
    <Shop
      class="shop"
      :products="productStore.filteredProducts"
      :filters="productStore.filters"
      :more-results="productStore.moreResults"
      :page="productStore.page"
      @add-product-to-cart="addProductToCart"
      @update-filter="updateFilter"
      @inc-page="incPage"
    />
    <Cart
      v-if="!cartStore.cartIsEmpty"
      :cart="cartStore.cart"
      @remove-product-from-cart="removeProductFromCart"
    />
  </div>
</template>

<style lang="scss"></style>
