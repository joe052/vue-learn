import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

/**Define routes here */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

/**Initialize here */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
