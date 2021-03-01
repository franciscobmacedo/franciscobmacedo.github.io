<template>
  <v-app>
    <Navigation />
    

    <v-main>
    <v-container class="ma-md-2 pa-10">
      <router-view/>
    </v-container>  
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';

// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>
