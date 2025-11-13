import { defineStore } from 'pinia';

export const useStoryStore = defineStore('story', {

  //state c'est comme data dans une app vue
  state: () => ({
    currentChapterId: "",
    visitedChapters: "",
    currentRoomId: "",
    visitedRooms: "",
    storyData: "",
    availableChoices: ""
  }),

  //getters c'est comme computed dans une app vue
  getters: {
    currentChapter: () => {
    },

    isChapterUnlocked: () => {
    },

    currentRoom: () => {
    },

    isRoomUnlocked: () => {
    },
  },

  //actions c'est comme methods(fonctions) dans une app vue
  actions: {
    loadChapter() {

    },

    makeChoice() {

    },

    goToChapter() {

    },

    loadRoom() {

    },

    goToRoom() {

    }
  }
});