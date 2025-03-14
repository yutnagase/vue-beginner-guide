<template>
    <h2>computed関数 (半角文字を全角に変換する)</h2>

    <div>
      <p>{{ computedMessage }}</p>
      <input v-model="state.message" placeholder="メッセージを入力してください" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, computed } from 'vue';
  
  export default defineComponent({
    setup() {
      const state = reactive({
        message: 'hello computed',
      });

      /** 全角変換関数 */
      const toFullWidth = (str: string): string => {
        return str.replace(/[A-Za-z0-9]/g, (s) => {
          return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
        });
      };
      /** computed */
      const computedMessage = computed(() => {
        return toFullWidth(state.message);
      });
  
      return {
        state,
        computedMessage,
      };
    },
  });
  </script>