<script setup lang="ts">
import AdminNav from "./components/AdminNav.vue";
</script>

<template>
  <div class="admin-container d-flex p-20">
    <AdminNav class="admin-nav" />
    <div
      class="admin-main flex-fill d-flex justify-content-center align-items-center"
    >
      <!-- force le Router à reconstruire le composant si une partie de la route change (param..) -->
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route" />
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-container {
  height: 100%;
}
.admin-nav {
  flex: 0 0 200px;
  margin-right: 20px;
}
</style>
