import { defineStore } from 'pinia';

export const useSaveStore = defineStore('save', {

  //state c'est comme data dans une app vue
  state: () => ({
    saveSlots: []
  }),

  //getters c'est comme computed dans une app vue
  getters: {
    hasSaves: () => {
    },

    latestSave: () => {
    }
  },

  //actions c'est comme methods(fonctions) dans une app vue
  actions: {
    saveGame() {

    },

    loadGame() {

    },

    deleteSave() {

    },

    getSaveInfo() {

    }
  }
});