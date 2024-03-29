<template>
  <div>
    <form v-if="formType === 'experience'" v-for="(experience, index) in items" :key="experience.id" @submit.prevent>
      <p class="organization-title">{{ $t('organization', { index: index + 1 }) }}</p>
      <CustomLabel
        :inputId="`organization-${index}`"
        :labelText="$t('organizationCompany')"
        :errorMessage="organizationError">
        <Input
          :id="`organization-${index}`"
          v-model="experience.organization"
          :placeholder="$t('organizationCompany')" />
      </CustomLabel>

      <CustomLabel
        :inputId="`title-${index}`"
        :labelText="$t('organizationTitle')"
        :errorMessage="titleError">
        <Input
          :id="`title-${index}`"
          v-model="experience.title"
          :placeholder="$t('organizationTitle')" />
      </CustomLabel>

      <CustomLabel
        :inputId="`duration-${index}`"
        :labelText="$t('duration')"
        :errorMessage="durationError">
        <Input
          :id="`duration-${index}`"
          v-model="experience.duration"
          :placeholder="$t('duration')" />
      </CustomLabel>

      <CustomLabel
        :inputId="`description-${index}`"
        :labelText="$t('description')"
        :errorMessage="descriptionError">
        <Input
          :id="`description-${index}`"
          v-model="experience.description"
          :placeholder="$t('description')" />
      </CustomLabel>

      <button class="remove-button" @click="remove(experience)">
        {{ $t('removeExperience') }}
      </button>

    </form>    
    <div v-if="formType === 'experience'" class="container">
      <button @click="add('experience')" class="center-button">{{ $t('addExperience') }}</button>
    </div>


    <form v-if="formType === 'education'" v-for="(education, index) in items" :key="education.id" @submit.prevent>
      <p class="school-title">{{ $t('school', { index: index + 1 }) }}</p>
      
      <CustomLabel
        :inputId="`school-${index}`"
        :labelText="$t('school')"
        :errorMessage="schoolError">
        <Input
          :id="`school-${index}`"
          v-model="education.name"
          :placeholder="$t('school')" />
      </CustomLabel>
      
      <CustomLabel
        :inputId="`from-${index}`"
        :labelText="$t('from')"
        :errorMessage="fromError">
        <Input
          :id="`from-${index}`"
          v-model="education.from"
          type="date"
          :placeholder="$t('from')" />
      </CustomLabel>
      
      <CustomLabel
        :inputId="`to-${index}`"
        :labelText="$t('to')"
        :errorMessage="toError">
        <Input
          :id="`to-${index}`"
          v-model="education.to"
          type="date"
          :placeholder="$t('to')" />
      </CustomLabel>
      
      <CustomLabel
        :inputId="`qualification-${index}`"
        :labelText="$t('educationTitle')"
        :errorMessage="qualificationError">
        <Input
          :id="`qualification-${index}`"
          v-model="education.qualification"
          :placeholder="$t('educationTitle')" />
      </CustomLabel>
      
      <button class="remove-button" @click="remove(education)">
        {{ $t('removeEducation') }}
      </button>
    </form>
    <div v-if="formType === 'education'" class="container">
      <button @click="add('education')" class="center-button">{{ $t('addEducation') }}</button>
    </div>

    <form v-if="formType === 'project'" v-for="(project, index) in items" :key="project.id" @submit.prevent>
      <p class="project-title">{{ $t('projectTitle', { index: index + 1 }) }}</p>
      
      <CustomLabel
        :inputId="`project-title-${index}`"
        :labelText="$t('projectTitle')"
        :errorMessage="projectTitleError">
        <Input
          :id="`project-title-${index}`"
          v-model="project.title"
          :placeholder="$t('projectTitle')" />
      </CustomLabel>
      
      <CustomLabel
        :inputId="`project-link-${index}`"
        :labelText="$t('projectLink')"
        :errorMessage="projectLinkError">
        <Input
          :id="`project-link-${index}`"
          v-model="project.link"
          :placeholder="$t('projectLink')" />
      </CustomLabel>
      
      <CustomLabel
        :inputId="`project-description-${index}`"
        :labelText="$t('projectDescription')"
        :errorMessage="projectDescriptionError">
        <Input
          :id="`project-description-${index}`"
          v-model="project.description"
          :placeholder="$t('projectDescription')" />
      </CustomLabel>
      
      <button class="remove-button" @click="() => remove(project)">
        {{ $t('removeProject') }}
      </button>
    </form>
    <div v-if="formType === 'project'" class="container">
      <button @click="add('project')" class="center-button">{{ $t('addProject') }}</button>
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/common/Input.vue";
import CustomLabel from "@/components/common/CustomLabel.vue";

const props = defineProps({
  items: Array,
  formType: String,
  remove: Function,
  add: Function
});
</script>

<style scoped>

.organization-title, .school-title, .project-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.organization-title:hover, .school-title:hover, .project-title:hover {
  cursor: pointer;
}
</style>
