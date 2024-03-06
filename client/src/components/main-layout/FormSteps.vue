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
            End
        </tab-content>
</form-wizard>
</template>
<script setup>

import Form from './Form.vue';
import EducationInputs from './EducationInputs.vue';
import ProjectsInputs from './ProjectsInputs.vue';
import ExperienceInputs from './ExperienceInputs.vue';
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

</style>