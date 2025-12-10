// src/stores/audioStore.js
import {
  defineStore
} from "pinia";

export const useAudioStore = defineStore("audio", {
  // déclaration des variables
  state: () => ({
    audio: null, // instance Audio
    isMuted: true, // état muet
    volume: 1, // volume global
    currentTrack: null, // nom du morceau actuel
  }),

  // fonctions
  actions: {
    init(track = null) {
      //si l'audio n'est pas activé, fait le suivant:
      if (!this.audio) {
        this.audio = new Audio();
        //active le loop audio
        this.audio.loop = true;
        // volume = 1
        this.audio.volume = this.volume;
        this.audio.muted = this.isMuted;
      }

      //permet de définir une traque audio à jouer
      if (track) {
        this.setTrack(track);
      }
    },

    setTrack(track) {
      //si la traque appliqué est la même, ne fait rien
      if (this.currentTrack === track) return;
    
      // si l'audio joue et que l'audio n'est pas sur pause, pause l'audio
      if (this.audio && !this.audio.paused) this.audio.pause();
    
      // applique à "currentTrack la nouvelle track"
      this.currentTrack = track;
    
      // Correct Vite path resolution
      const audioURL = new URL(`../assets/Audios/${track}`, import.meta.url).href;
    
      // change l'url de l'audio pour le nouvel url
      if (this.audio) {
        this.audio.src = audioURL;
        this.audio.load();
      }
    },

    // joue la traque "Menu.mp3"
    playMusic(track = "Menu.mp3") {
      this.init(track);

      if (this.audio) {
        this.audio.volume = this.volume;
        this.audio.muted = this.isMuted;

        if (!this.isMuted) {
          this.audio.play().catch(err => console.warn("Audio failed to play:", err));
        }
      }
    },

    // si l'audio joue, pause.
    pauseMusic() {
      if (this.audio) this.audio.pause();
    },

    // active le mute de l'audio
    toggleMute() {
      this.isMuted = !this.isMuted;

      if (this.audio) this.audio.muted = this.isMuted;

      //envoie un message en cas d'erreur
      if (!this.isMuted && this.audio && this.currentTrack) {
        this.audio.play().catch(err => console.warn("Audio failed to play:", err));
      }
    },

    // fonction pour ajuster le volume (n'est plus utilisée)
    setVolume(value) {
      this.volume = value;

      if (this.audio) this.audio.volume = value;
    }
  }
});