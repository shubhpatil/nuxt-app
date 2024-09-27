<script setup lang="ts">
import { useAppStore } from "@/stores/appStore";

useHead({
  title: "Nuxt App",
  meta: [{ name: "description", content: "My amazing site." }],
});

definePageMeta({
  layout: "dashboard",
  middleware: [],
});

const store = useAppStore();
const config = useRuntimeConfig();

const { data } = await useLazyFetch("/api/user");
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold page-title text-primary dark:text-red-500">
      {{ store.title }}
      {{ config.public.secret }}
    </h1>
    <p>{{ data }}</p>
    <ButtonComponent />
  </div>
</template>

<style scoped>
.page-title {
  text-decoration: underline;
}
</style>
