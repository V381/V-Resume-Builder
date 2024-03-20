<template>
  <div>
    <CustomForm 
      :items="items"
      formType="education"
      :organizationTitleKey="$t('organizationCompany')"
      :titleKey="$t('organizationTitle')"
      :durationKey="$t('duration')"
      :descriptionKey="$t('description')"
      :removeKey="$t('removeEducation')"
      :addKey="$t('addEducation')"
      :remove="remove"
      :add="add"
    />
  </div>
</template>

<script setup>
import { useEducationStore } from "@/stores/storeTemplate";
import useStoreItems from "@/helpers/useStoreItems";
import CustomForm from "./CustomForm.vue";

const { items, add, remove } = useStoreItems(
  useEducationStore,
  'addItem',
  'removeItem'
);
</script>

<style scoped>
.school-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}

.school-title:hover {
  cursor: pointer;
}
</style>
