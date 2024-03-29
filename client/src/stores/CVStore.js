import { defineStore } from 'pinia';
import { useFormStore } from '@/stores/FormStore';
import { useProjectStore, useEducationStore, useExperienceStore} from '@/stores/storeTemplate';

export const useCvStore = defineStore('cv', { 
    state: () => ({}), 
  
    getters: {
      cvData: (state) => {
        const formStore = useFormStore();
        const projectStore = useProjectStore();
        const educationStore = useEducationStore();
        const experienceStore = useExperienceStore();
  
        return {
          personalInfo: formStore.getFormData(),
          projects: projectStore.getItems(),
          education: educationStore.getItems(),
          experience: experienceStore.getItems(),
        };
      },
    },
  });
