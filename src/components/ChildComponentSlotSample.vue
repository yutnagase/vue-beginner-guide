<template>
  <div>

    <h3>名前付きSlot1</h3>    
    <slot name="slot1"></slot>
    <hr>
    <h3>名前付きSlot2</h3>  
    <slot name="slot2"></slot>
    <hr>
    <h3>デフォルトSlot</h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>