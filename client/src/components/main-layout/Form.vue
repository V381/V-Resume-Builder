<template>
    <div :style="{ backgroundColor }">
        <Inputs />
    </div>
</template>

<script setup>
    import Inputs from "./Inputs.vue";
    const props = defineProps(['backgroundColor']);

</script>

<style scoped></style>