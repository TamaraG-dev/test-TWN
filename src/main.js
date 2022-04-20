import { createApp, provide, h } from 'vue'
import { Quasar } from 'quasar'
import { apolloClient } from '@/apollo-client'
import { DefaultApolloClient } from '@vue/apollo-composable'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

app.mount('#app')
