<template>
  <div class="app-container">
    <TheHeader class="header" :page="state.page" @navigate="navigate" />
    <Suspense
      ><div class="app-content">
        <component :is="pages[state.page]" /></div
    ></Suspense>

    <TheFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/Header-component.vue";
import TheFooter from "./components/Footer-component.vue";
import Boutique from "./features/boutique/BoutiqueComponent.vue";
import Admin from "./features/admin/AdminComponent.vue";

import { reactive, type Component as C } from "vue";
import type { Page } from "@/interfaces";
// Seeding Dev
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { seed, seed50Articles } from "./data/seed";

const state = reactive<{
  page: Page;
}>({ page: "Boutique" });

const pages: { [s: string]: C } = {
  Boutique,
  Admin,
};
function navigate(page: Page): void {
  state.page = page;
}
// SEED //
//seed("products");
//seed50Articles("products");


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
