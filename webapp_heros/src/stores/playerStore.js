import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {

  //state c'est comme data dans une app vue
  state: () => ({
    mikVie: "",
    alexVie: "",
    rafVie: "",
    ahmedVie: "",
    justinVie: "",
    mathVie: "",
    elieVie: "",
    mrickVie: "",
  }),

  //getters c'est comme computed dans une app vue
  getters: {
    canAccessEnding: () => {
    }
  },

  //actions c'est comme methods(fonctions) dans une app vue
  actions: {
    updateHealth() {

    }
  }
});