<template>
    <form-wizard>
        <tab-content title="Personal details">
           <Form />
        </tab-content>
        <tab-content title="Education">
            <EducationInputs />
        </tab-content>
        <tab-content title="Projects">
            <ProjectsInputs />
        </tab-content>
        <tab-content title="Experience">
            <ExperienceInputs />
        </tab-content>
        <tab-content title="Download PDF">
        <div slot="pdf-content" id="pdf-content">
            <h2><strong>First Name:</strong> {{ form.firstName }} <strong>Last Name:</strong> {{ form.lastName }}</h2>
            <hr/>
            <h2 class="center">Personal Information</h2>
            <ul>
                <li><strong>Email:</strong> {{ form.email }}</li>
                <li><strong>Phone Number:</strong> {{ form.phoneNumber }}</li>
                <li><strong>Website:</strong> {{ form.website}}</li>
                <li><strong>Github:</strong> {{ form.github }}</li>
                <li><strong>Linkedin:</strong> {{ form.linkedin }}</li>
                <li><strong>Twitter:</strong> {{ form.twitter }}</li>
                <li><strong>Linkedin:</strong> {{ form.linkedin }}</li>
                <li><strong>Last Name:</strong> {{ form.facebook }}</li>
                <li><strong>Instagram:</strong> {{ form.instagram}}</li>
            </ul>

            <hr/>
            <h2>Education:</h2>
            <ul>
            <li v-for="(education, index) in educationStore.getEducations()" :key="index">
                <strong>School/College/University Name:</strong> {{ education.name }}<br>
                <strong>From:</strong> {{ education.from }}<br>
                <strong>To:</strong> {{ education.to }}<br>
                <strong>Qualification:</strong> {{ education.title }}<br>
            </li>
            </ul>
            
            <hr/>
            <h2>Projects:</h2>
            <ul>
            <li v-for="(project, index) in projectStore.getProjects()" :key="index">
                <strong>Title:</strong> {{ project.title }}<br>
                <strong>Link:</strong> {{ project.link }}<br>
                <strong>Description:</strong> {{ project.description }}<br>
            </li>
            </ul>

            <hr/>
            <h2>Experience:</h2>
            <ul>
            <li v-for="(experience, index) in experienceStore.getExperiences()" :key="index">
                <strong>Organization:</strong> {{ experience.organization }}<br>
                <strong>Title:</strong> {{ experience.title }}<br>
                <strong>Duration:</strong> {{ experience.duration }}<br>
                <strong>Description:</strong> {{ experience.description }}<br>
            </li>
            </ul>
        </div>
      <div class="container-center">
        <button class="generate-pdf" @click="generatePDF">Generate Pdf</button>
      </div>
    </tab-content>
</form-wizard>
</template>
<script>
import Vue3Html2pdf from 'vue3-html2pdf';
import { ref, onMounted } from 'vue';
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

    return {
      form,
      generatePDF,
      educationStore,
      projectStore,
      experienceStore,
      html2PdfRef,
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


</style>