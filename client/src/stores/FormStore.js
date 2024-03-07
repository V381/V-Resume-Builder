import { defineStore } from 'pinia';
import { usedEducationStore } from './EducationStore';
import { useExperienceStore } from './ExperienceStore';

export const useFormStore = defineStore({
  id: 'form',

  state: () => ({
    firstName: '',
    email: '',
    website: '',
    linkedin: '',
    facebook: '',
    lastName: '',
    phoneNumber: '',
    github: '',
    twitter: '',
    instagram: ''
  }),

  actions: {
    getProjects() {
      return useProjectStore().getProjects();
    },
    getEducation() {
      return usedEducationStore().getededucations();
    },
    getExperience() {
      return useExperienceStore().getExperiences();
    },
    getFormData() {
      return {
        firstName: this.firstName,
        email: this.email,
        website: this.website,
        linkedin: this.linkedin,
        facebook: this.facebook,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        github: this.github,
        twitter: this.twitter,
        instagram: this.instagram,
      };
    },
  },
});
