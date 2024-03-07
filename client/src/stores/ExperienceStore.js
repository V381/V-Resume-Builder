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

    getExperiences() {
      return this.experiences;
    },
  },
});
