<script setup>
import { usePlayerStore } from "@/stores/playerStore.js";
const store = usePlayerStore();

</script>



<template>
  <div class="screen">
    <div class="groups">
      <div class="wrapper">
      <div
        class="personnages"
        v-for="(personnage, index) in store.images.filter(p => p.name !== 'Haxan')"
        :key="index" :class="{absent: store.active[personnage.name] == false}"
      >
        <img :src="personnage.img" :alt="personnage.name" :class="{ dead: store.hp[personnage.name] <= 0 }"/>
      </div>
    </div>
    

    <div class="wrapper">
  <div class="personnages" v-for="(personnage, index) in store.images.filter(p => p.name == 'Haxan')"
    :key="index">
    <img :src="personnage.img" :alt="personnage.name" />
  </div>
</div>


  

      <!-- <div
        class="haxan"
        v-for="(personnage, index) in store.images"
        :key="8"
      > <img :src="personnage.img" :alt="personnage.name">
    </div> -->
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
  /* background-color: red; */
  height: 12vw;
  width: 8vw;
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 0 0.2vw;
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
  width: auto;
}

img.dead {
  filter: grayscale(100%) brightness(120%);
}

div.absent {
  display: none;
}
</style>
