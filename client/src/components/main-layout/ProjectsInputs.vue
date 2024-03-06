<template>
    <div>
      <form v-for="(projects, index) in projectss" :key="index">
        <p class="project-title">Project {{ index + 1 }}</p>
        <label>
           Title
          <Input :placeholder="'Enter title...'" />
        </label>
        <label>
           Link
          <Input :placeholder="'Enter link...'" />
        </label>
        <label>
           Description
          <Input :placeholder="'Enter description'" />
        </label>
      </form>
      <div class="container">
          <button @click="addprojects" class="center-button">Add project</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Input from "./Input.vue";
  import { ref } from 'vue';
  
  const projectss = ref([]);
  
  const addprojects = () => {
    projectss.value.push({});
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

.project-title {
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
}

  </style>
  