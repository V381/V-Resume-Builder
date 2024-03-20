import { defineStore } from 'pinia';

export const createStoreTemplate = (id) => {
  return defineStore({
    id,

    state: () => ({
      items: [],
    }),

    actions: {
      addItem(item) {
        this.items.push(item);
      },

      removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      },

      getItems() {
        return this.items;
      },
    },
  });
};

export const useProjectStore = createStoreTemplate('project');
export const useEducationStore = createStoreTemplate('education');
export const useExperienceStore = createStoreTemplate('experience');
