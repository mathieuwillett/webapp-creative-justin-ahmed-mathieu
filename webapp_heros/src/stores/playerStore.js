import {
  defineStore
} from "pinia"


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
      Haxan: 100,
      MagicienEclipse: 100
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
      Homme: false,
      Tacticien: false,
      CapQC: false,
      Magicien: false,
      Barbare: false,
      Cyborg: false,
      Loup: false,
      Modelisateur: false,
      CapCanada: false,
      HommeUltra: false,
      HommeEclipse: false,
      Haxan: false,
      MagicienEclipse: false
    },

    images: [{
        id: 0,
        name: "HommeEclipse",
        img: "../Images/AhmedEclipse/PixelAhmedEclipse.png",
        lightWound: "../Images/AhmedEclipse/PixelAhmedEclipse.png",
        Wounded: "../Images/AhmedEclipse/PixelAhmedEclipseWounded.png",
        HeavyWound: "../Images/AhmedEclipse/PixelAhmedEclipseWounded.png",
        title: "L'Homme Éclipse"
      },
      {
        id: 1,
        name: "Homme",
        img: "/Images/Ahmed/PixelAhmed.png",
        lightWound: "../Images/Ahmed/PixelAhmedLightWound.png",
        Wounded: "../Images/Ahmed/PixelAhmedWounded.png",
        HeavyWound: "../Images/Ahmed/PixelAhmedHeavyWound.png",
        title: "L'Homme"
      },
      {
        id: 2,
        name: "Tacticien",
        img: "../Images/Mike/PixelMike.png",
        lightWound: "../Images/Mike/PixelMikeLightWound.png",
        Wounded: "../Images/Mike/PixelMikeWounded.png",
        HeavyWound: "../Images/Mike/PixelMikeHeavyWound.png",
        title: "Le Tacticien"
      },
      {
        id: 3,
        name: "CapQC",
        img: "../Images/CapitaineQuebec/PixelCap.png",
        lightWound: "../Images/CapitaineQuebec/PixelCapLightWound.png",
        Wounded: "../Images/CapitaineQuebec/PixelCapWounded.png",
        HeavyWound: "../Images/CapitaineQuebec/PixelCapHeavyWound.png",
        title: "Capitaine Québec"
      },
      {
        id: 4,
        name: "Magicien",
        img: "../Images/Alex/PixelAlex.png",
        lightWound: "../Images/Alex/PixelAlex.png",
        Wounded: "../Images/Alex/PixelAlexWounded.png",
        HeavyWound: "../Images/Alex/PixelAlexHeavyWound.png",
        title: "Le Magicien"
      },
      {
        id: 5,
        name: "Barbare",
        img: "../Images/Mathieu/PixelMathieu.png",
        lightWound: "../Images/Mathieu/PixelMathieuLightWound.png",
        Wounded: "../Images/Mathieu/PixelMathieuWounded.png",
        HeavyWound: "../Images/Mathieu/PixelMathieuHeavyWound.png",
        title: "Le Barbare"
      },
      {
        id: 6,
        name: "Cyborg",
        img: "../Images/Raf/PixelRaf.png",
        lightWound: "../Images/Raf/PixelRafLightWound.png",
        Wounded: "../Images/Raf/PixelRafWounded.png",
        HeavyWound: "../Images/Raf/PixelRafHeavyWound.png",
        title: "Le Cyborg"
      },
      {
        id: 7,
        name: "Loup",
        img: "../Images/Emeryk/PixelEmeryk.png",
        lightWound: "../Images/Emeryk/PixelEmerykLightWound.png",
        Wounded: "../Images/Emeryk/PixelEmerykLightWound.png",
        HeavyWound: "../Images/Emeryk/PixelEmerykWounded.png",
        title: "Le Loup"
      },
      {
        id: 8,
        name: "Modelisateur",
        img: "../Images/Elie/PixelElie.png",
        lightWound: "../Images/Elie/PixelElieLightWound.png",
        Wounded: "../Images/Elie/PixelElieWounded.png",
        HeavyWound: "../Images/Elie/PixelElieHeavyWound.png",
        title: "Le Modélisateur"
      },
      {
        id: 9,
        name: "Haxan",
        img: "../Images/Haxan/PixelHaxan.png",
        lightWound: "../Images/Haxan/PixelHaxanLightWound.png",
        Wounded: "../Images/Haxan/PixelHaxanLightWound.png",
        HeavyWound: "../Images/Haxan/PixelHaxanHeavyWound.png",
        title: "Haxan, dieu des dieux"
      },
      {
        id: 10,
        name: "HommeUltra",
        img: "../Images/AhmedUltra/PixelAhmedUltra.png",
        lightWound: "../Images/AhmedUltra/PixelAhmedUltra.png",
        Wounded: "../Images/AhmedUltra/PixelAhmedUltraWounded.png",
        HeavyWound: "../Images/AhmedUltra/PixelAhmedUltraHeavyWound.png",
        title: "L'Homme Ultra"
      },
      {
        id: 12,
        name: "MagicienEclipse",
        img: "../Images/Alex/PixelAlexEclipse.png",
        title: "Le Magicien (Éclipse)",
        lightWound: "../Images/Alex/PixelAlexEclipse.png",
        Wounded: "../Images/Alex/PixelAlexEclipseWounded.png",
        HeavyWound: "../Images/Alex/PixelAlexEclipseWounded.png",
      },

      // …
    ]
  }),



  //getters c'est comme computed dans une app vue
  getters: {
    canAccessEnding: () => {}
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
      this.hp.MagicienEclipse = this.hp.Magicien

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

      // Logique pour updater les images affichées pour correspondre aux dégâts subits
      for (const character of Object.keys(this.hp)) {
        const hp = this.hp[character];
        const imagePersonnage = this.images.find(c => c.name === character);

        if (!imagePersonnage) continue;



        if (hp > 50 && hp <= 70) {
          // Change l'image actuelle du personnage pour sa version lightWound
          imagePersonnage.img = imagePersonnage.lightWound;

        } else if (hp > 20 && hp <= 50) {

          // Change l'image actuelle du personnage pour sa version Wounded
          imagePersonnage.img = imagePersonnage.Wounded;


        } else if (hp <= 20) {

          // Change l'image actuelle du personnage pour sa version Heavy Wound
          imagePersonnage.img = imagePersonnage.HeavyWound;


        }
      }
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

    ResetStats() {
      this.hp.Homme = 100
      this.hp.Tacticien = 100
      this.hp.CapQC = 100
      this.hp.Magicien = 100
      this.hp.Barbare = 100
      this.hp.Cyborg = 100
      this.hp.Loup = 100
      this.hp.Modelisateur = 100
      this.hp.CapCanada = 100
      this.hp.HommeUltra = 100
      this.hp.HommeEclipse = 100
      this.hp.Haxan = 100

      this.active.Homme = false
      this.active.Tacticien = false
      this.active.CapQC = false
      this.active.Magicien = false
      this.active.Barbare = false
      this.active.Cyborg = false
      this.active.Loup = false
      this.active.Modelisateur = false
      this.active.CapCanada = false
      this.active.HommeUltra = false
      this.active.HommeEclipse = false
      this.active.Haxan = false
    },

    reset() {
      this.$reset()
    }



  }
})