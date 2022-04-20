<template>
  <div class="q-pa-md flex fit justify-center text-center q-my-xl">
    <q-table
      class="my-sticky-header-column-table"
      title="Contact"
      :rows="rows"
      :columns="columns"
      row-key="name"
      title-class="text-h4 text-italic"
      hide-header
      hide-bottom
    />
  </div>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Moyen',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'info', align: 'center', label: 'Info', field: 'info', sortable: true },
]

const rows = [
  {
    name: 'email',
    info: "tamarag.dev@gmail.com",
  },
  {
    name: 'Téléphone',
    info: "06 83 29 68 63",
  },
  {
    name: 'Adresse',
    info: "Gap",
  },
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
