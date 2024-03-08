<template>
  <div>
      <form v-for="(education, index) in educations" :key="index">
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
      </form>
      <div class="container">
          <button @click="addEducation" class="center-button">{{ $t('addEducation') }}</button>
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
  