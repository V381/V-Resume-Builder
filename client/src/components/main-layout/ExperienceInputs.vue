<template>
  <div>
    <form v-for="(experience, index) in experiences" :key="index">
      <p class="organization-title">Organization {{ index + 1 }}</p>
      <label>
        Organization
        <Input v-model="experience.organization" :placeholder="'Enter organization...'" />
      </label>
      <label>
        Enter title (Software Developer, Designer....)
        <Input v-model="experience.title" :placeholder="'Enter title...'" />
      </label>
      <label>
        Duration
        <Input v-model="experience.duration" :placeholder="'Enter duration'" />
      </label>
      <label>
        Description
        <Input v-model="experience.description" :placeholder="'Enter description'" />
      </label>
    </form>
    <div class="container">
      <button @click="addExperience" class="center-button">Add experience</button>
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
