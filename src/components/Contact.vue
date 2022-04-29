<template>
  <div v-if="!loading" class="q-pa-md flex fit justify-center text-center q-my-xl">
    <q-table
      class="my-sticky-header-column-table"
      title="Contacts"
      :rows="rows"
      :columns="columns"
      title-class="text-h4 text-italic"
      hide-header
    />
  </div>
  <div class="q-pa-xl q-mb-xl flex fit justify-center">
    <div class="q-gutter-md row items-center">
      <q-input rounded outlined v-model="Name" label="Name" />
      <q-input rounded outlined v-model="Phone" label="Phone" />
      <q-input rounded outlined v-model="email" label="Email" />
      <q-btn color="secondary" @click="addContact()">
        Add<br>contact
      </q-btn>
      <q-btn color="warning" @click="deleteContact()">
        Delete<br>last
      </q-btn>
    </div>
  </div>


</template>

<script setup>
  import { ref } from 'vue'
  import { useQuery, useResult, useMutation } from '@vue/apollo-composable'
  import gql from 'graphql-tag'

  const Name = ref('')
  const Phone = ref('')
  const email = ref('')


  const columns = [
    { name: 'Name', align: 'center', label: 'Name', field: 'Name', sortable: true },
    { name: 'Phone', align: 'center', label: 'Phone', field: 'Phone', sortable: true },
    { name: 'email', align: 'center', label: 'email', field: 'email', sortable: true },
  ]

  const { result, loading } = useQuery(gql`
    query MyQuery {
      TestTable {
        Name
        Phone
        email
        id
        }
      }`)

  const rows = useResult(result, null, data => data.TestTable)

  /*function onDone() {
    newMessage.value = 'onDone'
  })*/

  function addContact() {
    const { mutate: sendContact, loading } = useMutation(gql`
      mutation sendContact {
        insert_TestTable_one(object: {Name: $Name, Phone: $Phone, email: $email}, on_conflict: {constraint: TestTable_pkey, where: {id: {}}}) {
          id
        }
      }`)
      console.log(loading)
  }
  console.log(rows)

 
  function deleteContact() {
    if(rows.value.length > 1) {
      console.log("delete contact")
      const lastId = rows.value[rows.value.length - 1].id

      const { mutate } = useMutation(gql`
        mutation MyMutation {
          delete_TestTable_by_pk(id: $lastId) {
            id
          }
        }`)
    } 

  }
</script>
