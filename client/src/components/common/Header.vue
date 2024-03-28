<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
import SelectLanguage from "@/components/utilities/SelectLanguage.vue";
import CountryFlag from 'vue-country-flag-next';
import { ref, watch, computed } from 'vue';
import { changeLocale, i18n } from '@/main';

const { open, close } = useModal({
  component: SelectLanguage,
  attrs: {
    title: 'Hello World!',
    onConfirm() {
      close();
    },
  },
});

const flag = computed(() => {
  const flagMap = {
    'en': 'gb',
    'rs': 'rs',
  };
  return flagMap[i18n.global.locale.value];
});

watch(() => i18n.global.locale.value, (newLocale) => {
  console.log(`Current locale changed to: ${newLocale}`);
});
</script>

<template>
  <div class="main-header">
    <h1 class="red center">V <span class="green">Resume Builder</span> <br/> <span class="author">created with <span class="heart">♡</span> by Pavle Paunovic</span></h1>
    <div class="language-flag-container">
      <p>{{ $t('language') }}</p>
      <CountryFlag :country="flag" size="big" @click="() => open()" />
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
.heart {
    color: red;
}
</style>
