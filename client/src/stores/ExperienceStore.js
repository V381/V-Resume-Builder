import { defineStore } from 'pinia';

export const useExperienceStore = defineStore({
  id: 'experience',

  state: () => ({
    experiences: [],
  }),

  actions: {
    addExperience(experience) {
      this.experiences.push(experience);
    },

    removeExperience(experience) {
      const index = this.experiences.indexOf(experience);
      if (index !== -1) {
        this.experiences.splice(index, 1);
      }
    },

    getExperiences() {
      return this.experiences;
    },
  },
});
