<script lang="ts" setup>
import {
  useFetchProducts,
  tryDeleteProduct,
} from "@/shared/services/product.service";

const { products, loading, error } = useFetchProducts();
</script>

<template>
  <div class="container card">
    <h1>Liste des produits</h1>
    <h3 v-if="error">Error</h3>
    <h3 v-else-if="loading">Chargement...</h3>
    <ul v-else>
      <li
        v-for="product of products"
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
