<template>
    <div class="custom-label-container">
      <label :for="inputId">{{ labelText }}</label>
      <slot></slot>
      <p v-if="errorMessage" class="error-message" :id="errorId">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    inputId: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      default: ''
    },
    errorId: {
      type: String,
      default: ''
    }
  });
  </script>
  
  <style scoped>

  .custom-label-container .error-message {
    color: #d32f2f;
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
  </style>
  