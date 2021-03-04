<template>
  <v-app>
    <Navigation />

    <v-main>
      <v-container class="ma-lg-2 py-md-10 pr-lg-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
    Navigation
  },

  data: () => ({
    //
  })
};
</script>
<style>
#app {
  background-color: #f4f4f4 !important;
}
.hide {
  display: none;
}
</style>
