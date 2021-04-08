<template>
  <div>
    <!-- {{ colors }} -->
    <v-card
      v-if="repository !== null"
      class="mx-auto"
      width="400"
      height="200"
      outlined
      @click="goToExternalWebsite('https://github.com/' + repository.full_name)"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div>
            <v-chip
              v-for="(language, index) in languages"
              :key="index"
              dark
              small
              :style="{
                background: languageColor(language),
              }"
              class="ma-1"
            >
              {{ language }}
            </v-chip>
          </div>
          <v-list-item-title class="headline mb-1">
            {{ repository.name }}
          </v-list-item-title>
          <v-list-item-subtitle>{{
            repository.description
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          :href="repository.login"
        >
          <img :src="repository.owner.avatar_url" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <v-skeleton-loader
      v-else
      type="list-item-avatar, list-item-three-line"
    ></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  props: ["repo", "token", "colors"],
  data: () => ({
    repository: null,
    name: "franciscobmacedo",
  }),
  created() {
    const headers = !this.token
      ? {
          headers: {
            Accept: "application/vnd.github.mercy-preview+json",
          },
        }
      : {
          headers: {
            Authorization: "token " + this.token,
            Accept: "application/vnd.github.mercy-preview+json",
          },
        };
    fetch(
      "https://api.github.com/repos/" + this.name + "/" + this.repo,
      headers
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.repository = data;
      });
  },
  computed: {
    languages() {
      let languages = [];
      if (this.repository.topics.length === 0) {
        languages = [this.repository.language];
      } else {
        languages = [this.repository.language].concat(this.repository.topics);
        languages = [...new Set(languages)];
      }

      return languages;
    },
  },
  methods: {
    languageColor(language) {
      let languageParent;
      let languageLower = language.toLowerCase();
      // console.log("languge", languageLower);
      switch (languageLower) {
        case "django":
          languageParent = "python";
          break;
        case "jquery":
          languageParent = "javascript";
          break;
        case "postgresql":
          languageParent = "plpgsql";
          break;
        default:
          languageParent = languageLower;
      }

      // const lowerLanguageNames = Object.keys(this.colors).map((c) =>
      //   c.toLowerCase()
      // );

      var key,
        keys = Object.keys(this.colors);
      var n = keys.length;
      var lowerCaseColors = {};
      while (n--) {
        key = keys[n];
        lowerCaseColors[key.toLowerCase()] = this.colors[key];
      }

      if (Object.keys(lowerCaseColors).includes(languageParent)) {
        return lowerCaseColors[languageParent].color; // pick up the right color by language
      } else {
        return "grey";
      }
      // return "red";
      // if (Object.keys(this.colors).includes(language)) {
      // return this.colors[language].color; // pick up the right color by language
      // } else {
      // return "blue";
      // }
    },
    goToExternalWebsite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped></style>
