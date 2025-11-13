import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {

    //state c'est comme data dans une app vue
    state: () => ({
        currentMusic: "",
        soundEffects: "",
        volume: "",
        isMuted: "",
    }),

    //actions c'est comme methods(fonctions) dans une app vue
    actions: {
        playMusic() {

        },

        playSound() {

        },

        toggleMute() {

        },

        setVolume() {

        }
    }
});