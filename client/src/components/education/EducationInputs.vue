<template>
  <div>
    <p v-if="items.length === 0"> {{ $t('adviceEducation') }}</p>
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
import CustomForm from "@/components/features/CustomForm.vue";

const { items, add, remove } = useStoreItems(
  useEducationStore,
  'addItem',
  'removeItem'
);
</script>