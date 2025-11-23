import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
  state: () => ({
    audio: null,
    isMuted: true,
    volume: 1,
    currentTrack: null,
  }),

  actions: {
    init(track = null) {
      if (!this.audio) {
        this.audio = new Audio(); 
        this.audio.loop = true;
        this.audio.volume = this.volume;
        this.audio.muted = this.isMuted;
      }

      if (track) {
        this.setTrack(track);
      }
    },

    setTrack(track) {
  if (this.currentTrack !== track) {
    if (this.audio && !this.audio.paused) {
      this.audio.pause();
    }

    this.currentTrack = track;

    if (this.audio) {
      this.audio.src = `/Audios/${track}`;
      this.audio.load();
      if (!this.isMuted) {
        this.audio.play().catch(err => {
          console.warn("Audio failed to play:", err);
        });
      }
    }
  }
},

    playMusic(track = "Menu.mp3") {
  this.init(track);
  this.audio.volume = this.volume;
  this.audio.muted = this.isMuted;

  if (!this.isMuted) {
    this.audio.play().catch(err => console.warn(err));
  }
},

    pauseMusic() {
      if (this.audio) this.audio.pause();
    },

    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.audio) this.audio.muted = this.isMuted;

      if (!this.isMuted && this.audio && this.currentTrack) {
        this.audio.play().catch((err) => {
          console.warn("Audio failed to play:", err);
        });
      }
    },

    setVolume(value) {
      this.volume = value;
      if (this.audio) this.audio.volume = value;
    }
  },
});
