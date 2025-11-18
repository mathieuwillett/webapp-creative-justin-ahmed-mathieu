import { defineStore } from "pinia"

export const usePlayerStore = defineStore('player', {
  state: () => ({
    hp: {
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
    },

    damage: {
      Homme: 0,
      Tacticien: 0,
      CapQC: 0,
      Magicien: 0,
      Barbare: 0,
      Cyborg: 0,
      Loup: 0,
      Modelisateur: 0,
      CapCanada: 0,
      HommeUltra: 0,
      HommeEclipse: 0,
      Haxan: 0
    },

    active: {
      Homme: null,
      Tacticien: null,
      CapQC: null,
      Magicien: null,
      Barbare: null,
      Cyborg: null,
      Loup: null,
      Modelisateur: null,
      CapCanada: null,
      HommeUltra: null,
      HommeEclipse: null,
      Haxan: null
    }
  }),

  //getters c'est comme computed dans une app vue
  getters: {
    canAccessEnding: () => {
    }
  },

  actions: {
    applyDamage() {
      console.log("Dégâts reçus :", this.damage)

      this.hp.Homme -= this.damage.Homme
      this.hp.Tacticien -= this.damage.Tacticien
      this.hp.CapQC -= this.damage.CapQC
      this.hp.Magicien -= this.damage.Magicien
      this.hp.Barbare -= this.damage.Barbare
      this.hp.Cyborg -= this.damage.Cyborg
      this.hp.Loup -= this.damage.Loup
      this.hp.Modelisateur -= this.damage.Modelisateur
      this.hp.CapCanada -= this.damage.CapCanada
      this.hp.HommeUltra -= this.damage.HommeUltra
      this.hp.HommeEclipse -= this.damage.HommeEclipse
      this.hp.Haxan -= this.damage.Haxan

      console.log("HP après dégâts :", this.hp)

      this.damage.Homme = 0
      this.damage.Tacticien = 0
      this.damage.CapQC = 0
      this.damage.Magicien = 0
      this.damage.Barbare = 0
      this.damage.Cyborg = 0
      this.damage.Loup = 0
      this.damage.Modelisateur = 0
      this.damage.CapCanada = 0
      this.damage.HommeUltra = 0
      this.damage.HommeEclipse = 0
      this.damage.Haxan = 0
    },
    CheckActive() {

      console.log("Personnages actifs :", this.active)
      this.active.Homme = this.active.Homme
      this.active.Tacticien = this.active.Tacticien
      this.active.CapQC = this.active.CapQC
      this.active.Magicien = this.active.Magicien
      this.active.Barbare = this.active.Barbare
      this.active.Cyborg = this.active.Cyborg
      this.active.Loup = this.active.Loup
      this.active.Modelisateur = this.active.Modelisateur
      this.active.CapCanada = this.active.CapCanada
      this.active.HommeUltra = this.active.HommeUltra
      this.active.HommeEclipse = this.active.HommeEclipse
      this.active.Haxan = this.active.Haxan
    },

    //Modifie dynamiquement les images des héros selon leurs points de vie actuels.
    updateHealth() {
        for (const [name, hp] of Object.entries(this.hp)) {
    
          if (hp < 30) {
            console.log(`${name} is in critical danger!`);
            // mettre l'image wounded mad
          } 
          else if (hp < 60) {
            console.log(`${name} is getting weak.`);
            // mettre l'image wounded
          }
    
        }
      
    }
  }
})
