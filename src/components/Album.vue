<template>
<div>
  <AlbumHeader :title="album.title" :artist="album.artist" :year="album.year" :bandCampUrl="album.url"/>
  <v-row>
      <v-col cols="12" sm="8">
        <div>
          <div
          class="text-body-1"><span class="font-weight-bold">{{album.title}}</span> {{album.body.header}} <span class="primary--text">{{album.artist}}</span>.
          </div>
          <ul class="mt-5 pl-0">
            <li v-for="(detail, index) of album.body.details" :key="index"  >
                <span class="text-overline font-weight-bold">{{detail.name}}</span> {{detail.text}}
              </li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="text-right">
          <v-skeleton-loader
          type="image"
          v-if="loadingImg"
        ></v-skeleton-loader>
<transition>
          <v-img
          v-show="!loadingImg"
          style="cursor: pointer"
        :src="imgSrc"
                @click="goToExternalWebsite()"

      ></v-img>
</transition>
      
      </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around justify-md-start">
       <MusicCard
          v-for="music of album.songs"
        :key="music.id"
        :music="music" />
    </v-row>
    </div>
</template>

<script>
import AlbumHeader from "@/components/AlbumHeader"
import MusicCard from "@/components/MusicCard"


export default {
  props:{
        album: Object
    },
  data(){
      return {
        imgSrc: "",
        loadingImg: true,

      }
  },
  components:{
    AlbumHeader,
    MusicCard
  },
  methods:{
    
    goToExternalWebsite(){
      window.open(this.album.url, "_blank");    
    }
  },
  created() {  
    var myImage = new Image();
    myImage.src = require(`@/assets/${this.album.image}`)
    myImage.onload = () => {
      this.imgSrc = myImage.src
      this.loadingImg = false

    } 
    
  },
}
</script>

<style>

</style>