<script setup>
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

defineProps({
  msg: String
})


const { result, loading } = useQuery(gql`
  query MyQuery {
    TestTable_by_pk(id: "6f024ea6-05dc-4476-a07e-1bd40cad43a6") {
      Name
    }
  }`)

const count = ref(0)
</script>

<template>
  <h1 >{{ msg }}</h1>

  <p class="q-mb-xl">
    <a href="https://www.linkedin.com/in/tamara-guilbert-developpeur-front-end" target="_blank" class="text-bold text-h5">Mon LinkedIn</a>
    <div v-if="!loading">{{ result}}</div>
  </p>

</template>

<style scoped>
h1,a {
  color: #428089;
}
</style>
