<template>
  <div>
    <p v-if="items.length === 0 "> {{ $t('iskustvoSaveti') }}</p>
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
import CustomForm from "@/components/features/CustomForm.vue";
const { items, add, remove } = useStoreItems(
  useExperienceStore,
  'addItem',
  'removeItem'
);
</script>

