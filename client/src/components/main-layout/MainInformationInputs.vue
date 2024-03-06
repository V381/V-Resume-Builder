<template>
    <div class="center-container">
      <div class="input-container">
        <div class="column">
          <label for="first-name">First Name:</label>
          <Input :placeholder="'Enter first name...*'" />
          <label for="email">Email:</label>
          <Input :placeholder="'Enter email...*'"/>
          <label for="your-website">Your Website:</label>
          <Input :placeholder="'Enter website...'"/>
          <label for="linkedin">LinkedIn</label>
          <Input :placeholder="'Enter Linkedin'"/>
          <label for="facebook">Facebook</label>
          <Input :placeholder="'Enter facebook...'"/>
        </div>
  
        <div class="column">
          <label for="last-name">Last name</label>
          <Input :placeholder="'Enter last name...*'" />
  
          <label for="phone-number">Phone Numnber</label>
          <Input :placeholder="'Enter phone number...*'" />
          <label for="github">Github</label>
          <Input :placeholder="'Enter Github...'" />
          <label for="twitter">Twitter</label>
          <Input :placeholder="'Enter Twitter...'" />
          <label for="instagram">Instagram</label>
          <Input :placeholder="'Enter Instagram...'" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Input from "./Input.vue";
  </script>
  
  <style scoped>
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 100%;
  }
  
  .input-container {
    display: flex;
    width: 70%;
  }
  
  .column {
    margin-right: 20px;
    width: 100%;
  }

  label {
    color: white;
  }


  </style>
  