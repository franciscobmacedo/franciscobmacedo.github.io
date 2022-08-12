<template>
  <div class="relative w-12 sm:w-24 text-center">
    <button
      @click="openPage"
      @mouseenter="toggleTooltip"
      @mouseleave="toggleTooltip"
    >
      <img :src="imgSrc" class="object-cover w-6" />
    </button>
    <div
      class="absolute w-full text-xs z-50"
      :class="tooltipClass"
      v-if="showTooltip"
    >
      {{ description }}
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  description: String,
  image: String,
  src: {
    type: String,
    default: null,
  },
  position: {
    type: String,
    default: "bottom",
  },
});
const showTooltip = ref(false);

const toggleTooltip = () => {
  showTooltip.value = !showTooltip.value;
};

const openPage = () => {
  window.open(props.src, "_blank");
};

const tooltipClass = computed(() => {
  switch (props.position) {
    case "bottom":
      return "bottom-[-25px] left-0";
    case "right":
      return "left-16 top-2";
    default:
      return "top-[-25px] left-0";
  }
});

const imgSrc = computed(() => {
  return new URL(`../assets/${props.image}`, import.meta.url);
});
</script>
