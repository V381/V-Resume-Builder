import { ref, watch } from 'vue';

const useStoreItems = (getStoreItems, addItem, removeItem) => {
  const store = getStoreItems();
  const items = ref(store.getItems());

  const add = () => {
    const newItem = {
      id: new Date(),
      organization: '',
      title: '',
      duration: '',
      description: '',
    };
    store[addItem](newItem);
  };

  const remove = (item) => {
    store[removeItem](item);
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

export default useStoreItems;
