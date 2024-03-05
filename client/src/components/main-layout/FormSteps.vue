<template>
    <form-wizard>
        <tab-content title="Personal details">
           <Form />
        </tab-content>
        <tab-content title="Additional Info">
            My second tab content
        </tab-content>
        <tab-content title="Last step">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
</form-wizard>
</template>
<script setup>

import Form from './Form.vue';


</script>
<style>
.wizard-icon-container {
    background-color: #181818 !important;
}
.wizard-progress-bar {
    background-color: hsla(160, 100%, 37%, 1) !important;
    color: hsla(160, 100%, 37%, 1) !important;
}

.wizard-btn {
    background-color: hsla(160, 100%, 37%, 1) !important;
    border: inherit;
    border-color: black  !important;;
}

.wizard-icon-circle.md.checked {
  background-color: black; /* Change to your desired background color */
  color: white !important; /* Change to your desired text color */
  border: 2px solid green !important; /* Change to your desired border color and thickness */
}

.stepTitle {
    color: white !important;
}

</style>