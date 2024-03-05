<script setup>
import Header from './components/main-layout/Header.vue';
import FormSteps from "./components/main-layout/FormSteps.vue";

</script>

<template>
  <div class="main-wrapper">
    <Header>
  </Header>

  <FormSteps />

  <RouterView />
  </div>
</template>

<style >
#app {
  width: 100%;
}
</style>
