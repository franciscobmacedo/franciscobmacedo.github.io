<script setup>
import { computed } from "vue";
import theme from "tailwindcss/defaultTheme";
const breakpoints = computed(() => theme.screens);
const innerWidth = computed(() => window.innerWidth);

const smallBreakpoint = computed(() =>
  parseInt(breakpoints.value.sm.split("px")[0])
);
</script>
<template>
  <svg
    :viewBox="innerWidth > smallBreakpoint ? null : '0 0 30 30'"
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 md:w-6 md:h-8 fill-secondary"
  >
    <rect width="6" height="64" />
    <rect x="12" width="6" height="64" />
  </svg>
</template>
