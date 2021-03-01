<template>
<div>
  <AlbumHeader :title="album.title" :artist="album.artist" :year="album.year" :bandCampUrl="album.url"/>
  <v-row>
      <v-col cols="12" sm="8">

        <div class="text-body-1"><span class="font-weight-bold">{{album.title}}</span> {{album.body.header}} <span class="primary--text">{{album.artist}}</span>.
        </div>
        <ul class="mt-5 pl-0">
          <li v-for="(detail, index) of album.body.details" :key="index"  >
              <span class="text-overline font-weight-bold">{{detail.name}}</span> {{detail.text}}
            </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="4" class="text-right">
          <v-img
          style="cursor: pointer"
        :src="require(`@/assets/${album.image}`)"
                @click="goToExternalWebsite()"

      ></v-img>
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
components:{
    AlbumHeader,
    MusicCard
},
 methods:{
        goToExternalWebsite(){
                    window.open(this.album.url, "_blank");    
        }
    }

}
</script>

<style>

</style>