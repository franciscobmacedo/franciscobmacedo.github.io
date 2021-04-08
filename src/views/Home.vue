<template>
  <div class="main">
    <header id="showcase">
      <h1>Francisco Macedo</h1>
    </header>
    <div id="content" class="container">
      Olá. O meu nome é Francisco, e interesso-me pela
      <a
        @click="goToExternalWebsite('https://pt.wikipedia.org/wiki/Vida')"
        color="primary"
        >Vida</a
      >.
      <!-- 
      <a
        @click="goToExternalWebsite('https://pt.wikipedia.org/wiki/Cientista')"
        color="primary"
        >Músico</a
      >
      e
      <a
        @click="goToExternalWebsite('https://pt.wikipedia.org/wiki/Cientista')"
        color="primary"
        >Cientista</a
      >. -->
    </div>
    <v-row align="center" justify="center" class="mt-8">
      <v-col cols="12" md="8">
        <v-row align="center" justify="space-around">
          <v-btn
            v-for="(section, index) in sections"
            :key="index"
            :to="section.link"
            link
            :block="$vuetify.breakpoint.mdAndDown"
            class="mb-2 btn"
          >
            <v-icon left>
              {{ section.icon }}
            </v-icon>
            {{ section.title }}</v-btn
          >
          <!-- <a href="#" class="btn">Vídeo</a>
          <a href="#" class="btn">Programação</a>
          <a href="#" class="btn">Programação</a> -->
        </v-row>
      </v-col>
    </v-row>
    <v-layout align-center justify-center class="mt-8">
      <IconWithTooltip
        v-for="(item, index) in social"
        :key="index"
        :url="item.url"
        :icon="item.icon"
        :name="item.name"
        :fade="true"
      />
    </v-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconWithTooltip from "@/components/IconWithTooltip";

export default {
  name: "Home",
  components: {
    IconWithTooltip,
  },
  data() {
    return {
      social: [
        {
          icon: "mdi-instagram",
          url: "https://www.instagram.com/avidademacedo/",
          name: "Instagram",
        },
        {
          icon: "mdi-linkedin",
          url: "https://www.linkedin.com/in/franciscodemacedo/",
          name: "Linkedin",
        },
        {
          icon: "mdi-github",
          url: "https://github.com/franciscobmacedo",
          name: "Github",
        },
        {
          icon: "mdi-bandcamp",
          url: "https://videntemacedo.bandcamp.com/",
          name: "Bandcamp",
        },
        {
          icon: "mdi-spotify",
          url:
            "https://open.spotify.com/artist/4gTVexxMCP7ISPOFbN3Flw?si=pHxCBFyXQ4ClzwTSL1VPhQ",
          name: "Spotify",
        },
        {
          icon: "mdi-apple",
          url: "https://music.apple.com/us/artist/vidente-macedo/1558841133",
          name: "Apple Music",
        },
      ],
    };
  },
  computed: {
    ...mapState(["sections"]),
  },
  methods: {
    goToExternalWebsite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
$first-duration: 2s;
$small: 500px;
$medium: 900px;

.main {
  line-height: 1.6;
  text-align: center;
}
.container {
  max-width: 960px;
  margin: auto;
  padding: 0 30px;
}

#showcase {
  height: 160px;
  h1 {
    font-size: 50px;
    line-height: 1.3;
    position: relative;
    animation: headingSmall $first-duration forwards;
  }
}

@media screen and (min-width: $small) {
  #showcase {
    height: 300px;

    h1 {
      animation: heading $first-duration forwards;
    }
  }

  //do Smth
}

@keyframes headingSmall {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(20px);
  }
}

@keyframes heading {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(200px);
  }
}

#content {
  position: relative;
  animation: content $first-duration forwards;
}
@keyframes content {
  0% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
