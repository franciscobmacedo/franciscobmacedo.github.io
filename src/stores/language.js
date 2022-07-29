import { defineStore } from "pinia";

export const useLanguageStore = defineStore({
  id: "language",
  state: () => ({
    value: "EN",
  }),
  actions: {
    changeLanguage(lang) {
      this.value = lang;
    },
  },
});
