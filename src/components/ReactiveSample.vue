<template>
    <div>
      <p>{{ state.message }}</p>
      <input v-model="state.message" placeholder="メッセージを入力してください" />


      <p>{{ state.age2 }}</p>
      <input v-model="state.age2" placeholder="メッセージを入力してください" />

    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  
  export default defineComponent({
    setup() {
      const state = reactive({
        message: 'こんにちは reactive関数',
        age2: '30'

      });
  
      return {
        state,
      };
    },
  });
  </script>