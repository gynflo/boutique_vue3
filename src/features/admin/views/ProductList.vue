<script lang="ts" setup>
import { useAdminProducts } from "../stores/adminProduct.store";
const adminProductStore = useAdminProducts();

function tryDeleteProduct(productId: string) {
  adminProductStore.deleteProduct(productId);
}
</script>

<template>
  <div class="container card">
    <h1>Liste des produits</h1>
    <h3 v-if="adminProductStore.isLoading">Chargement...</h3>
    <ul v-else>
      <li
        v-for="product of adminProductStore.products"
        :key="product._id"
        class="d-flex align-items-center"
      >
        <span class="flex-fill">{{ product.title }}</span>
        <router-link :to="{ name: 'edit', params: { productId: product._id } }"
          ><button class="btn btn-primary mr-20">Modifier</button></router-link
        >

        <button class="btn btn-danger" @click="tryDeleteProduct(product._id)">
          Supprimer
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
}

li {
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--gray-1);
  }
}
</style>
