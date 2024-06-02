import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vuetify
import vuetify from '/src/vuetify'
app.use(vuetify)

// Vue Router
import { router } from '/src/router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount('#app')