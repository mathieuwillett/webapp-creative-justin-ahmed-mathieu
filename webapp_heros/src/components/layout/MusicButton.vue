<script setup>
import { useAudioStore } from "@/stores/audioStore";

const audio = useAudioStore();

// Toggle le son
function toggleMusic() {
  audio.toggleMute();
}

// Crée les URLs pour les images dans le script (Vite)
const volumeImg = new URL('@/assets/Images/volume.png', import.meta.url).href;
const volumeMuteImg = new URL('@/assets/Images/volumeMute.png', import.meta.url).href;
</script>

<template>
  <button @click="toggleMusic()">
    <img :src="audio.isMuted ? volumeMuteImg : volumeImg" alt="Volume">
  </button>
</template>


<style scoped>
img {
  aspect-ratio: 1;
  height: 5vw;
  transition: transform 0.3s;
}

button {
  padding: 1vw 2vh;
  background-color: #FFA600;
  color: #111;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  box-shadow:
    0 0 0 6px #000,
    0 6px 0 rgba(0, 0, 0, 0.15);
  position: relative;
  user-select: none;
  transition: transform 120ms, filter 120ms;
}

button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image:
    radial-gradient(circle at 10% 10%, rgba(0, 0, 0, .25) 0 2px, transparent 2px),
    radial-gradient(circle at 60% 40%, rgba(0, 0, 0, .18) 0 3px, transparent 3px),
    radial-gradient(circle at 85% 80%, rgba(0, 0, 0, .12) 0 4px, transparent 4px);
  background-size: 8px 8px, 12px 12px, 20px 20px;
  opacity: 0.35;
  mix-blend-mode: overlay;
  pointer-events: none;
}

button:hover {
  transform: translateY(-1vh);
  filter: brightness(1.05);
}

@media screen and (max-width: 1400px) {
  button {
    width: 20vw;
    height: 12vh;
  }
}
</style>
