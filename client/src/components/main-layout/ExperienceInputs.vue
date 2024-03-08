<template>
  <div>
    <form v-for="(experience, index) in experiences" :key="index">
      <p class="organization-title">{{ $t('organizationCompany', { index: index + 1 }) }}</p>
      <label>
        {{ $t('organization') }}
        <Input v-model="experience.organization" :placeholder="$t('organization')" />
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
    organization: '',
    title: '',
    duration: '',
    description: '',
  };
  experienceStore.addExperience(newExperience);
  console.log(experienceStore.getExperiences());
};

watch(
  () => experienceStore.getExperiences(),
  (newExperiences) => {
    console.log('Experiences updated:', newExperiences);
  }
);
</script>

<style scoped>
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
