<template>
  <div>
    <form v-for="(project, index) in items" :key="project.id" @submit.prevent>
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
        <Input v-model="project.description" :placeholder="$t('description')" />
      </label>
      <button class="remove-button" @click="() => remove(project)">{{ $t('removeProject') }}</button>
    </form>
    <div class="container">
      <button @click="add" class="center-button">{{ $t('addProject') }}</button>
    </div>
  </div>
</template>

<script setup>
import Input from "./Input.vue";
import { useFormStore } from "@/stores/FormStore";
import { useProjectStore } from "@/stores/storeTemplate";
import useStoreItems from "@/helpers/useStoreItems";


const form = useFormStore();

const { items, add, remove } = useStoreItems(
  useProjectStore,
  'addItem',
  'removeItem'
);
</script>

<style scoped>

.project-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}
</style>
