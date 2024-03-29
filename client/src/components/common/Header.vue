<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal';
import SelectLanguage from "@/components/utilities/SelectLanguage.vue";
import CountryFlag from 'vue-country-flag-next';
import { ref, watch, computed } from 'vue';
import { changeLocale, i18n } from '@/main';
import CVScoring from "@/components/features/CVScoring.vue";
import { useCvStore } from '@/stores/CVStore'; 

const cvStore = useCvStore(); 

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
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.title = 'V-Resume Buider || V-Resume Creator';

  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Create your own CV for free. Download PDF or WORD file.';
  document.head.appendChild(metaDescription);

  const metaKeywords = document.createElement('meta');
  metaKeywords.name = 'keywords';
  metaKeywords.content = 'create, your own, cv, resume, free, download, pdf';
  document.head.appendChild(metaKeywords);

  const metaAuthor = document.createElement('meta');
  metaAuthor.name = 'author';
  metaAuthor.content = 'Pavle Paunovic';
  document.head.appendChild(metaAuthor);

  onUnmounted(() => {
    document.head.removeChild(metaDescription);
    document.head.removeChild(metaKeywords);
    document.head.removeChild(metaAuthor);
  });
});
</script>

<template>
  <div class="main-header">
    <h1 class="red center">V <span class="green">Resume Builder</span> <br/> <span class="author">created with <span class="heart">♡</span> by Pavle Paunovic</span></h1>
    <div class="scoring"><CVScoring :cvData="cvStore.cvData" /></div>
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
