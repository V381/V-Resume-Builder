<template>
  <div>
    <form v-if="formType === 'experience'" v-for="(experience, index) in items" :key="experience.id" @submit.prevent>
      <p class="organization-title">{{ $t('organization', { index: index + 1 }) }}</p>
      <label>
        {{ $t('organizationCompany') }}
        <Input v-model="experience.organization" :placeholder="$t('organizationCompany')" />
      </label>
      <label>
        {{ $t('organizationTitle') }}
        <Input v-model="experience.title" :placeholder="$t('organizationTitle')" />
      </label>
      <label>
        {{ $t('duration') }}
        <Input v-model="experience.duration" :placeholder="$t('duration')" />
      </label>
      <label>
        {{ $t('description') }}
        <Input v-model="experience.description" :placeholder="$t('description')" />
      </label>
      <button class="remove-button" @click="remove(experience)">
        {{ $t('removeExperience') }}
      </button>
    </form>
    <div v-if="formType === 'experience'" class="container">
      <button @click="add('experience')" class="center-button">{{ $t('addExperience') }}</button>
    </div>
    
    <form v-if="formType === 'education'" v-for="(education, index) in items" :key="education.id" @submit.prevent>
      <p class="school-title">{{ $t('school', { index: index + 1 }) }}</p>
      <label>
        {{ $t('school') }}
        <Input v-model="education.name" :placeholder="$t('school')" />
      </label>
      <label>
        {{ $t('from') }}
        <Input v-model="education.from" type="date" :placeholder="$t('from')" />
      </label>
      <label>
        {{ $t('to') }}
        <Input v-model="education.to" type="date" :placeholder="$t('to')" />
      </label>
      <label>
        {{ $t('educationTitle') }}
        <Input v-model="education.qualification" :placeholder="$t('educationTitle')" />
      </label>
      <button class="remove-button" @click="remove(education)">
        {{ $t('removeEducation') }}
      </button>
    </form>
    <div v-if="formType === 'education'" class="container">
      <button @click="add('education')" class="center-button">{{ $t('addEducation') }}</button>
    </div>

    <form v-if="formType === 'project'" v-for="(project, index) in items" :key="project.id" @submit.prevent>
      <p class="project-title">{{ $t('projectTitle') }} {{ index + 1 }}</p>
      <label>
        {{ $t('projectTitle') }}
        <Input v-model="project.title" :placeholder="$t('projectTitle')" />
      </label>
      <label>
        {{ $t('projectLink') }}
        <Input v-model="project.link" :placeholder="$t('projectLink')" />
      </label>
      <label>
        {{ $t('projectDescription') }}
        <Input v-model="project.description" :placeholder="$t('projectDescription')" />
      </label>
      <button class="remove-button" @click="() => remove(project)">{{ $t('removeProject') }}</button>
    </form>
    <div v-if="formType === 'project'" class="container">
      <button @click="add('project')" class="center-button">{{ $t('addProject') }}</button>
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/main-layout/Input.vue";
import { ref } from "vue";

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
