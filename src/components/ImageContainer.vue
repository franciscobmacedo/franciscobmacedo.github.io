<script setup>
import { computed, defineProps, ref } from "vue";
const props = defineProps({
  img: {
    type: String,
  },
  height: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const imgSrc = computed(() => {
  console.log(props.img);
  if (props.img) {
    return new URL(`../assets/${props.img}`, import.meta.url);
  }
  return null;
});

const imageLoaded = ref(false);
const onImgLoad = () => {
  console.log("loaded");
  imageLoaded.value = true;
};
</script>
<template>
  <div
    class="bg-gray-300 rounded-md w-full animate-pulse"
    :class="[props.height === null ? 'min-h-[7em]' : `min-h-[${props.height}]`]"
    v-if="!imageLoaded"
  ></div>
  <img :src="imgSrc" @load="onImgLoad" :class="props.class" />
</template>
