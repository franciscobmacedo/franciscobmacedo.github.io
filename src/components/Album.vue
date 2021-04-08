<template>
  <div>
    <AlbumHeader
      :title="album.title"
      :artist="album.artist"
      :year="album.year"
      :streamingUrls="album.streamingUrls"
    />
    <v-row>
      <v-col cols="12" sm="8" class="pa-0 pa-sm-3">
        <v-list class="background">
          <v-list-item-group v-model="musicPlayingID" color="primary">
            <v-list-item
              v-for="music in album.songs"
              :key="music.id"
              :value="music.id"
              class="pl-0 pl-sm-4 pr-0 pr-sm-4"
            >
              <template>
                <v-list-item-icon>
                  <v-icon v-if="music.id !== musicPlayingID || pauseMusic"
                    >mdi-play</v-icon
                  >
                  <v-icon v-else>mdi-pause</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="music.name"></v-list-item-title>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" sm="4" class="text-right">
        <v-skeleton-loader type="image" v-if="loadingImg"></v-skeleton-loader>
        <transition>
          <v-img
            v-show="!loadingImg"
            style="cursor: pointer"
            max-width="300"
            :src="imgSrc"
            @click="goToExternalWebsite()"
          ></v-img>
        </transition>
      </v-col>
    </v-row>
    <v-row
      class="d-flex justify-space-around justify-md-start mt-md-5 pl-1 pr-1"
    >
      <div>
        <div class="text-body-1">
          <span class="font-weight-bold">{{ album.title }}</span>
          {{ album.body.header }}
          <span class="primary--text">{{ album.artist }}</span
          >.
        </div>
        <ul class="mt-5 pl-0">
          <li v-for="(detail, index) of album.body.details" :key="index">
            <span class="text-overline font-weight-bold">{{
              detail.name
            }}</span>
            {{ detail.text }}
          </li>
        </ul>
      </div>
    </v-row>
  </div>
</template>

<script>
import AlbumHeader from "@/components/AlbumHeader";

import { mapState } from "vuex";

export default {
  props: {
    album: Object,
  },
  data() {
    return {
      imgSrc: "",
      loadingImg: true,
    };
  },
  components: {
    AlbumHeader,
  },
  computed: {
    ...mapState(["pauseMusic"]),

    musicPlayingID: {
      get() {
        return this.$store.state.musicPlayingID;
      },
      set(id) {
        if (id === undefined) {
          this.$store.commit("playPause");
        } else {
          this.$store.commit("setMusicID", id);
        }
      },
    },
  },
  methods: {
    goToExternalWebsite() {
      window.open(this.album.url, "_blank");
    },
  },
  created() {
    var myImage = new Image();
    myImage.src = require(`@/assets/${this.album.image}`);
    myImage.onload = () => {
      this.imgSrc = myImage.src;
      this.loadingImg = false;
    };
  },
};
</script>

<style></style>
