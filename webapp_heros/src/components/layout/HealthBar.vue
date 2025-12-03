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

const hpColor = computed(() => {
  if (percent.value > 60) return 'hp-high'
  if (percent.value > 30) return 'hp-medium'
  return 'hp-low'
})
</script>

<template>
  <div class="health-bar">
    <div 
      class="health-fill" 
      :style="{ width: percent + '%' }" :class="hpColor"
    ></div>
  </div>
</template>

<style scoped>
.health-bar {
  width: 120px;
  min-height: 5px;
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

.hp-high {
  background: #28d428;
}

.hp-medium {
  background: #e6d421;
}

.hp-low {
  background: #d42828;
}
</style>
