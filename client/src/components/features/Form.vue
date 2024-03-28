<template>
    <div :style="{ backgroundColor }">
        <MainInformationInputs />
    </div>
</template>

<script setup>
    import MainInformationInputs from "@/components/information/MainInformationInputs.vue";
    const props = defineProps(['backgroundColor']);

</script>

<style scoped></style>