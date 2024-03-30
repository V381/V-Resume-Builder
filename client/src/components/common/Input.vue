<template>
  <div>
    <input 
      :type="type"
      :placeholder="placeholder"
      v-model="modelValue"
      @input="updateValue"
      @blur="validateField"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import { notify } from '@kyvg/vue3-notification';
import { useI18n } from 'vue-i18n'; 
const props = defineProps({
  placeholder: String,
  type: String,
  fieldName: String 
});
const emits = defineEmits(['update:modelValue']);
const modelValue = ref('');
const { t } = useI18n(); 

const updateValue = (event) => {
  modelValue.value = event.target.value;
  emits('update:modelValue', modelValue.value);
};

const validateField = () => {
  if (modelValue.value.trim() === '') {
    if (props?.fieldName) {
      notify({
        title: t('advice'), 
        text: t('suggestion', { fieldName: props.fieldName }), 
        type: 'warning'
      });
    }
  }
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
}
</style>
