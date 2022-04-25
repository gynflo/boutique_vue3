<template>
  <div class="d-flex flex-row align-items-center mb-10 p-10 product">
    <strong class="flex-fill">macbook pro</strong>
    <span class="mr-10">Prix: 1500€</span>
    <button class="btn btn-danger">Supprimez</button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.product {
  border: var(--border);
  border-radius: var(--border-radius);
  background-color: var(--gray-1);
}
</style>
