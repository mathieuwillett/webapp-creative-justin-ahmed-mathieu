// stores/audioStore.js
import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
  state: () => ({
    audio: null,
    isMuted: true,
    volume: 1, // 0 to 1
  }),

  actions: {
    init() {
      if (!this.audio) {
        this.audio = new Audio("/Audios/Menu.mp3"); // file in /public
        this.audio.loop = true;
        this.audio.volume = this.volume;
        this.audio.muted = this.isMuted;
      }
    },

    playMusic() {
      this.init();
      this.audio.play();
      this.audio.volume = 0.1;
    },

    pauseMusic() {
      if (this.audio) this.audio.pause();
    },

    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.audio) this.audio.muted = this.isMuted;
    },

    setVolume(value) {
      this.volume = value;
      if (this.audio) this.audio.volume = value;
    },
  },
});
