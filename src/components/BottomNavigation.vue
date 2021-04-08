<template>
  <v-bottom-navigation fixed grow color="primary" style="z-index: 1000">
    <v-btn
      class="btn"
      v-for="(section, index) in sectionsExtended"
      :key="index"
      link
      :to="section.link"
    >
      <v-icon>{{ section.icon }}</v-icon>
    </v-btn>
    <!-- 
    <v-btn class="bg">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn class="bg">
      <v-icon>mdi-map-marker</v-icon>
    </v-btn> -->
  </v-bottom-navigation>
</template>
<script>
import { mapState } from "vuex";

export default {
  // data: () => ({ value: 0 }),
  computed: {
    ...mapState(["sections"]),
    sectionsExtended() {
      return [{ icon: "mdi-home", title: "Início", link: "/" }].concat(
        this.sections
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  background-color: #fff !important;
  padding: 0 !important;
  min-width: 53px !important;
}

.v-bottom-navigation {
  height: 36px !important;
}
</style>
