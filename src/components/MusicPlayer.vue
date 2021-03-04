<template>
  <v-card
    style="text-align: center"
    :flat="flat == undefined || flat == false ? false : true"
  >
    <div class="d-flex d-sm-none mt-0 pt-0">
      <v-progress-linear
        ref="musicProgress"
        v-model="percentage"
        height="5"
        class="mt-0"
        @click.native="setPosition()"
        :disabled="!loaded"
      ></v-progress-linear>
    </div>
    <v-row class="d-flex justify-space-between justify-md-center align-center">
      <v-col cols="9" sm="3" md="4" class="text-left pl-0 pl-sm-3 ">
        <v-list-item two-line>
          <v-list-item-avatar
            tile
            :size="$vuetify.breakpoint.smAndDown ? 50 : 100"
          >
            <img :src="imgSrc" />
          </v-list-item-avatar>
          <v-list-item-content>
            <div>
              {{ musicPlaying.name }}
            </div>
            <v-list-item-subtitle>
              {{ musicPlaying.albumName }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3" sm="7" md="5" class="mr-0 pr-0 pr-md-3">
        <v-btn
          outlined
          icon
          class="ma-2 d-none d-sm-inline"
          :color="color"
          :disabled="!loaded"
          @click.native="prevSong()"
        >
          <v-icon>mdi-skip-previous</v-icon>
        </v-btn>
        <v-btn
          ref="playBtn"
          outlined
          icon
          class="ma-2"
          :color="color"
          @keydown.space.prevent
          @keydown.space="setPause()"
          @click.native="setPause()"
          :disabled="!loaded"
        >
          <v-icon v-if="!playing || paused">mdi-play</v-icon>
          <v-icon v-else>mdi-pause</v-icon>
        </v-btn>

        <v-btn
          outlined
          icon
          class="ma-2 d-none d-sm-inline"
          :color="color"
          :disabled="!loaded"
          @click="nextSong()"
        >
          <v-icon>mdi-skip-next</v-icon>
        </v-btn>
        <v-btn
          outlined
          icon
          class="ma-2 d-none d-sm-inline"
          :color="color"
          @click.native="loaded ? download() : reload()"
          v-if="!loaded"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <v-btn
          outlined
          icon
          class="ma-2 d-none d-sm-inline"
          :color="color"
          @click.native="loaded ? download() : reload()"
          v-if="loaded && downloadable"
        >
          <v-icon>mdi-download</v-icon>
        </v-btn>
        <div class="justify-center align-center d-none d-sm-flex">
          <div class="mr-1 ">{{ currentTime }}</div>
          <v-progress-linear
            ref="musicProgress"
            v-model="percentage"
            height="10"
            class="mt-1"
            @click.native="setPosition()"
            :disabled="!loaded"
          ></v-progress-linear>

          <div class="ml-1 ">{{ duration }}</div>
        </div>
        <audio
          id="player"
          ref="player"
          v-on:ended="ended"
          v-on:canplay="canPlay"
          :src="require(`@/assets/audio/${musicPlaying.file}`)"
        ></audio>
      </v-col>
      <v-col cols="0" sm="2" md="3" class="d-none d-sm-flex">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="6">
            <v-hover v-slot="{ hover }">
              <v-slider
                @input="setVolume()"
                @click:prepend="mute()"
                :thumb-color="hover ? 'primary' : 'transparent'"
                v-model="volume"
                hint="volume"
                :prepend-icon="isMuted ? 'mdi-volume-mute' : 'mdi-volume-high'"
              ></v-slider>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
const formatTime = second =>
  new Date(second * 1000).toISOString().substr(14, 5);

import { mapGetters, mapState } from "vuex";

export default {
  name: "vuetify-audio",
  props: {
    flat: {
      type: Boolean,
      default: false
    },
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    ended: {
      type: Function,
      default: () => {}
    },
    canPlay: {
      type: Function,
      default: () => {}
    },
    color: {
      type: String,
      default: null
    },
    downloadable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    duration: function() {
      return this.audio ? formatTime(this.totalDuration) : "";
    },
    ...mapGetters(["musicPlaying", "allSongs"]),
    ...mapState(["pauseMusic"])
  },
  watch: {
    musicPlaying() {
      this.audio = this.$refs.player;
      this.audio !== undefined && this.init();
    },
    pauseMusic() {
      this.pause();
    }
  },
  data() {
    return {
      percentage: 0,
      clickProgressBar: false,
      volume: 0,
      initialVolume: 50,
      imgSrc: "",
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: false,
      currentTime: "00:00:00",
      audio: undefined,
      totalDuration: 0
    };
  },

  methods: {
    nextSong() {
      const isLastSong = this.musicPlaying.id == this.allSongs.length - 1;
      if (isLastSong) {
        this.$store.commit("setMusicID", 0);
      } else {
        this.$store.commit("setMusicID", this.musicPlaying.id + 1);
      }
    },
    prevSong() {
      const isFirstSong = this.musicPlaying.id === 0;
      if (isFirstSong) {
        this.$store.commit("setMusicID", this.allSongs.length - 1);
      } else {
        this.$store.commit("setMusicID", this.musicPlaying.id - 1);
      }
    },
    focusPlay() {
      this.$refs.playBtn.$el.focus();
    },
    setPosition() {
      this.audio.currentTime = parseInt(
        (this.audio.duration / 100) * this.percentage
      );
    },

    play() {
      if (this.playing) return;
      this.audio.play().then(() => (this.playing = true));
      this.paused = false;
    },
    setPause() {
      this.$store.commit("playPause");
    },
    pause() {
      // this.focusPlay();
      this.paused = !this.paused;
      this.paused ? this.audio.pause() : this.audio.play();
    },
    download() {
      this.audio.pause();
      window.open(this.musicPlaying.file, "download");
    },
    mute() {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
      this.volume = this.isMuted ? 0 : this.initialVolume;
    },
    setVolume(initialVolume = null) {
      if (initialVolume !== null) {
        this.volume = initialVolume;
        this.audio.volume = initialVolume / 100;
      } else {
        if (this.volume === 0) {
          this.mute();
        } else {
          this.isMuted = false;
          this.audio.muted = false;
          this.audio.volume = this.volume / 100;
        }
      }
    },
    reload() {
      this.audio.load();
    },
    _handleLoaded: function() {
      if (this.audio.readyState >= 2) {
        if (this.audio.duration === Infinity) {
          // Fix duration for streamed audio source or blob based
          // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
          this.audio.currentTime = 1e101;
          this.audio.ontimeupdate = () => {
            this.audio.ontimeupdate = () => {};
            this.audio.currentTime = 0;
            this.totalDuration = parseInt(this.audio.duration);
            this.loaded = true;
          };
        } else {
          this.totalDuration = parseInt(this.audio.duration);
          this.loaded = true;
        }
        // this.focusPlay();
        this.percentage = 0;
        if (this.autoPlay) this.audio.play();
      } else {
        throw new Error("Failed to load sound file");
      }
    },
    _handlePlayingUI: function() {
      this.percentage = (this.audio.currentTime / this.audio.duration) * 100;

      this.currentTime = formatTime(this.audio.currentTime);

      this.playing = true;
      this.clickProgressBar = false;
    },
    _handlePlayPause: function(e) {
      if (e.type === "play" && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0;
        if (this.firstPlay) {
          this.firstPlay = false;
        }
      }
      if (
        e.type === "pause" &&
        this.paused === false &&
        this.playing === false
      ) {
        this.currentTime = "00:00:00";
      }
    },
    _handleEnded() {
      this.paused = this.playing = false;
    },
    init: function() {
      this.setImageSrc();
      this.setVolume(this.initialVolume);
      this.audio.addEventListener("timeupdate", this._handlePlayingUI);
      this.audio.addEventListener("loadeddata", this._handleLoaded);
      this.audio.addEventListener("pause", this._handlePlayPause);
      this.audio.addEventListener("play", this._handlePlayPause);
      this.audio.addEventListener("ended", this._handleEnded);
    },
    remove: function() {
      this.audio.removeEventListener("timeupdate", this._handlePlayingUI);
      this.audio.removeEventListener("loadeddata", this._handleLoaded);
      this.audio.removeEventListener("pause", this._handlePlayPause);
      this.audio.removeEventListener("play", this._handlePlayPause);
      this.audio.removeEventListener("ended", this._handleEnded);
    },
    setImageSrc() {
      var myImage = new Image();
      myImage.src = require(`@/assets/${this.musicPlaying.albumCover}`);
      myImage.onload = () => {
        this.imgSrc = myImage.src;
        this.loadingImg = false;
      };
    }
  },

  mounted() {
    this.audio = this.$refs.player;
    this.audio !== undefined && this.init();
  },
  beforeDestroy() {
    this.remove();
  }
};
</script>
<style scoped>
.img {
  height: 100vh;
}
</style>
