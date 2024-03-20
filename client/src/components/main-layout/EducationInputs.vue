<template>
  <div>
    <form v-for="(education, index) in items" :key="education.id" @submit.prevent>
      <p class="school-title">{{ $t('school', { index: index + 1 }) }}</p>
      <label>
        {{ $t('school') }}
        <Input v-model="education.name" :placeholder="$t('school')" />
      </label>
      <label>
        {{ $t('from') }}
        <Input v-model="education.from" type="date" :placeholder="$t('from')" />
      </label>
      <label>
        {{ $t('to') }}
        <Input v-model="education.to" type="date" :placeholder="$t('to')" />
      </label>
      <label>
        {{ $t('educationTitle') }}
        <Input v-model="education.qualification" :placeholder="$t('educationTitle')" />
      </label>
      <button class="remove-button" @click="remove(education)">
        {{ $t('removeEducation') }}
      </button>
    </form>
    <div class="container">
      <button @click="add" class="center-button">{{ $t('addEducation') }}</button>
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/main-layout/Input.vue"
import { useEducationStore } from "@/stores/storeTemplate";
import useStoreItems from "@/helpers/useStoreItems";


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
