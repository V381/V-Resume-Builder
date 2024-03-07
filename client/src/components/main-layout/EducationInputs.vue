<template>
    <div>
      <form v-for="(education, index) in educations" :key="index">
        <label>
          School/College/University Name
          <Input v-model="education.name" :placeholder="'Enter name...'" />
        </label>
        <label>
          From
          <Input v-model="education.from" :type="'date'" :placeholder="'From...'" />
        </label>
        <label>
          To
          <Input v-model="education.to" :type="'date'" :placeholder="'To...'" />
        </label>
        <label>
          Title
          <Input v-model="education.qualification" :placeholder="'Qualification'" />
        </label>
      </form>
      <div class="container">
        <button @click="addEducation" class="center-button">Add education</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Input from "./Input.vue";
  import { useFormStore } from "../../stores/FormStore";
  import { usedEducationStore } from "../../stores/EducationStore";

  import { ref, watch } from 'vue';
  
  const form = useFormStore();
  const educationStore = usedEducationStore();
  const educations = ref(educationStore.getEducations());
  
  const addEducation = () => {
    const newEducation = {
      name: '',
      from: '',
      to: '',
      qualification: '',
    };
    educationStore.addEducation(newEducation);
    console.log(educationStore.getEducations());
  };
  
  watch(
    () => educationStore.getEducations(),
    (newEducations) => {
      educations.value = newEducations;
      console.log('Educations updated:', newEducations);
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
  </style>
  