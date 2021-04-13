<template>
  <div>
    <v-bottom-sheet :value="true" persistent hide-overlay no-click-animation>
      <v-sheet
        class="text-center"
        max-height="150px"
        style="position: relative"
      >
        <v-btn
          v-if="musicPlayingID != null"
          fab
          small
          elevation="0"
          top
          right
          absolute
          color="error"
          :style="$vuetify.breakpoint.mdAndDown ? 'right: 2px' : ''"
          @click="closePlayer()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <div class="">
          <MusicPlayer flat v-if="musicPlayingID != null" />
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import MusicPlayer from "@/components/MusicPlayer";
import { mapState } from "vuex";

export default {
  components: {
    MusicPlayer,
  },
  computed: {
    ...mapState(["musicPlayingID"]),
    showPlayer() {
      return this.musicPlayingID !== null;
    },
  },
  methods: {
    closePlayer() {
      this.$store.commit("stopMusic");
    },
  },
};
</script>

<style></style>
