<template>
  <div class="app-container">
    <TheHeader class="header" />
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <div class="app-content">
            <component :is="Component" />
          </div> </Suspense
      ></template>
    </router-view>

    <TheFooter class="footer hise-xs" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header-component.vue";
import TheFooter from "./components/Footer-component.vue";
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
@import "@/assets/scss/debug.scss";

.app-container {
  height: 100vh;
  display: grid;
  /*  1/ positionne les elements les uns par rapport aux autres */
  grid-template-areas: "header" "app-content" "footer";
  /* 2/ Définir les tailles des blocs, commence par les rows  */
  grid-template-rows: 48px auto 48px;
}
.header {
  grid-area: header;
}
.app-content {
  grid-area: app-content;
}

.footer {
  grid-area: footer;
}
</style>
