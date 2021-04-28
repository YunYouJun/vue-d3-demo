import { createRouter, createWebHashHistory } from "vue-router";
// @ts-ignore
import routes from "virtual:generated-pages";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
