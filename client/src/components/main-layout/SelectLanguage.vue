<template>
    <VueFinalModal class="confirm-modal"
      content-class="confirm-modal-content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade">
      <h2 class="language">{{ $t('modal.selectLanguage') }}</h2>
      <ul class="flags">
        <li><CountryFlag country="rs" size="big" @click="changeLanguage('rs')"/></li>
        <li><CountryFlag country="gb" size="big" @click="changeLanguage('en')" /></li>
      </ul>
      <button class="select-language" @click="confirm">{{ $t('confirm') }}</button>
    </VueFinalModal>
  </template>
  
  <script setup>
  import { changeLocale } from '@/main';
  import { defineProps, defineEmits } from 'vue';
  import { VueFinalModal } from 'vue-final-modal';
  import CountryFlag from 'vue-country-flag-next';
  
  const props = defineProps(['title']);
  const emits = defineEmits(['confirm']);
  
  const confirm = () => {
    emits('confirm');
  };
  
  const changeLanguage = (locale) => {
    changeLocale(locale);
  }
  
  </script>
  
  <style>
  .modal-content {
    background-color: transparent;
  }
  
  .language {
    color: white;
    padding: 2rem;
  }
  
  .flags {
    display: flex;
    justify-content: center;
  }
  
  .flags li {
    list-style-type: none;
    margin-right: 2rem;
  }
  
  .flags li:hover {
    cursor: pointer;
  }
  
  .select-language {
    width: 100%;
  }
  
  .confirm-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: black;
    border-radius: 0.5rem;
  }
  
  </style>
  