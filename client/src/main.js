import './assets/main.css'
import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueHtml2pdf from 'vue-html2pdf';


const vfm = createVfm()
const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(Vue3FormWizard);
app.use(VueHtml2pdf);
app.use(vfm);
app.mount('#app')
