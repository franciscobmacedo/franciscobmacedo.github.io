<template>
  <v-row>
      <v-col cols="9" md="11">
        <div class="text-h4 text-uppercase">{{title}}</div>
        <div class="font-weight-thin">{{artist}} &bull; {{year}}</div>

    </v-col>

      <v-col cols="3" md="1" class="text-right">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                v-bind="attrs" 
                v-on="on" 
                elevation="0"
                @click="goToExternalWebsite()"
              >
                <v-icon>mdi-bandcamp</v-icon>
              </v-btn>
            </template>
            <span>Bandcamp</span>
          </v-tooltip>

    </v-col>
    </v-row>
</template>

<script>
export default {
    props:{
        title: String,
        artist: String,
        year: Number,
        bandCampUrl: String
    },
    methods:{
        goToExternalWebsite(){
                    window.open(this.bandCampUrl, "_blank");    
        }
    }

}
</script>

<style>

</style>