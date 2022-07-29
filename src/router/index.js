import { createRouter, createWebHashHistory } from "vue-router";
import MusicView from "@/views/MusicView.vue";
import PhotographyView from "@/views/PhotographyView.vue";
import SoftwareView from "@/views/SoftwareView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/music",
      name: "music",
      component: () => MusicView,
    },
    {
      path: "/photography",
      name: "photography",
      component: () => PhotographyView,
    },
    {
      path: "/software",
      name: "software",
      component: () => SoftwareView,
    },
    {
      path: "/",
      alias: "/about",
      name: "about",
      component: () => AboutView,
    },
  ],
});

export default router;
