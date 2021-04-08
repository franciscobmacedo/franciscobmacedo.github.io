<template>
  <div>
    <div v-for="(repo, index) in repos" :key="index">
      <RepoBlock
        :blockName="repo.name"
        :repos="repo.repos"
        :languageColors="languageColors"
      />
      <v-divider
        v-if="index !== repos.length - 1"
        class="mt-10 mb-10"
      ></v-divider>
    </div>

    <!-- <v-row>
      <v-col>
        <div class="text-h4 text-uppercase">Full Stack</div>
      </v-col>
    </v-row>

    <v-row justify="space-between" align="center" align-content="center">
      <v-col cols="3" v-for="(repo, index) in reposFullStack" :key="index">
        <RepoCard :repo="repo" :colors="languageColors" class="mb-2" />
      </v-col>
    </v-row>
    <v-divider class="mt-10 mb-10"></v-divider>

    <v-row>
      <v-col>
        <div class="text-h4 text-uppercase">Backend</div>
      </v-col>
    </v-row>

    <v-row justify="space-between" align="center" align-content="center">
      <v-col cols="4" v-for="(repo, index) in reposBackEnd" :key="index">
        <RepoCard :repo="repo" :colors="languageColors" class="mb-2" />
      </v-col>
    </v-row>
    <v-divider class="mt-10 mb-10"></v-divider>

    <v-row>
      <v-col>
        <div class="text-h4 text-uppercase">Frontend</div>
      </v-col>
    </v-row>

    <v-row justify="space-between" align="center" align-content="center">
      <v-col cols="3" v-for="(repo, index) in reposFrontEnd" :key="index">
        <RepoCard :repo="repo" :colors="languageColors" class="mb-2" />
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
// import RepoCard from "@/components/RepoCard";
import RepoBlock from "@/components/RepoBlock";

export default {
  data: () => ({
    // name: "franciscobmacedo",
    repos: [
      {
        name: "FullStack",
        repos: [
          "modernsnirh",
          "matrizaguaen",
          "matrizenergiaen",
          "docker_django_vue_postgres_template",
          "moveMouse",
        ],
      },

      {
        name: "Backend",
        repos: ["EnergyScraper", "autoemail", "autoscrape"],
      },
      {
        name: "Frontend",
        repos: ["colormixer", "brickOutGame", "TennisGame"],
      },
    ],

    languageColors: null,
  }),
  components: {
    // RepoCard,
    RepoBlock,
  },
  created() {
    const urlColors =
      "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
    fetch(urlColors) // fetch colors data
      .then((res) => res.json())
      .then((json) => (this.languageColors = json)); // append to colors
  },
};
</script>

<style></style>
