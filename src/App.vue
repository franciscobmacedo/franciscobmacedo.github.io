<template>
  <button
    aria-expanded="true"
    aria-controls="sidebar"
    class="lg:hidden text-gray-600 hover:text-gray-900 cursor-pointer rounded-full absolute top-2 right-2"
    @click="toggleSidebar"
  >
    <HamburgerButton />
  </button>
  <div class="flex z-100">
    <div
      class="lg:sticky lg:block lg:top-0 flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto lg:w-auto lg:bg-inherit"
      :class="[isOpen ? ['fixed bg-stone-200 z-40 w-full'] : 'hidden']"
    >
      <button
        class="lg:hidden text-gray-600 hover:text-gray-900 rounded-lg cursor-pointer absolute top-2 right-2"
        @click="toggleSidebar"
      >
        <CancelButton />
      </button>
      <div class="text-center">
        <LanguageSelector />
      </div>
      <h2 class="text-3xl font-semibold text-center text-primary-500-900">
        Francisco Macedo
      </h2>

      <div class="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li v-for="page in pages" :key="page.text">
              <RouterLink
                class="flex items-center px-4 py-2 text-gray-700 rounded-full z-100"
                :to="page.path"
                active-class="text-primary-500"
                @click="toggleSidebar"
              >
                <span class="mx-4 font-medium">{{ page.text }} </span>
              </RouterLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>

    <div class="w-full h-full p-1 mt-6 lg:p-4 lg:m-8">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import HamburgerButton from "./components/icons/HamburgerButton.vue";
import CancelButton from "./components/Icons/CancelButton.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import { useLanguageStore } from "./stores/language";
const language = useLanguageStore();

// import RainFall from "@/components/RainFall.vue";
const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
const pages = computed(() => [
  {
    text: language.value === "PT" ? "Música" : "Music",
    path: "/music",
  },

  {
    text: language.value === "PT" ? "Programação" : "Software",
    path: "/software",
  },
  {
    text: language.value === "PT" ? "Fotografia" : "Photography",
    path: "/photography",
  },
  {
    text: language.value === "PT" ? "Sobre" : "About",
    path: "/about",
  },
]);
</script>
<style>
html {
  background: #fff;
}
</style>
