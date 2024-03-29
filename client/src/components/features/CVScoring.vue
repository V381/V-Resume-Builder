<template>
    <div class="cv-scoring">
      <h3>{{ $t('cvQuality') }}: {{ score }}</h3>
    </div>
  </template>
  
  <script>
  import { ref, watch, onMounted } from 'vue';
  
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
      const feedback = ref([]);
  
      const calculateScore = () => {
        let tempScore = 0;
        const tempFeedback = [];
        if (props.cvData.personalInfo) {
          const completenessCriteria = ['firstName', 'email'];
          completenessCriteria.forEach((field) => {
            if (!props.cvData.personalInfo[field]) {
              tempFeedback.push(`Missing ${field} information.`);
            } else {
              tempScore += 10; 
            }
          });
        }
  
        ['projects', 'education', 'experience', 'skills'].forEach((section) => {
          if (Array.isArray(props.cvData[section]) && props.cvData[section].length) {
            tempScore += props.cvData[section].length * 5; 
          } else {
            tempFeedback.push(`Add more to your ${section}.`);
          }
        });
  
        score.value = tempScore;
        feedback.value = tempFeedback;
      };
      watch(() => props.cvData, calculateScore, { deep: true });
  
      onMounted(calculateScore);
  
      return {
        score,
        feedback,
      };
    },
  };
  </script>
  
  <style scoped>
  .cv-scoring h3 {
    color: green;
  }
  </style>
  