<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Shop class="shop" />
    <Cart class="cart" />
    <TheFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header-component.vue";
import TheFooter from "./components/Footer-component.vue";
import Cart from "./components/Cart/Cart-component.vue";
import Shop from "./components/Shop/Shop-component.vue";
</script>

<style lang="scss">
@import "./assets/base.scss";
@import "./assets/debug.scss";

.app-container {
  min-height: 100vh;
  display: grid;
  /*  1 /position les elements les uns par rapport aux autres */
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
