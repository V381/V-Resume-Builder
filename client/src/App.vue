<template>
  <div class="main-wrapper">
    <Header />

    <FormSteps />
    <notifications />

    <RouterView />
  </div>
</template>

<script setup>
import Header from '@/components/common/Header.vue';
import FormSteps from "@/components/features/FormSteps.vue";

</script>

<style scoped>
#app {
  width: 100%;
}
</style>
