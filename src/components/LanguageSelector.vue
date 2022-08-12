<script setup>
import { useLanguageStore } from "../stores/language";

const language = useLanguageStore();
</script>
<template>
  <span class="text-xs">
    <span
      @click="language.changeLanguage('EN')"
      class="cursor-pointer"
      :class="language.value === 'EN' && 'text-primary-500'"
      >EN</span
    >
    |
    <span
      @click="language.changeLanguage('PT')"
      class="cursor-pointer"
      :class="language.value === 'PT' && 'text-primary-500'"
      >PT</span
    >
  </span>
</template>
