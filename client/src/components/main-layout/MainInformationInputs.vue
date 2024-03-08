<template>
  <div class="center-container">
    <div class="input-container">
      <div class="column">
        <label for="first-name">{{ $t('firstName') }}</label>
        <Input v-model="form.firstName" :placeholder="$t('firstName')" />
        <label for="email">{{ $t('email') }}</label>
        <Input v-model="form.email" :placeholder="$t('email')" />
        <label for="your-website">{{ $t('website') }}</label>
        <Input v-model="form.website" :placeholder="$t('website')" />
        <label for="linkedin">{{ $t('linkedin') }}</label>
        <Input v-model="form.linkedin" :placeholder="$t('linkedin')" />
        <label for="facebook">{{ $t('facebook') }}</label>
        <Input v-model="form.facebook" :placeholder="$t('facebook')" />
      </div>

      <div class="column">
        <label for="last-name">{{ $t('lastName') }}</label>
        <Input v-model="form.lastName" :placeholder="$t('lastName')" />

        <label for="phone-number">{{ $t('phoneNumber') }}</label>
        <Input v-model="form.phoneNumber" :placeholder="$t('phoneNumber')" />
        <label for="github">{{ $t('github') }}</label>
        <Input v-model="form.github" :placeholder="$t('github')" />
        <label for="twitter">{{ $t('twitter') }}</label>
        <Input v-model="form.twitter" :placeholder="$t('twitter')" />
        <label for="instagram">{{ $t('instagram') }}</label>
        <Input v-model="form.instagram" :placeholder="$t('instagram')" />
      </div>
    </div>
  </div>
</template>

<script setup>

import Input from "./Input.vue";
import { useFormStore } from "../../stores/FormStore";
import { watch } from 'vue';
const form = useFormStore();


watch(
  () => form.getFormData(),
  (newData) => {
    console.log('Form data updated in MainInformationInputs:', newData);
  }
);

</script>
>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
}

.input-container {
  display: flex;
  width: 70%;
}

.column {
  margin-right: 20px;
  width: 100%;
}

label {
  color: white;
}
</style>
