<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-skeleton-loader
      v-if="loading"
      :loading="loading"
      transition="fade-transition"
      type="card"
    >
    </v-skeleton-loader>

    <v-card outlined tile class="text-center" v-show="!loading">
      <div class="text-overline pl-3 pr-3" style="height: 60px">
        {{ music.name }}
      </div>
      <vuetify-audio
        flat
        :id="music.id"
        :file="music.file"
        color="secondary"
      ></vuetify-audio>
    </v-card>
  </v-col>
</template>

<script>
import VuetifyAudio from "@/components/VuetifyAudio";
export default {
  props: {
    music: Object,
  },
  data() {
    return {
      loading: true,
    };
  },
  components: {
    VuetifyAudio,
  },
  created() {
    const readyHandler = () => {
      if (document.readyState == "complete") {
        this.loading = false;
        document.removeEventListener("readystatechange", readyHandler);
      }
    };

    document.addEventListener("readystatechange", readyHandler);

    readyHandler(); // in case the component has been instantiated lately after loading
  },
};
</script>

<style>
</style>