import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config"
import Button from "primevue/button"
import InputText from "primevue/inputtext"

const app = createApp(App)

// realiza config de uma nova lib
app.use(PrimeVue)
app.component("Button", Button);
app.component("InputText", InputText);

// não adianta adicionar novas libs após o mount
app.mount('#app')
