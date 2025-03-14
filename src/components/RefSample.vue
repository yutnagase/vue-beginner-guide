<template>
    <div>
      <p>{{ message }}</p>
      <input v-model="message" placeholder="メッセージを入力してください" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    
    setup() {
      const message = ref<string>('こんにちは ref関数');
      return {
        message,
      };
    },
  });
  </script>
  
  