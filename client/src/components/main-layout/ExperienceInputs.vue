<template>
  <div>
    <form v-for="(experience, index) in items" :key="experience.id" @submit.prevent>
      <p class="organization-title">{{ $t('organizationCompany', { index: index + 1 }) }}</p>
      <label>
        {{ $t('organizationCompany') }}
        <Input v-model="experience.organization" :placeholder="$t('organizationCompany')" />
      </label>
      <label>
        {{ $t('organizationTitle') }}
        <Input v-model="experience.title" :placeholder="$t('organizationTitle')" />
      </label>
      <label>
        {{ $t('duration') }}
        <Input v-model="experience.duration" :placeholder="$t('duration')" />
      </label>
      <label>
        {{ $t('description') }}
        <Input v-model="experience.description" :placeholder="$t('description')" />
      </label>
      <button class="remove-button" @click="() => remove(experience)">
        {{ $t('removeExperience') }}
      </button>
    </form>
    <div class="container">
      <button @click="add" class="center-button">{{ $t('addExperience') }}</button>
    </div>
  </div>
</template>

<script setup>
import { useExperienceStore } from "@/stores/storeTemplate";
import Input from "@/components/main-layout/Input.vue";
import useStoreItems from "@/helpers/useStoreItems";

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
