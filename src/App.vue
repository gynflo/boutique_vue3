<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Shop
      class="shop"
      :products="state.products"
      @add-product-to-cart="addProductToCart"
    />
    <Cart
      class="cart"
      :cart="state.cart"
      @remove-product-from-cart="removeProductFromCart"
    />
    <TheFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header-component.vue";
import TheFooter from "./components/Footer-component.vue";
import Cart from "./components/Cart/Cart-component.vue";
import Shop from "./components/Shop/Shop-component.vue";
// Import de la data statique
import data from "./data/product";
import { reactive } from "vue";
import type { ProductInterface } from "./interfaces/product.interface";

const state = reactive<{
  products: ProductInterface[];
  cart: ProductInterface[];
}>({
  products: data,
  cart: [],
});

// void => absence de valeur
function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId);
  if (product && !state.cart.find((product) => product.id === productId)) {
    // déconstruction de l'objet pour supprimmer toute référence (light copy)
    state.cart.push({ ...product });
  }
}
function removeProductFromCart(productId: number): void {
  state.cart = state.cart.filter((product) => product.id !== productId);
}
</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
  min-height: 100vh;
  display: grid;
  /*  1/ positionne les elements les uns par rapport aux autres */
  grid-template-areas: "header header" "shop cart" "footer footer";
  /* 2/ Définir les tailles des blocs, commence par les rows  */
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}
.header {
  grid-area: header;
}
.shop {
  grid-area: shop;
}
.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: var(--white);
}
.footer {
  grid-area: footer;
}
</style>
