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

    getProjects() {
      return this.projects;
    },
  },
});