<template>
  <div>
    <CustomForm 
      :items="items"
      organizationTitleKey="organizationCompany"
      titleKey="organizationTitle"
      durationKey="duration"
      descriptionKey="description"
      removeKey="remove"
      addKey="add"
    />
  </div>
</template>

<script setup>
import { useExperienceStore } from "@/stores/storeTemplate";
import useStoreItems from "@/helpers/useStoreItems";
import CustomForm from "./CustomForm.vue";

const { items, add, remove } = useStoreItems(
  useExperienceStore,
  'addItem',
  'removeItem'
);
</script>

<style scoped>
.organization-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.organization-title:hover {
  cursor: pointer;
}
</style>
