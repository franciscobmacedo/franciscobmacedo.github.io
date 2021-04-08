<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-h4 text-uppercase">{{ blockName }}</div>
      </v-col>
    </v-row>

    <v-row justify="space-between" align="center" align-content="center">
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="3"
        v-for="(repo, index) in repos"
        :key="index"
      >
        <RepoCard :repo="repo" :colors="languageColors" class="mb-2" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RepoCard from "@/components/RepoCard";

export default {
  props: ["blockName", "repos", "languageColors"],
  components: {
    RepoCard,
  },
};
</script>

<style></style>
