<template>
  <div class="flex fit justify-center q-mb-xl" style="height: 300px; width: 1000px">
    <q-splitter
      v-model="splitterModel"
      style="width: 1000px"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal items-center"
        >
          <q-tab name="presentation" label="Presentation" style="height: 100px"/>
          <q-tab name="savoir" label="Competences" style="height: 100px"/>
          <q-tab name="objectifs" label="Objectifs" style="height: 100px" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="presentation">
            <div class="text-h3 q-mb-md">Presentation</div>
            <p>🦆Codeuse Freelance qui donne vie à vos Projets dans la Tech🦆 </p>
            <p>Codeuse depuis 8 ans, j'ai pu travailler pour plusieurs entreprises dans différents domaines. </p>
            <p>D'un naturel curieux et passionné, j'aime découvrir de nouveaux projets et m'investir pour leur apporter un atout supplémentaire.</p>
            <p>Que ce soit pour améliorer l'existant ou développer de nouvelles fonctionnalités, je vous aiderais à mener vos projets à un niveau supérieur.</p>
          </q-tab-panel>

          <q-tab-panel name="savoir">
            <div class="text-h3 q-mb-md">Competences</div>
            <q-list>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Développeur Front-end</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>HTML - CSS</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Javascript</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>React | Vue.js</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-tab-panel>

          <q-tab-panel name="objectifs">
            <div class="text-h3 q-mb-md">Objectifs</div>
            <p>🦆 Je vous accompagne :</p>
            <p>- dans vos projets de développement web</p>
            <p>- dans la création ou l'amélioration de nouvelles fonctionnalités pour vos projets</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('presentation')
const splitterModel = ref(20)
      
</script>
