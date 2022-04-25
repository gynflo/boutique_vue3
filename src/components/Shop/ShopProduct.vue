<template>
  <div class="product d-flex flex-column">
    <div class="product-image"></div>
    <div class="p-10 d-flex flex-column">
      <h4>MacBook Pro</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
        amet!
      </p>
      <div class="d-flex flex-row align-items-center">
        <strong class="flex-fill">Prix : 1500€</strong>
        <button class="btn btn-primary">Ajoutez au panier</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.product {
  background-color: var(--white);
  border: var(--border);
  border-radius: var(--border-radius);
  &-image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    background-image: url(../../assets/MacBookPro.webp);
    background-position: center;
    background-size: cover;
    height: 150px;
  }
}
</style>
