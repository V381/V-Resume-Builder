<template>
    <div class="cv-scoring">
      <h3>{{ $t('cvQuality') }}: {{ score }}</h3>
    </div>
  </template>
  
  <script>
  import { ref, watch, onMounted } from 'vue';
  import { notify } from '@kyvg/vue3-notification';
  
  export default {
    props: {
      cvData: {
        type: Object,
        required: true,
        default: () => ({
          personalInfo: {},
          projects: [],
          education: [],
          experience: [],
          skills: []
        }),
      },
    },
    setup(props) {
      const score = ref(0);
  
      const calculateScore = () => {
        let tempScore = 0;
  
        if (props.cvData.personalInfo) {
          const completenessCriteria = ['firstName', 'email', 'lastName', 'phoneNumber', 'website'];
          completenessCriteria.forEach(field => {
            if (!props.cvData.personalInfo[field]) {
              console.log('Data entered');
            } else {
              tempScore += 5;
            }
          });
        }
  
        ['projects', 'education', 'experience', 'skills'].forEach(section => {
          if (Array.isArray(props.cvData[section]) && props.cvData[section].length) {
            tempScore += props.cvData[section].length * 5;
        } else {
            console.log('Data entered');
          }
        });
  
        score.value = tempScore;
      };
  
      watch(() => props.cvData, calculateScore, { deep: true });
      onMounted(calculateScore);
  
      return {
        score
      };
    },
  };
  </script>
  
  <style scoped>
  .cv-scoring h3 {
    color: green;
  }
  </style>
  