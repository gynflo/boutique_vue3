import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound_view.vue";
import { ADMIN_ROUTES } from "./features/admin/admin.routes";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/boutique",
    },
    {
      path: "/boutique",
      component: () => import("@/features/boutique/BoutiqueComponent.vue"),
    },
    {
      path: "/admin",
      component: () => import("@/features/admin/AdminComponent.vue"),
      children: ADMIN_ROUTES,
    },
    {
      path: "/:notfound(.*)*",
      component: NotFound,
    },
  ],
});
