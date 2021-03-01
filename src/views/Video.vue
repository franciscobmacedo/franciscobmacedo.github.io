<template>
  <v-row>
    <v-col>
    <div class="text-h4 text-uppercase">Razões Para Acordar Cedo e Ir ao Shopping</div>
    <v-row class="mt-5">
    
      <v-col cols="12" lg="10">
        <div class="text-center">
          <youtube player-width="100%" :player-height="height" video-id="13qSvuXNM-o"></youtube>
        </div>
      </v-col>
      <v-col cols="12" lg="2">
        <div>Teledisco da música <span class="primary--text">Razões Para Acordar Cedo e Ir ao Shopping</span> gravado no dia mais quente do ano de 2019.</div>
      </v-col>
    </v-row>
  </v-col>
</v-row>
  
</template>

<script>
 export default {
    computed: {
      height () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 518
          case 'sm': return 518
          case 'md': return 518
          case 'lg': return 518
          case 'xl': return 518
          default: return 518
        }
      },
    },
  }
</script>

<style>

</style>