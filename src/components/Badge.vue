<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  content: String,
});

const className = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-green-100 text-green-800  dark:bg-green-200 dark:text-green-900";
    case "danger":
      return "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900";
    case "warning":
      return "bg-yellow-100 text-yellow-800  dark:bg-yellow-200 dark:text-yellow-900";
    case "info":
      return "bg-indigo-100 text-indigo-800  dark:bg-indigo-200 dark:text-indigo-900";
    case "dark":
      return "bg-gray-100 text-gray-800  dark:bg-gray-700 dark:text-gray-300";
    case "purple":
      return "bg-purple-100 text-purple-800  dark:bg-purple-200 dark:text-purple-900";
    case "pink":
      return "bg-pink-100 text-pink-800  dark:bg-pink-200 dark:text-pink-900";
    default:
      return "bg-blue-100 text-blue-800  dark:bg-blue-200 dark:text-blue-800";
  }
});
</script>
<template>
  <span
    :class="className"
    class="text-xs font-medium mr-2 px-2.5 py-2 rounded-xl"
    >{{ content }}</span
  >
</template>
