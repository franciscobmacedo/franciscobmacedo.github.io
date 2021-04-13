<template>
  <v-app>
    <Navigation />

    <v-main>
      <v-container class="ma-lg-2 py-md-10 pr-lg-10">
        <router-view />
      </v-container>
    </v-main>
    <MusicPlayerWraper />

    <BottomNavigation v-if="$vuetify.breakpoint.mdAndDown" />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";
import MusicPlayerWraper from "@/components/MusicPlayerWraper";

export default {
  name: "App",

  components: {
    BottomNavigation,
    Navigation,
    MusicPlayerWraper,
  },

  data: () => ({}),
};
</script>
<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
#app {
  background-color: #f4f4f4 !important;
}
a {
  text-decoration: none;
}
.hide {
  display: none;
}
</style>
