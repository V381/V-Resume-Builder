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
import { createI18n } from 'vue-i18n'
import messages from '@/i18n/translations.json';


const datetimeFormats = {
    'en-US': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        }
    },
    'rs': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
        }
    }
};



const i18n = createI18n({
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'rs',
    legacy: false,
    messages,
    datetimeFormats
})

const changeLocale = (newLocale) => {
    i18n.global.locale.value = newLocale;
  };
  
const vfm = createVfm()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3FormWizard);
app.use(VueHtml2pdf);
app.use(vfm);
app.use(i18n)
app.mount('#app')

export { i18n, changeLocale };
