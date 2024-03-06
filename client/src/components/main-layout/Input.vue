<template>
    <div>
      <input :type="type" :placeholder="placeholder" :value="value" @input="updateValue" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  
  const props = defineProps(['placeholder', 'value', 'type']);
  const placeholder = ref(props.placeholder || '');
  const value = ref(props.value);
  
  const updateValue = (event) => {
    value.value = event.target.value;
  };
  </script>


<style scoped>

input {
    background-color: inherit;
    border: 1px solid hsla(160, 100%, 37%, 1);
    padding: 0.5rem; 
    color: lightgray;
    transition: 0.5s ease-in-out;
    width: calc(100% - 1rem);
    box-sizing: border-box;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

input:focus {
    border-color: hsla(160, 100%, 60%, 1);
    border-radius: none;
}

</style>
