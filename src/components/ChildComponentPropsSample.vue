<template>
  <div>
    <label>子コンポーネントメッセージ: </label>
    <input v-model="localMessage" placeholder="Enter message here" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';

const props = defineProps<{ message: string }>();
const localMessage = ref(props.message);


watch(() => props.message, (newVal) => {
  localMessage.value = newVal;
});


</script>