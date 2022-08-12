<script setup>
import { useLanguageStore } from "../stores/language";
import Badge from "../components/Badge.vue";
import { computed } from "vue";
const language = useLanguageStore();

const props = defineProps({
  name: String,
  tech: Array,
  link: {
    type: String,
    default: null,
  },
  img: {
    type: String,
    default: null,
  },
  sourceCode: {
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
</script>
<template>
  <h1 class="font-semibold mt-10">{{ props.name }}</h1>
  <hr />
  <div class="flex">
    <div class="mb-5 grow" :class="img === null ? 'w-3/3' : 'w-1/3'">
      <div v-if="language.value === 'PT'">
        <slot name="descriptionPT" />
      </div>
      <div v-if="language.value === 'EN'">
        <slot name="descriptionEN" />
      </div>
      <div class="flex flex-row justify-between mt-2 items-start">
        <div class="flex flex-wrap justify-start">
          <a
            v-if="props.link !== null"
            :href="props.link"
            target="_blank"
            class="bg-primary-200 hover:bg-primary-500 text-white py-2 px-4 rounded mr-2"
          >
            <span v-if="language.value === 'PT'"> Visitar </span>
            <span v-if="language.value === 'EN'"> Visit </span>
          </a>
          <a
            v-if="props.sourceCode !== null"
            :href="props.sourceCode"
            target="_blank"
          >
            <img src="../assets/github.png" class="w-10" />
          </a>
        </div>

        <div class="flex flex-wrap justify-end">
          <Badge
            class="mb-1"
            v-for="tech in props.tech"
            :key="tech.name"
            :content="tech.name"
            :type="tech.type"
          />
        </div>
      </div>
    </div>
    <div class="w-2/3 p-2 rounded" v-if="img !== null">
      <a :href="props.link" target="_blank">
        <img :src="imgSrc" />
      </a>
    </div>
  </div>
</template>
