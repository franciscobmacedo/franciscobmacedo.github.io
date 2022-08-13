<script setup>
import ImageContainer from "../components/ImageContainer.vue";
const images = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 7, 8];
</script>
<template>
  <div class="container grid grid-cols-3 gap-2 mx-auto">
    <div class="w-full rounded" v-for="image in images" :key="image">
      <ImageContainer :img="`photos/${image}.jpg`" />
    </div>
  </div>
</template>
