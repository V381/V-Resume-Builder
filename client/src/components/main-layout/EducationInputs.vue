<template>
  <div>
    <form v-for="(education, index) in educations" :key="education.id" @submit.prevent>
      <p class="school-title">{{ $t('school', { index: index + 1 }) }}</p>
      <label>
        {{ $t('school') }}
        <Input v-model="education.name" :placeholder="$t('school')" />
      </label>
      <label>
        {{ $t('from') }}
        <Input v-model="education.from" :type="'date'" :placeholder="$t('from')" />
      </label>
      <label>
        {{ $t('to') }}
        <Input v-model="education.to" :type="'date'" :placeholder="$t('to')" />
      </label>
      <label>
        {{ $t('educationTitle') }}
        <Input v-model="education.qualification" :placeholder="$t('educationTitle')" />
      </label>
      <button class="remove-button" @click="() => removeEducation(education)">
        {{ $t('removeEducation') }}
      </button>
    </form>
    <div class="container">
      <button @click="addEducation" class="center-button">{{ $t('addEducation') }}</button>
    </div>
  </div>
</template>

<script setup>
import Input from "./Input.vue";
import { usedEducationStore } from "../../stores/EducationStore";
import { ref, watch } from 'vue';

const educationStore = usedEducationStore();
const educations = ref(educationStore.getEducations());

const addEducation = () => {
  const newEducation = {
    id: new Date(),
    name: '',
    from: '',
    to: '',
    qualification: '',
  };
  educationStore.addEducation(newEducation);
};

const removeEducation = (education) => {
  educationStore.removeEducation(education);
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

.school-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.school-title:hover {
  cursor: pointer;
}
</style>
