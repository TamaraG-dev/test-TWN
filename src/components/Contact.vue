<template>
  <div v-if="!loading" class="q-pa-md flex fit justify-center text-center q-my-xl">
    <q-table class="my-sticky-header-column-table" title="Contacts" :rows="rows" :columns="columns"
      title-class="text-h4 text-italic" hide-header />
  </div>
  <div class="q-pa-xl q-mb-xl flex fit justify-center">
    <div class="q-gutter-md row items-center">
      <q-input rounded outlined v-model="Name" label="Name" />
      <q-input rounded outlined v-model="Phone" label="Phone" />
      <q-input rounded outlined v-model="email" label="Email" />
      <q-btn color="secondary" @click="sendContact()">
        Add<br>contact
      </q-btn>
      <q-btn color="warning" @click="deleteContact()">
        Delete<br>last
      </q-btn>
      <q-btn color="warning" @click="refetch()">
        refetch
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

const { result, loading, refetch } = useQuery(gql`
    query MyQuery {
      TestTable {
        Name
        Phone
        email
        id
        }
      }`)

const rows = useResult(result, null, data => data.TestTable)

//        >>>>> Explications <<<<< 
// 
// La syntaxe : const { mutate: sendContact } 
// te permet de pouvoir appeler ta mutation comme une fonction
// Donc pas besoin de l'encapsuler dans une fonction
// 
// Il faut que tu déclare en paramètres de ta mutation les paramètres qu'elles doit recevoir (Nom + Type)
// et ensuite, useMutation recois en argument ta requete, et les paramètres qui doivent être passer a la requete 
// useMutation(document (correspond a ta requete), options (ou tu retrouves "variables"))
// cf :  https://v4.apollo.vuejs.org/api/use-mutation.html#parameters
// ce qui donne : 

const { mutate: sendContact, onDone } = useMutation(gql`
  mutation INSERT_ONE_USER ($Name: String, $Phone: numeric, $email: String) { 
    insert_TestTable_one(object: {Name: $Name, Phone: $Phone, email: $email}) {
      id
    }
  }`, () => ({
    variables: {
      Name: Name.value,
      Phone: Phone.value,
      email: email.value
    }
  }
  )
)

function deleteContact() {
  if (rows.value.length > 1) {
    console.log("delete contact")
    const lastId = rows.value[rows.value.length - 1].id

    deleteId({
      id: lastId,
    })
  }
}

const { mutate: deleteId } = useMutation(gql`
    mutation INSERT_ONE_USER ($id: uuid!) { 
      delete_TestTable_by_pk(id: $id) {
        id
      }
    }`
  )

onDone(() => {
  refetch()
})


</script>