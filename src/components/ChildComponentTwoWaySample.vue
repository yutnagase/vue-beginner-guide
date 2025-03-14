<template>
  <div>
    <label>子コンポーネントメッセージ: </label>
    <input v-model="localMessage" placeholder="Enter message here" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps<{ message: string }>();
const emit = defineEmits(['update:message']);
const localMessage = ref(props.message);

watch(() => props.message, (newVal) => {
  localMessage.value = newVal;
});

watch(localMessage, (newVal) => {
  emit('update:message', newVal);
});
</script>