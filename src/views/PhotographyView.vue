<script setup>
import { computed } from "vue";

const images = computed(() => {
  return [
    new URL("../assets/photos/10.jpg", import.meta.url),
    new URL("../assets/photos/11.jpg", import.meta.url),
    new URL("../assets/photos/12.jpg", import.meta.url),
    new URL("../assets/photos/13.jpg", import.meta.url),
    new URL("../assets/photos/14.jpg", import.meta.url),
    new URL("../assets/photos/15.jpg", import.meta.url),
    new URL("../assets/photos/16.jpg", import.meta.url),
    new URL("../assets/photos/17.jpg", import.meta.url),
    new URL("../assets/photos/18.jpg", import.meta.url),
    new URL("../assets/photos/19.jpg", import.meta.url),
    new URL("../assets/photos/2.jpg", import.meta.url),
    new URL("../assets/photos/7.jpg", import.meta.url),
    new URL("../assets/photos/8.jpg", import.meta.url),
  ];
});
</script>
<template>
  <div class="container grid grid-cols-3 gap-2 mx-auto">
    <div class="w-full rounded" v-for="image in images" :key="image">
      <img :src="image" />
    </div>
  </div>
</template>
