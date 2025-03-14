<template>
    <h2>watch関数 (半角文字を全角に変換する)</h2>
    <div>
      <p>{{ state.message }}</p>
      <p>全角変換値: {{ state.convertMessage }}</p>
      <input v-model="state.message" placeholder="メッセージを入力してください" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, watch } from 'vue';
  
  export default defineComponent({
    setup() {
        const state = reactive({
            message: 'hello Watch',
            convertMessage: ''
        });

        /** 全角変換関数 */
        const toFullWidth = (str: string): string => {
            return str.replace(/[A-Za-z0-9]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
            });
        };

        watch(state, (newState) => {
            newState.convertMessage = toFullWidth(newState.message)
        });
  
        return {
            state,
        };
    },
  });
  </script>