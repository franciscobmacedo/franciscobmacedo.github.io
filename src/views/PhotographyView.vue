<script setup>
import { computed } from "vue";

const images = computed(() => {
  return import.meta.glob("/src/assets/photos/*.jpg");
});
console.log(images.value);
</script>
<template>
  <div class="container grid grid-cols-3 gap-2 mx-auto">
    <div class="w-full rounded" v-for="image in images" :key="image.name">
      <img :src="image.name" />
    </div>
  </div>
</template>
