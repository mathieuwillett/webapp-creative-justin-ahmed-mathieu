<script setup>
import { usePlayerStore } from "@/stores/playerStore.js";
import HealthBar from "@/components/layout/HealthBar.vue"
const store = usePlayerStore();


</script>



<template>
  <div class="screen">
    <div class="groups">
      <div class="wrapper">
        <div class="personnages" v-for="(personnage, index) in store.images.filter(p => p.name !== 'Haxan')"
          :key="index" :class="{ absent: store.active[personnage.name] == false }">
          <HealthBar :hp="store.hp[personnage.name]" :maxHp="100" class="health-bar-wrapper"/>
          <img :src="personnage.img" :alt="personnage.name" :class="{ dead: store.hp[personnage.name] <= 0 }" />
        </div>
      </div>


      <div class="wrapper">
        <div class="personnages" v-for="(personnage, index) in store.images.filter(p => p.name == 'Haxan')"
          :key="index">
          <HealthBar :hp="store.hp[personnage.name]" :maxHp="100" class="health-bar-wrapper"/>
          <img :class="{ dead: store.hp.Haxan <= 0 }" :src="personnage.img" :alt="personnage.name" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.screen {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}

.screen::before {
  content: "";
  inset: 0;
  background-image: url(@/assets/War2.png);
  background-size: contain;
  filter: blur(3px);
  position: absolute;
  z-index: -1;
}

.personnages {
  /*background-color: red; */
  height: 12vw;
  width: 8vw;
  user-select: none;
  display: flex;
  flex-direction: column; 
  align-items: center;     
  justify-content: flex-end;
  margin: 0 0.2vw;
}

.personnages img {
  flex: 1 1 auto;
}

.health-bar-wrapper {
  flex: 0 0 16px;        
  width: 100%;
  margin-bottom: 4px;
  order: -1;
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
}


.groups {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
}

img {
    height: 100%;
    object-fit: contain;
}


img.dead {
  filter: grayscale(100%) brightness(120%);
}

div.absent {
  display: none;
}
</style>
