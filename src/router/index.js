import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";

/**Define routes here */
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/weather/:state/:city",
    name: "cityView",
    component: CityView,
  },
];

/**Initialize here */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
