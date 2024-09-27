import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const count = ref(0);
  const title = ref("Nuxt App");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, title, doubleCount, increment };
});
