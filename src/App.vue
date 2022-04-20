<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Contact from './components/Contact.vue'
import ImageMontagne from './components/ImageMontagne.vue'
import PresTabs from './components/PresTabs.vue'


</script>

<template>
  <HelloWorld msg="Bonjour" />
  <PresTabs />
  <ImageMontagne />
  <Contact />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
