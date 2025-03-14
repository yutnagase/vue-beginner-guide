<template>
  <div>
    <child-component>
      <template v-slot:slot1>
        aaaaa
      </template>
      <template v-slot:slot2>
        <input type="text" value="親より" />
        <input type="text" value="親より2" />
      </template>

    </child-component>
  </div>
</template>

<script setup lang="ts">
import ChildComponent from './ChildComponentSlotSample.vue';
</script>