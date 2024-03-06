<template>
    <div>
      <form v-for="(organization, index) in organizations" :key="index">
        <p class="organization-title">Organization {{ index + 1 }}</p>
        <label>
           Organization
          <Input :placeholder="'Enter organization...'" />
        </label>
        <label>
           Enter title (Software Developer, Designer....)
          <Input :placeholder="'Enter title...'" />
        </label>
        <label>
           Duration
          <Input :placeholder="'Enter duration'" />
        </label>
        <label>
           Description
          <Input :placeholder="'Enter description'" />
        </label>
      </form>
      <div class="container">
          <button @click="addorganization" class="center-button">Add organization</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Input from "./Input.vue";
  import { ref } from 'vue';
  
  const organizations = ref([]);
  
  const addorganization = () => {
    organizations.value.push({});
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
  