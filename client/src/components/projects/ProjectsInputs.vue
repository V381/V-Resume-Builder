<template>
  <div>
    <p v-if="items.length === 0">{{$t("adviceProjects")}}</p>
    <CustomForm 
      :items="items"
      formType="project"
      :organizationTitleKey="$t('organizationCompany')"
      :titleKey="$t('organizationTitle')"
      :durationKey="$t('duration')"
      :descriptionKey="$t('description')"
      :removeKey="$t('removeProject')"
      :addKey="$t('addProject')"
      :remove="remove"
      :add="add"
    />
  </div>
</template>

<script setup>
import { useProjectStore } from "@/stores/storeTemplate";
import useStoreItems from "@/helpers/useStoreItems";
import CustomForm from "@/components/features/CustomForm.vue";

const { items, add, remove } = useStoreItems(
  useProjectStore,
  'addItem',
  'removeItem'
);
</script>