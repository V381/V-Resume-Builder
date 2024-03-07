<template>
  <div class="center-container">
    <div class="input-container">
      <div class="column">
        <label for="first-name">First Name:</label>
        <Input v-model="form.firstName" :placeholder="'Enter first name...*'" />
        <label for="email">Email:</label>
        <Input v-model="form.email" :placeholder="'Enter email...*'" />
        <label for="your-website">Your Website:</label>
        <Input v-model="form.website" :placeholder="'Enter website...'" />
        <label for="linkedin">LinkedIn</label>
        <Input v-model="form.linkedin" :placeholder="'Enter Linkedin'" />
        <label for="facebook">Facebook</label>
        <Input v-model="form.facebook" :placeholder="'Enter facebook...'" />
      </div>

      <div class="column">
        <label for="last-name">Last name</label>
        <Input v-model="form.lastName" :placeholder="'Enter last name...*'" />

        <label for="phone-number">Phone Number</label>
        <Input v-model="form.phoneNumber" :placeholder="'Enter phone number...*'" />
        <label for="github">Github</label>
        <Input v-model="form.github" :placeholder="'Enter Github...'" />
        <label for="twitter">Twitter</label>
        <Input v-model="form.twitter" :placeholder="'Enter Twitter...'" />
        <label for="instagram">Instagram</label>
        <Input v-model="form.instagram" :placeholder="'Enter Instagram...'" />
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
