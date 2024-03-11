import { defineStore } from 'pinia';

export const usedEducationStore = defineStore({
  id: 'education',

  state: () => ({
    educations: [],
  }),

  actions: {
    addEducation(education) {
      this.educations.push(education);
    },

    removeEducation(education) {
      const index = this.educations.indexOf(education);
      if (index !== -1) {
        this.educations.splice(index, 1);
      }
    },

    getEducations() {
      return this.educations;
    },
  },
});
