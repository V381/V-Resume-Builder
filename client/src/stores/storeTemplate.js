import { defineStore } from 'pinia';

export const useStoreItems = (id) => {
    const store = createStoreTemplate(id);
    const items = ref(store.getItems());
  
    const add = (item) => {
      store.addItem(item);
    };
  
    const remove = (item) => {
      store.removeItem(item);
    };
  
    watch(
      () => store.getItems(),
      (newItems) => {
        items.value = newItems;
        console.log('Items updated:', newItems);
      }
    );
  
    return { items, add, remove };
  };

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
