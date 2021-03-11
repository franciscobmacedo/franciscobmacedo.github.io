<template>
  <div>
    <RepoCard :name="name" :repo="repo" />
  </div>
</template>

<script>
import RepoCard from "@/components/RepoCard";

export default {
  data: () => ({
    name: "franciscobmacedo",
    repo: "colormixer",
  }),
  components: {
    RepoCard,
  },
};
</script>

<style>
</style>