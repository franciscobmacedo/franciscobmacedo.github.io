<template>
  <div>
    <div v-for="(album, index) of albums" :key="index">
      <Album :album="album" />
      <v-divider
        v-if="index !== albums.length - 1"
        class="mt-10 mb-10"
      ></v-divider>
    </div>
    <div style="height: 70px"></div>
  </div>
</template>

<script>
import Album from "@/components/Album";

import { mapState } from "vuex";

export default {
  components: {
    Album,
  },
  data: () => ({
    sheet: true,
  }),
  created() {
    console.log("asd");
  },
  computed: {
    ...mapState(["albums", "musicPlayingID"]),
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
