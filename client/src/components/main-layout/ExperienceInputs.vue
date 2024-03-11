<template>
  <div>
    <form v-for="(experience, index) in experiences" :key="experience.id" @submit.prevent>
      <p class="organization-title">{{ $t('organizationCompany', { index: index + 1 }) }}</p>
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
      <button class="remove-button" @click="() => removeExperience(experience)">
        {{ $t('removeExperience') }}
      </button>
    </form>
    <div class="container">
      <button @click="addExperience" class="center-button">{{ $t('addExperience') }}</button>
    </div>
  </div>
</template>

<script setup>
import Input from "./Input.vue";
import { useExperienceStore } from "../../stores/ExperienceStore";
import { ref, watch } from 'vue';

const experienceStore = useExperienceStore();
const experiences = ref(experienceStore.getExperiences());

const addExperience = () => {
  const newExperience = {
    id: new Date(),
    organization: '',
    title: '',
    duration: '',
    description: '',
  };
  experienceStore.addExperience(newExperience);
};

const removeExperience = (experience) => {
  experienceStore.removeExperience(experience);
};

watch(
  () => experienceStore.getExperiences(),
  (newExperiences) => {
    console.log('Experiences updated:', newExperiences);
  }
);
</script>

<style scoped>

.remove-button {
  background-color: hsla(0, 100%, 50%, 1);
  color: white;
  cursor: pointer;
  width: 20%;
}

button {
  background-color: hsla(160, 100%, 37%, 1);
  padding: 1rem;
  color: white;
  margin-top: 1rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  color: white;
}

.organization-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.organization-title:hover {
  cursor: pointer;
}
</style>
