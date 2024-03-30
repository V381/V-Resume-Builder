import { defineStore } from 'pinia';

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
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'form',
        storage: localStorage,
      },
    ],
  },
});
