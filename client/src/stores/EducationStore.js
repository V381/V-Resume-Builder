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

    getEducations() {
      return this.educations;
    },
  },
});
