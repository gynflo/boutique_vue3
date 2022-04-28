<template>
  <div
    class="app-container"
    :class="{
      gridEmpty: cartIsEmpty,
    }"
  >
    <TheHeader class="header" />
    <Shop
      class="shop"
      :products="state.products"
      @add-product-to-cart="addProductToCart"
    />
    <Cart
      v-if="!cartIsEmpty"
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
import { reactive, computed } from "vue";
import type { ProductCartInterface, ProductInterface } from "./interfaces";

const state = reactive<{
  products: ProductInterface[];
  cart: ProductCartInterface[];
}>({
  products: data,
  cart: [],
});

const cartIsEmpty = computed(() => state.cart.length === 0);

function addProductToCart(productId: number): void {
  const product = state.products.find((product) => product.id === productId);
  if (product) {
    const checkProductInCart = state.cart.find(
      (product) => product.id === productId
    );
    if (checkProductInCart) {
      checkProductInCart.quantity++;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  }
}
function removeProductFromCart(productId: number): void {
  const checkProductFromCart = state.cart.find(
    (product) => product.id === productId
  );
  if (checkProductFromCart) {
    if (checkProductFromCart.quantity === 1) {
      state.cart = state.cart.filter((product) => product.id !== productId);
    } else {
      checkProductFromCart.quantity--;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/base.scss";
@import "./assets/scss/debug.scss";

.app-container {
  min-height: 100vh;
  display: grid;
  /*  1/ positionne les elements les uns par rapport aux autres */
  grid-template-areas: "header header" "shop cart" "footer footer";
  /* 2/ Définir les tailles des blocs, commence par les rows  */
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}
.gridEmpty {
  grid-template-areas: "header" "shop" "footer";
  grid-template-columns: 100%;
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
