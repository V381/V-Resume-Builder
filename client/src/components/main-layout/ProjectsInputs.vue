<template>
  <div>
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
import Input from "./Input.vue";
import { useFormStore } from "@/stores/FormStore";
import { useProjectStore } from "@/stores/storeTemplate";
import useStoreItems from "@/helpers/useStoreItems";
import CustomForm from "./CustomForm.vue";

const { items, add, remove } = useStoreItems(
  useProjectStore,
  'addItem',
  'removeItem'
);
</script>

<style scoped>
.project-title {
  color: white;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
}
</style>
