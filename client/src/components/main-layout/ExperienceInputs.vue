<template>
  <div>
    <CustomForm 
      :items="items"
      formType="experience"
      :organizationTitleKey="$t('organizationCompany')"
      :titleKey="$t('organizationTitle')"
      :durationKey="$t('duration')"
      :descriptionKey="$t('description')"
      :removeKey="$t('removeExperience')"
      :addKey="$t('addExperience')"
      :remove="remove"
      :add="add"
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

