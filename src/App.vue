<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedRoute = ref('');

const menuItems = [
  { path: '/', label: 'トップページ' },
  { path: '/ref-sample', label: 'ref関数Sample' },
  { path: '/ref-sample2', label: 'Ref関数Sample' },
  { path: '/ref-sample3', label: 'Ref関数Sample(コンポーネント説明)' },
  { path: '/reactive-sample', label: 'reactive関数Sample' },
  { path: '/computed-sample', label: 'computed関数Sample' },
  { path: '/watch-sample', label: 'watch関数Sample' },
  { path: '/parent-props-sample', label: '親子コンポーネントSample（Props）' },
  { path: '/parent-sample', label: '親子コンポーネントSample（双方向）' },
  { path: '/parent-slot-sample', label: '親子コンポーネントSample（Slot）' }
];

const navigate = () => {
  if (selectedRoute.value) {
    router.push(selectedRoute.value);
  }
};
</script>

<template>
  <nav>
    <select v-model="selectedRoute" @change="navigate">
      <option value="" disabled>メニューを選択</option>
      <option v-for="item in menuItems" :key="item.path" :value="item.path">
        {{ item.label }}
      </option>
    </select>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  margin-bottom: 1rem;
}
select {
  padding: 5px;
  font-size: 1rem;
}
</style>