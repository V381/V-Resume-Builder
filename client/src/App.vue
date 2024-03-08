<template>
  <div class="main-wrapper">
    <Header />

    <FormSteps />

    <RouterView />
  </div>
</template>

<script setup>
import Header from './components/main-layout/Header.vue';
import FormSteps from "./components/main-layout/FormSteps.vue";

</script>

<style scoped>
#app {
  width: 100%;
}
</style>
