<template>
<v-col cols="12" sm="6" md="4" lg="3">
     <v-card outlined tile

     class="text-center"
     >
          <div class="text-overline pl-3 pr-3 "
          style="height: 60px"
          
          >
            {{music.name}}
          </div>
          <vuetify-audio  flat :id="music.id" :file="music.file" color="secondary"  ></vuetify-audio>
        </v-card>
        </v-col>
</template>

<script>
import VuetifyAudio from "@/components/VuetifyAudio"
export default {
    props:{
        music: Object,
    },
    components:{
        VuetifyAudio
    },
    methods:{
    
    }

}
</script>

<style>

</style>