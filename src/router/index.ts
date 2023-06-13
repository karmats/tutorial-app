import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/TestView.vue"),
    },
    {
      path: "/forms",
      name: "forms",
      component: () => import("../views/FormView.vue"),
    },
    {
      path: "/graphs",
      name: "graphs",
      component: () => import("../views/GraphView.vue"),
    },
  ],
});

export default router;
