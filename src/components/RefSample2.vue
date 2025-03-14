<template>
    <div>
      <p>{{ message }}</p>
      <input v-model="message" placeholder="メッセージを入力してください" />
    </div>
  </template>
  
  <script lang="ts">
  // Ref関数でのサンプル (ジェネリクス) 
  // TypeScriptでリアクティブな値を明示的に型指定する事で型安全性が高まるメリット有る
  import { defineComponent, ref, Ref } from 'vue';

  export default defineComponent({
    
    setup() {
      const message: Ref<string> = ref<string>('こんにちは Ref関数');
 
      return {
        message,
      };
    },
  });
  </script>
  
  