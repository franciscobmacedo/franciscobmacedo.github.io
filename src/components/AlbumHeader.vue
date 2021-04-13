<template>
  <v-row>
    <v-col cols="12" sm="8" md="9" xl="10" class="pa-1 pa-sm-3">
      <div class="text-h4 text-uppercase">{{ title }}</div>
      <div class="font-weight-thin">{{ artist }} &bull; {{ year }}</div>
    </v-col>

    <v-col cols="12" sm="4" md="3" xl="2" class="text-right">
      <v-row justify="center">
        <div
          class="mr-1 ml-1"
          v-for="(streamingUrl, index) of streamingUrls"
          :key="index"
        >
          <IconWithTooltip
            :url="streamingUrl.url"
            :icon="streamingUrl.icon"
            :name="streamingUrl.name"
          />
          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                v-bind="attrs"
                v-on="on"
                elevation="2"
                @click="goToExternalWebsite(streamingUrl.url)"
              >
                <v-icon>{{ streamingUrl.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ streamingUrl.name }}</span>
          </v-tooltip> -->
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import IconWithTooltip from "@/components/IconWithTooltip";
export default {
  components: {
    IconWithTooltip,
  },
  props: {
    title: String,
    artist: String,
    year: Number,
    streamingUrls: Array,
  },
  methods: {
    goToExternalWebsite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style></style>
