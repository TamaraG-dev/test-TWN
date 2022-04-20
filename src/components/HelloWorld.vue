<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1 >{{ msg }}</h1>

  <p class="q-mb-xl">
    <a href="https://www.linkedin.com/in/tamara-guilbert-developpeur-front-end" target="_blank" class="text-bold text-h5">Mon LinkedIn</a>
  </p>

</template>

<style scoped>
h1,a {
  color: #428089;
}
</style>
