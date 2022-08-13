<template>
  <div class="flex justify-between mt-10 align-end">
    <div class="font-semibold">{{ props.name }}</div>
    <div class="flex justify-between lg:justify-end flex-row">
      <ButtonWithTooltip
        v-for="social in props.socialLinks"
        :key="social.description"
        :src="social.src"
        :description="social.description"
        :image="social.image"
        position="top"
      />
    </div>
  </div>
  <div class="flex flex-col sm:flex-row lg:justify-between z-50">
    <div class="w-full sm:w-1/2 lg:w-1/5 xl:w-2/5">
      <div
        v-for="song in props.songs"
        :key="song.id"
        @click="chooseSong(song.id)"
        class="cursor-pointer text-gray-600 hover:text-gray-900 py-2"
        :class="{
          'text-gray-900 underline decoration-primary-500':
            song.id === props.songPlayingID,
        }"
      >
        {{ song.name }}
      </div>
    </div>

    <div
      class="w-full sm:w-1/2 lg:w-4/5 xl:w-3/5 text-xs flex flex-col lg:flex-row align-middle justify-center"
    >
      <div v-if="language.value === 'PT'">
        <slot name="descriptionPT" />
      </div>
      <div v-if="language.value === 'EN'">
        <slot name="descriptionEN" />
      </div>
      <ImageContainer :img="props.image" :class="'lg:w-3/5 lg:h-3/5'" />
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from "../stores/language";
import ButtonWithTooltip from "../components/ButtonWithTooltip.vue";
import ImageContainer from "./ImageContainer.vue";

const props = defineProps({
  name: String,
  socialLinks: Array,
  songs: Array,
  songPlayingID: Number,
  image: String,
});
const emit = defineEmits(["chooseSong"]);
const chooseSong = (id) => {
  emit("chooseSong", id);
};
const language = useLanguageStore();
</script>
