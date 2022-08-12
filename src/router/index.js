import { createRouter, createWebHashHistory } from "vue-router";
// import MusicView from "../views/MusicView.vue";
// import PhotographyView from "../views/PhotographyView.vue";
// import SoftwareView from "../views/SoftwareView.vue";
// import AboutView from "../views/AboutView.vue";
// import OtherView from "../views/OtherView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/music",
      name: "music",
      component: () => import("./../views/MusicView.vue"),
    },
    {
      path: "/photography",
      name: "photography",
      component: () => import("./../views/PhotographyView.vue"),
    },
    {
      path: "/software",
      name: "software",
      component: () => import("./../views/SoftwareView.vue"),
    },
    {
      path: "/",
      alias: "/about",
      name: "about",
      component: () => import("./../views/AboutView.vue"),
    },
  ],
});

export default router;
