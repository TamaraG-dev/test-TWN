<template>
  <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img
         src="../assets/photo-montagne.jpg"
         :ratio="16/9"
         />
      </template>

      <h1 class="text-white"> Lac et montagne ♡</h1>
    </q-parallax>
  </div>
</template>