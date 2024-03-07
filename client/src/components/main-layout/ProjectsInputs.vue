<template>
  <div>
    <form v-for="(project, index) in projects" :key="index">
      <p class="project-title">Project {{ index + 1 }}</p>
      <label>
        Title
        <Input v-model="project.title" :placeholder="'Enter title...'" />
      </label>
      <label>
        Link
        <Input v-model="project.link" :placeholder="'Enter link...'" />
      </label>
      <label>
        Description
        <Input v-model="project.description" :placeholder="'Enter description'" />
      </label>
    </form>
    <div class="container">
      <button @click="addProject" class="center-button">Add project</button>
    </div>
  </div>
</template>

<script setup>
import Input from "./Input.vue";
import { useFormStore } from "../../stores/FormStore";
import { useProjectStore } from "../../stores/ProjectFormStore";
import { ref, watch } from 'vue';

const form = useFormStore();
const projectStore = useProjectStore();
const projects = ref(projectStore.getProjects());

const addProject = () => {
  const newProject = {
    title: '',
    link: '',
    description: '',
  };
  projectStore.addProject(newProject);
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
