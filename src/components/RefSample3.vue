<template>
    <div>
      <p>{{ message }}</p>
      <p>内部カウンター: {{ internalCounter }}</p>
    </div>
  </template>
  
  <script lang="ts">
  // Vue3でのコンポーネントの基本的書き方の説明

  import { defineComponent, ref, Ref, onMounted } from 'vue';
  
  export default defineComponent({
    // vue3での書き方
    // コンポーネントのロジックを定義する
    setup() {
      const message: Ref<string>  = ref<string>('こんにちは');
      const internalCounter: Ref<number> = ref<number>(0);
  
      // マウント時に行うロジックが無ければ定義不要
      onMounted(() => {
        console.log('コンポーネントがマウントされました');
        internalCounter.value++;
      });
  
      // returnで返した変数やメソッドは、テンプレート内で使用可能になる
      return {
        message,
        internalCounter, // 試しにここをコメントアウトすると、template部で使用しているinternalCounter参照部はエラーとなる
      };
    }
  });
  </script>