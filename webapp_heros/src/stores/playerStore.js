import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {

  //state c'est comme data dans une app vue
  state: () => ({
    playersHP: {
      mik: 100,
      alex: 100,
      raf: 100,
      ahmed: 100,
      justin: 100,
      math: 100,
      elie: 100,
      mrick: 100,
    }
  }),

  //getters c'est comme computed dans une app vue
  getters: {
    canAccessEnding: () => {
    }
  },

  //actions c'est comme methods(fonctions) dans une app vue
  actions: {
    updateHealth() {
        for (const [name, hp] of Object.entries(this.playersHP)) {
    
          if (hp < 30) {
            console.log(`${name} is in critical danger!`);
            // do something for HP < 30
          } 
          else if (hp < 60) {
            console.log(`${name} is getting weak.`);
            // do something for HP < 60
          }
    
        }
      
    }
  }
});