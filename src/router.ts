import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound_view.vue";
import { ADMIN_ROUTES } from "./features/admin/admin.routes";
import { initialFetchProduct } from "@/features/boutique/stores/products.store";
import { initialFetchAdminProduct } from "./features/admin/stores/adminProduct.store";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/boutique",
    },
    {
      path: "/boutique",
      beforeEnter: [initialFetchProduct],
      component: () => import("@/features/boutique/BoutiqueComponent.vue"),
    },
    {
      path: "/admin",
      beforeEnter: [initialFetchAdminProduct],
      component: () => import("@/features/admin/AdminComponent.vue"),
      children: ADMIN_ROUTES,
    },
    {
      path: "/:notfound(.*)*",
      component: NotFound,
    },
  ],
});
