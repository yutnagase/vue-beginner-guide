<template>
    <div>
      <label>親コンポーネントメッセージ: </label>
      <input v-model="parentMessage" placeholder="Enter message here" />
      <child-component-sample :message="parentMessage" @update:message="updateMessage"></child-component-sample>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ChildComponentSample from './ChildComponentTwoWaySample.vue';
  
  const parentMessage = ref<string>('Hello from Parent!');
//    const parentMessage = 'Hello from Parent!';
  
  const updateMessage = (newMessage: string) => {
    parentMessage.value = newMessage;
  };
  </script>