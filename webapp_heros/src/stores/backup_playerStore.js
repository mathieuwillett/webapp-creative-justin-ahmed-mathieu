import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {

  //state c'est comme data dans une app vue
  state: () => ({
    playersHP: {
      Homme: 100,
      Tacticien: 100,
      CapQC: 100,
      Magicien: 100,
      Barbare: 100,
      Cyborg: 100,
      Loup: 100,
      Modelisateur: 100,
      CapCanada: 100,
      HommeUltra: 100,
      HommeEclipse: 100,
      Haxan: 100
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