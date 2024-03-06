<template>
    <div>
      <form v-for="(education, index) in educations" :key="index">
        <label>
           School/College/University Name
          <Input :placeholder="'Enter name...'" />
        </label>
        <label>
           From
          <Input :type="'date'" :placeholder="'From...'" />
        </label>
        <label>
           To
          <Input :type="'date'" :placeholder="'To...'" />
        </label>
        <label>
            Title
            <Input :placeholder="'Qualification'" />
        </label>
      </form>
      <div class="container">
          <button @click="addEducation" class="center-button">Add education</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Input from "./Input.vue";
  import { ref } from 'vue';
  
  const educations = ref([]);
  
  const addEducation = () => {
    educations.value.push({});
  };
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
  