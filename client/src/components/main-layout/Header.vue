<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal'
import SelectLanguage from "./SelectLanguage.vue";
import CountryFlag from 'vue-country-flag-next';

const { open, close } = useModal({
  component: SelectLanguage,
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close()
    },
  },
})
</script>

<template>
  <div class="main-header">
    <span></span>
    <h1 class="red center">V <span class="green">Resume Builder</span></h1>
    <div class="language-flag-container">
      <p>Language</p>
      <CountryFlag country='gb' size='big' @click="() => open()" />
    </div>
    <ModalsContainer />
  </div>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center {
  text-align: center;
}

.language-flag-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.author {
    font-size: 0.6rem;
}

</style>
