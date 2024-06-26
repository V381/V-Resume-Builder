<template>
  <form-wizard>
    <tab-content v-for="tab in tabContents" :key="tab.title" :title="$t(tab.title)">
      <component :is="tab.component" v-if="tab.component" />
      <div v-else-if="tab.type === 'pdf'" slot="pdf-content" id="pdf-content">
        <h2><strong>{{ $t('firstName') }}:</strong> {{ form.firstName }} <br><strong>{{ $t('lastName') }}:</strong> {{ form.lastName }}</h2>
            <hr/>
            <h2>{{ $t('personalInformation') }}</h2>
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
            <template v-if="experienceStore.getItems().length !== 0">
            <h2>{{ $t('workExperience') }}</h2>
            <ul>
                <li v-for="(experience, index) in experienceStore.getItems()" :key="index">
                    <strong>{{ $t('organizationCompany') }}:</strong> {{ experience.organization }}<br>
                    <strong>{{ $t('organizationTitle') }}:</strong> {{ experience.title }}<br>
                    <strong>{{ $t('duration') }}:</strong> {{ experience.duration }}<br>
                    <strong>{{ $t('description') }}:</strong> {{ experience.description }}<br>
                </li>
              </ul>
            </template>
            <hr/>
            <template v-if="educationStore.getItems().length !== 0">
            <h2>{{ $t('education') }}</h2>
            <ul>
              <template v-for="(education, index) in educationStore.getItems()" :key="index">
              <li v-if="education.name && education.from && education.to && education.qualification">
                <strong>{{ $t('school') }}:</strong> {{ education.name }}<br>
                <strong>{{ $t('from') }}:</strong> {{ education.from }}<br>
                <strong>{{ $t('to') }}:</strong> {{ education.to }}<br>
                <strong>{{ $t('educationTitle') }}:</strong> {{ education.qualification }}<br>
              </li>
            </template>
            </ul>
            </template>
            <hr/>

            <template  v-if="projectStore.getItems().length !== 0">
              <h2>{{ $t('projects') }}</h2>
              <ul>
              <li v-for="(project, index) in projectStore.getItems()" :key="index">
                  <strong>{{ $t('projectTitle') }}:</strong> {{ project.title }}<br>
                  <strong>{{ $t('projectLink') }}:</strong> {{ project.link }}<br>
                  <strong>{{ $t('projectDescription') }}:</strong> {{ project.description }}<br>
              </li>
              </ul>
            </template>
          </div>
          <div class="container-center" v-if="tab.type === 'pdf'">
            <button class="generate-pdf" @click="generatePDF">{{ $t('generatePDF') }}</button>
            <button class="generate-pdf" @click="generateDOC">{{ $t('wizardDOC') }}</button>
        </div>
    </tab-content>
    <template v-slot:footer="props">
      <div class="wizard-footer-left">
        <button
          v-if="props.activeTabIndex > 0"
          @click.native="props.prevTab()"
          class="wizard-button"
        >
        {{ $t('previous') }}
        </button>
      </div>
      <div class="wizard-footer-right">
        <button
          v-if="!props.isLastStep"
          @click.native="props.nextTab()"
          class="wizard-button"
        >
        {{ $t('next') }}
        </button>

        <button
          v-else
          @click.native="confirmMethod"
          class="finish-button"
        >
          {{ props.isLastStep ? "Done" : "Next" }}
        </button>
      </div>
    </template>
  </form-wizard>
  </template>

<script>
import { useI18n } from 'vue-i18n';
import Vue3Html2pdf from 'vue3-html2pdf';
import { ref, onMounted, computed, reactive, markRaw } from 'vue';
import { useFormStore } from '@/stores/FormStore';
import { useEducationStore, useProjectStore, useExperienceStore } from '@/stores/storeTemplate';
import Form from '@/components/features/Form.vue';
import EducationInputs from '@/components/education/EducationInputs.vue';
import ProjectsInputs from '@/components/projects/ProjectsInputs.vue';
import ExperienceInputs from '@/components/experience/ExperienceInputs.vue';
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
    const educationStore = useEducationStore();
    const projectStore = useProjectStore();
    const experienceStore = useExperienceStore();

    const html2PdfRef = ref(null);
    const { t } = useI18n();

    const getTranslated = (key) => t(key);

    const tabContents = ref([
      { title: 'wizardPersonalDetails', component: markRaw(Form) },
      { title: 'wizardExperience', component: markRaw(ExperienceInputs) },
      { title: 'wizardEducation', component: markRaw(EducationInputs) },
      { title: 'wizardProjects', component: markRaw(ProjectsInputs) },
      { title: 'wizardPDF', component: null, type: 'pdf' },
    ]);

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

    const generateDOC = async () => {
      const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
          "xmlns:w='urn:schemas-microsoft-com:office:word' " +
          "xmlns='http://www.w3.org/TR/REC-html40'>" +
          "<head><meta charset='utf-8'><title>Resume</title></head><body>";
      const footer = "</body></html>";
      const sourceHTML = header + document.getElementById("pdf-content").innerHTML + footer;
      const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      const fileDownload = document.createElement("a");
      fileDownload.href = source;
      fileDownload.download = 'resume.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
    };
    return {
      form,
      generatePDF,
      educationStore,
      projectStore,
      experienceStore,
      html2PdfRef,
      getTranslated,
      generateDOC,
      tabContents,
      t
    };
  },
};
</script>



<style>
.wizard-icon-container,
.wizard-progress-bar,
.wizard-btn,
button {
  background-color: var(--wizard-primary-color) !important;
}

.wizard-progress-bar,
.wizard-btn {
  color: var(--wizard-primary-color) !important;
  border-color: var(--wizard-secondary-color) !important;
}

.wizard-icon-circle.md.checked {
  background-color: var(--wizard-secondary-color);
  color: var(--wizard-text-color) !important;
  border: 2px solid var(--wizard-highlight-color) !important;
}

button,
strong {
  font-weight: bold;
}

.stepTitle {
  color: var(--wizard-text-color);
}

#pdf-content {
  color: var(--wizard-secondary-color);
  background-color: var(--wizard-text-color);
}

button {
  padding: var(--wizard-padding-standard);
  margin-top: var(--wizard-margin-top);
  color: white;
  width: auto;
}

button:hover {
  cursor: pointer;
}

.container-center {
  width: 100%;
  display: flex;
  justify-content: center;
}

#pdf-content h2 {
  margin-left: var(--wizard-padding-standard);
  padding-top: var(--wizard-padding-standard);
  font-style: italic;
  font-weight: bold;
}

#pdf-content ul {
  margin-bottom: var(--wizard-margin-top);
}

.center {
  text-align: center;
}

.wizard-card-footer .wizard-footer-left .wizard-button,
.wizard-card-footer .wizard-footer-right .wizard-button {
  padding: 10px;
  border-radius: var(--wizard-border-radius);
  cursor: pointer;
  background-color: lighgreen;
}

.wizard-card-footer .wizard-footer-right .finish-button {
  display: none;
}
</style>