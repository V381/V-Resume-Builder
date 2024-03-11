import { defineStore } from 'pinia';

export const useProjectStore = defineStore({
  id: 'project',

  state: () => ({
    projects: [],
  }),

  actions: {
    addProject(project) {
      this.projects.push(project);
    },

    removeProject(project) {
      const index = this.projects.indexOf(project);
      if (index !== -1) {
        this.projects.splice(index, 1);
      }
    },

    getProjects() {
      return this.projects;
    },
  },
});
