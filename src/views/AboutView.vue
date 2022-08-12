<script setup>
import { useLanguageStore } from "../stores/language";
const language = useLanguageStore();
const socialItems = [
  {
    name: "franciscovcbm@gmail.com",
    url: "mailto:franciscovcbm@gmail.com",
  },
  {
    url: "https://github.com/franciscobmacedo",
    name: "github",
  },
  {
    url: "https://www.linkedin.com/in/franciscodemacedo/",
    name: "linkedin",
  },
];
</script>

<template>
  <div class="text-center text-2xl">
    <i><b>Francisco Macedo</b></i>

    <span v-if="language.value === 'PT'">
      é engenheiro de software e músico. <br />
      Atualmente vive em Londres.
    </span>
    <span v-if="language.value === 'EN'">
      is a software engineer and a musician based in London.
    </span>
  </div>
  <div class="flex justify-center align-middle">
    <img src="/src/assets/FranciscoMacedo.jpg" class="md:w-1/3 md:h-1/3" />
  </div>
  <div class="flex justify-center">
    <div
      v-for="(item, index) of socialItems"
      :key="item.name"
      class="flex align-text-bottom mt-3"
    >
      <a
        class="flex text-gray-600 hover:text-gray-900"
        :href="item.url"
        target="_blank"
      >
        <img
          v-if="item.icon"
          :src="`src/assets/${item.icon}`"
          class="w-6 mr-2"
        />
        <span> {{ item.name }}</span>
      </a>
      <span v-if="index != socialItems.length - 1" class="mx-2 text-gray-600"
        >|</span
      >
    </div>
  </div>
</template>
