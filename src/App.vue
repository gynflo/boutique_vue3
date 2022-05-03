<template>
  <div class="app-container">
    <TheHeader class="header" />
    <div class="app-content">
      <component :is="Boutique" />
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header-component.vue";
import TheFooter from "./components/Footer-component.vue";
import Boutique from "./features/boutique/BoutiqueComponent.vue";
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
@import "@/assets/scss/debug.scss";

.app-container {
  min-height: 100vh;
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
