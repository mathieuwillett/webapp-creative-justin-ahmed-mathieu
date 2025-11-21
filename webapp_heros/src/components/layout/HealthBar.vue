<script setup>
import { computed } from 'vue'

const props = defineProps({
  hp: Number,
  maxHp: Number
})

const percent = computed(() => {
  const currentHp = Math.max(0, props.hp) 
  const maxHp = props.maxHp || 100  
  return (currentHp / maxHp) * 100
})
</script>

<template>
  <div class="health-bar">
    <div 
      class="health-fill" 
      :style="{ width: percent + '%' }"
    ></div>
  </div>
</template>

<style scoped>
.health-bar {
  width: 120px;
  min-height: 16px;
  background: #333;
  border: 1px solid #111;
  border-radius: 4px;
  overflow: hidden;
}

.health-fill {
  height: 100%;
  background: #28d428;
  transition: width 0.25s ease;
}
</style>
