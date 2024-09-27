<script setup>
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <UButton
    icon="i-heroicons-currency-rupee"
    size="sm"
    color="primary"
    variant="outline"
    :trailing="false"
    @click="increment"
    >Count is: {{ count }}
  </UButton>
</template>
