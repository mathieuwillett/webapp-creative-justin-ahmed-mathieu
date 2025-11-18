<script setup>
import { useCharactersStore } from '@/stores/imagesStore.js'

const store = useCharactersStore()
</script>

<template>
  <div class="screen">
    <div class="wrapper">
      <div 
        class="personnages"
        v-for="(personnage, index) in store.characters"
        :key="index"
      >
        <img :src="personnage.img" :alt="personnage.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.screen {
    background-color: lightgray;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid 2px black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.personnages {
    background-color: red;
    height: 20vh;
    border: solid 2px black;
    
}

.wrapper {
    display: flex;
    justify-content: space-around;
    bottom: 0;
    width: 100%;
}

img {
  height: 100%;
  width:auto;
}
</style>