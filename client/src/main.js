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


const messages = {
    en: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phoneNumber: "Phone number",
        website: "Your website",
        github: "Github",
        linkedin: "Linkedin",
        twitter: "Twitter",
        facebook: "Facebook",
        instagram: "Instagram",
        organization: "Work experience",
        organizationCompany: "Organization / Company",
        organizationName: "Company name",
        organizationTitle: "Title of position",
        removeExperience: "Remove experience",
        duration: "Duration",
        description: "Description",
        addExperience: "Add experience",
        school: "School / College / University Name",
        from: "From",
        to: "To",
        educationTitle: "Title",
        addEducation: "Add education",
        language: 'Select language',
        projectTitle: "Project title",
        projectLink: "Project link",
        projectDescription: "Project description",
        removeProject: "Remove project",
        removeEducation: "Remove education",
        modal: {
            selectLanguage: "Select language"
        },
        addProject: "Add project",
        personalInformation: "Personal Information",
        workExperience: "Work Experience",
        education: "Education",
        generatePDF: "Generate PDF",
        projects: "Projects",
        confirm: "Confirm Language Change",
        wizardPersonalDetails: "Personal details",
        wizardEducation: "Education",
        wizardProjects: "Projects",
        wizardExperience: "Experience",
        wizardPDF: "Download PDF",
        wizardDOC: "Generate DOC - You can edit DOC the file in Word",
        previous: "Previous",
        next: "Next",
    },
    rs: {
        firstName: 'Ime',
        lastName: 'Prezime',
        email: 'E-pošta',
        phoneNumber: 'Broj telefona',
        website: 'Vaš veb sajt',
        github: 'Github',
        linkedin: 'Linkedin',
        twitter: 'Twitter',
        facebook: 'Facebook',
        instagram: 'Instagram',
        organization: 'Radno iskustvo',
        organizationName: 'Naziv kompanije',
        organizationCompany: 'Organizacija / Kompanija',
        organizationTitle: 'Ime radne pozicije.. (Programer, Ekonomista..)',
        removeExperience: "Izbrisi ovu organizaciju / kompaniju",
        duration: 'Trajanje (od-do)',
        description: 'Opis',
        addExperience: 'Dodaj iskustvo',
        school: "Škola / Fakultet",
        removeEducation: "Izbrisi ovu Školu / Fakultet",
        from: "Od",
        to: "Do",
        language: "Izaberi jezik",
        educationTitle: "Zvanje / Titula",
        projectTitle: "Ime projekta",
        projectLink: "Link",
        projectDescription: "Opis projekta",
        addProject: "Dodaj projekat",
        removeProject: "Izbrisi ovaj projekat",
        projects: "Projekti",
        confirm: "Potvrdi promenu jezika",
        modal: {
            selectLanguage: "Izaberi jezik"
        },
        addEducation: 'Dodaj edukaciju',
        personalInformation: "Lične informacije",
        workExperience: "Radno iskustvo",
        education: "Obrazovanje",
        generatePDF: "Preuzmi PDF fajl",
        wizardPersonalDetails: "Lične informacije",
        wizardEducation: "Obrazovanje",
        wizardProjects: "Projekti",
        wizardExperience: "Radno iskustvo",
        wizardPDF: "Preuzmi PDF fajl",
        wizardDOC: "Preuzmi DOC fajl - Mozes editovati ovaj fajl u Wordu",
        previous: "Prethodni korak",
        next: "Sledeći korak",
    },
};

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
