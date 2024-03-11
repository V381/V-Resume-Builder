<template>
    <form-wizard>
        <tab-content  :title="getTranslated('wizardPersonalDetails')">
           <Form />
        </tab-content>
        <tab-content :title="getTranslated('wizardExperience')">
          <ExperienceInputs />
        </tab-content>
        <tab-content :title="getTranslated('wizardEducation')">
          <EducationInputs />
        </tab-content>
        <tab-content  :title="getTranslated('wizardProjects')">
          <ProjectsInputs />
        </tab-content>
        <tab-content :title="getTranslated('wizardPDF')">
        <div slot="pdf-content" id="pdf-content">
            <h2><strong>{{ $t('firstName') }}:</strong> {{ form.firstName }} <br><strong>{{ $t('lastName') }}:</strong> {{ form.lastName }}</h2>
            <hr/>
            <h2 class="center">{{ $t('personalInformation') }}</h2>
            <ul>
                <li v-if="form.email"><strong>{{ $t('email') }}:</strong> {{ form.email }}</li>
                <li v-if="form.phoneNumber"><strong>{{ $t('phoneNumber') }}:</strong> {{ form.phoneNumber }}</li>
                <li v-if="form.website"><strong>{{ $t('website') }}:</strong> {{ form.website}}</li>
                <li v-if="form.github"><strong>{{ $t('github') }}:</strong> {{ form.github }}</li>
                <li v-if="form.linkedin"><strong>{{ $t('linkedin') }}:</strong> {{ form.linkedin }}</li>
                <li v-if="form.twitter"><strong>{{ $t('twitter') }}:</strong> {{ form.twitter }}</li>
                <li v-if="form.facebook"><strong>{{ $t('facebook') }}:</strong> {{ form.facebook }}</li>
                <li v-if="form.instagram"><strong>{{ $t('instagram') }}:</strong> {{ form.instagram}}</li>
            </ul>
            <hr/>
            <h2>{{ $t('workExperience') }}</h2>
            <ul>
            <li v-for="(experience, index) in experienceStore.getExperiences()" :key="index">
                <strong>{{ $t('organizationCompany') }}:</strong> {{ experience.organization }}<br>
                <strong>{{ $t('organizationTitle') }}:</strong> {{ experience.title }}<br>
                <strong>{{ $t('duration') }}:</strong> {{ experience.duration }}<br>
                <strong>{{ $t('description') }}:</strong> {{ experience.description }}<br>
            </li>
            </ul>
            <hr/>
            <h2>{{ $t('education') }}</h2>
            <ul>
              <template v-for="(education, index) in educationStore.getEducations()" :key="index">
              <li v-if="education.name && education.from && education.to && education.qualification">
                <strong>{{ $t('school') }}:</strong> {{ education.name }}<br>
                <strong>{{ $t('from') }}:</strong> {{ education.from }}<br>
                <strong>{{ $t('to') }}:</strong> {{ education.to }}<br>
                <strong>{{ $t('educationTitle') }}:</strong> {{ education.qualification }}<br>
              </li>
            </template>
            </ul>
            
            <hr/>

            <h2>{{ $t('projects') }}</h2>
            <ul>
            <li v-for="(project, index) in projectStore.getProjects()" :key="index">
                <strong>{{ $t('projectTitle') }}:</strong> {{ project.title }}<br>
                <strong>{{ $t('projectLink') }}:</strong> {{ project.link }}<br>
                <strong>{{ $t('projectDescription') }}:</strong> {{ project.description }}<br>
            </li>
            </ul>
        </div>
      <div class="container-center">
        <button class="generate-pdf" @click="generatePDF">{{ $t('generatePDF') }}</button>
      </div>
    </tab-content>
</form-wizard>
</template>
<script>
import { useI18n } from 'vue-i18n';
import Vue3Html2pdf from 'vue3-html2pdf';
import { ref, onMounted, computed } from 'vue';
import { useFormStore } from '../../stores/FormStore';
import { usedEducationStore } from '../../stores/EducationStore';
import { useProjectStore } from '../../stores/ProjectFormStore';
import { useExperienceStore } from '../../stores/ExperienceStore';
import Form from './Form.vue';
import EducationInputs from './EducationInputs.vue';
import ProjectsInputs from './ProjectsInputs.vue';
import ExperienceInputs from './ExperienceInputs.vue';
import html2pdf from 'html2pdf.js';


export default {
  components: {
    Form,
    EducationInputs,
    ProjectsInputs,
    ExperienceInputs,
    Vue3Html2pdf,
  },
  setup() {
    const form = useFormStore();
    const educationStore = usedEducationStore();
    const projectStore = useProjectStore();
    const experienceStore = useExperienceStore();

    const html2PdfRef = ref(null);
    const { t } = useI18n();

    const getTranslated = (key) => t(key);

    onMounted(() => {
      html2PdfRef.value = ref('html2Pdf');
    });

    const generatePDF = async () => {
      try {
        const htmlToPdfOptions = {
          margin: 0,
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          enableLinks: false,
          html2canvas: { scale: 1, useCORS: true },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        };

        const elementToPrint = document.getElementById('pdf-content');

        await html2pdf(elementToPrint, htmlToPdfOptions).outputPdf().then((pdf) => {
          const totalPages = pdf.internal.getNumberOfPages();

          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor('black');
            pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.getWidth() * 0.88, pdf.internal.pageSize.getHeight() - 0.3);
          }

          pdf.toContainer().save('resume.pdf');
        });
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    };

    const isFormEmpty = computed(() => {
      return (
        !form.firstName ||
        !form.lastName ||
        !form.email ||
        !form.phoneNumber ||
        !form.website ||
        !form.github ||
        !form.linkedin ||
        !form.twitter ||
        !form.facebook ||
        !form.instagram ||
        educationStore.getEducations().some(education => !education.name || !education.from || !education.to || !education.qualification) ||
        projectStore.getProjects().some(project => !project.title || !project.link || !project.description) ||
        experienceStore.getExperiences().some(experience => !experience.organization || !experience.title || !experience.duration || !experience.description)
      );
    });

    return {
      form,
      generatePDF,
      educationStore,
      projectStore,
      experienceStore,
      html2PdfRef,
      isFormEmpty,
      getTranslated
    };
  },
};
</script>



<style>
.wizard-icon-container {
    background-color: #181818 !important;
}
.wizard-progress-bar {
    background-color: hsla(160, 100%, 37%, 1) !important;
    color: hsla(160, 100%, 37%, 1) !important;
}

.wizard-btn {
    background-color: hsla(160, 100%, 37%, 1) !important;
    border: inherit;
    border-color: black  !important;;
}

.wizard-icon-circle.md.checked {
  background-color: black; 
  color: white !important; 
  border: 2px solid green !important;
}

.stepTitle {
    color: white !important;
}
.container {
    color: red;
}
button {
  background-color: hsla(160, 100%, 37%, 1);
  padding: 1rem;
  color: white;
  margin-top: 1rem;
  width: 50%;
}

button:hover {
    cursor: pointer;
}

.container-center {
    width: 100%;
    display: flex;
    justify-content: center;
}

#pdf-content {
    color:black;
    background-color: white;
}

#pdf-content h2 {
    text-align: center;
    padding-top: 1rem;
    font-style: italic;
    font-weight: bold;
}

#pdf-content ul {
    margin-bottom: 1rem;
}

.center {
    text-align: center;
}

strong {
  font-weight: bold;
}

</style>