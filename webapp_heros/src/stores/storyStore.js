import {
  defineStore
} from "pinia"
import chapitres from "../data/chapitres.json"
import {
  usePlayerStore
} from "@/stores/playerStore"

export const useStoryStore = defineStore("story", {
  // déclaration des variables du store
  state: () => ({
    currentChapter: null,     // chapitre actuel
    narrative: "",            // texte narratif du chapitre
    availableChoices: [],     // choix disponibles à l’écran
    chapitres: chapitres,     // données des chapitres importées du JSON
    history: [],              // historique des choix faits

    // images de fin selon les différentes conclusions de l’histoire
    imagesFin: [
      {
        id: 0,
        name: "finInterview",
        img: new URL('@/assets/Images/Scenes/Fins/AhmedInterview.jpg', import.meta.url).href
      },
      {
        id: 1,
        name: "Haxan Bloodlust",
        img: new URL('@/assets/Images/Scenes/Fins/BloodLustHaxanWin.jpg', import.meta.url).href
      },
      {
        id: 2,
        name: "Victoire - Breaking News",
        img: new URL('@/assets/Images/Scenes/Fins/BreakingNewsVictory.png', import.meta.url).href
      },
      {
        id: 3,
        name: "Défaite - Colonnel Canada possédé",
        img: new URL('@/assets/Images/Scenes/Fins/ColCanHaxanVictory.jpg', import.meta.url).href
      },
      {
        id: 4,
        name: "Défaite - Le loup apprivoisé",
        img: new URL('@/assets/Images/Scenes/Fins/Cursed.png', import.meta.url).href
      },
      {
        id: 5,
        name: "Défaite - Le Cyborg explose",
        img: new URL('@/assets/Images/Scenes/Fins/ExplodingRafEnd.jpg', import.meta.url).href
      },
      {
        id: 6,
        name: "Victoire - Statues d'or",
        img: new URL('@/assets/Images/Scenes/Fins/GoldenStatueCapAlex.jpg', import.meta.url).href
      },
      {
        id: 7,
        name: "Happy ending",
        img: new URL('@/assets/Images/Scenes/Fins/HappyEnding.png', import.meta.url).href
      },
      {
        id: 8,
        name: "Haxan conquiert tout",
        img: new URL('@/assets/Images/Scenes/Fins/HaxanConquering.png', import.meta.url).href
      },
      {
        id: 9,
        name: "Statues des héros",
        img: new URL('@/assets/Images/Scenes/Fins/MatRafStatues.png', import.meta.url).href
      },
      {
        id: 10,
        name: "Tacticien mange au resto",
        img: new URL('@/assets/Images/Scenes/Fins/MikeEatingEnding.png', import.meta.url).href
      },
      {
        id: 11,
        name: "Défaite - Haxan gagne",
        img: new URL('@/assets/Images/Scenes/Fins/SurrendedHerosEnd.jpg', import.meta.url).href
      },
      {
        id: 12,
        name: "Univers reset",
        img: new URL('@/assets/Images/Scenes/Fins/UniverseReset.png', import.meta.url).href
      },
      {
        id: 13,
        name: "Vortex du magicien",
        img: new URL('@/assets/Images/Scenes/Fins/VortexEnd.jpg', import.meta.url).href
      },
    ],

    // endingMap = associe un ID de fin à l’index d’une image dans imagesFin
    endingMap: {
      "85": 5,
      "127": 0,
      "128": 7,
      "130": 11,
      "131": 8,
      "132": 6,
      "133": 4,
      "134": 13,
      "135": 3,
      "136": 12,
      "1000": 10,
      "1100": 11,
      "1200": 12,
      "1300": 13,
    },
  }),

  // getters = comme computed : ici on retourne l’image correspondant à une fin
  getters: {
    endingImage: (state) => {
      return (endingId) => {
        // récupère l’index dans endingMap
        const index = state.endingMap[endingId];
        // retourne l’image correspondante si elle existe
        return index !== undefined ? state.imagesFin[index] : null;
      };
    }
  },

  actions: {
    // recharge les chapitres depuis le JSON (si besoin)
    loadChapters() {
      this.chapitres = chapitres
    },

    // change de chapitre selon l’ID passé en argument
    goToChapter(id) {
      const chapterId = String(id)
      const chapter = this.chapitres[chapterId]

      // si le chapitre n’existe pas → message d’erreur
      if (!chapter) {
        console.warn("Chapter not found:", chapterId)
        return
      }

      // ajoute ce chapitre à l’historique
      this.history.push({
        chapter: chapterId
      })

      // applique le texte du chapitre
      this.currentChapter = chapterId
      this.narrative = chapter.texte || ""

      // selon si le chapitre a des choix, un nextChapter, ou rien → configure les choix affichés
      if (chapter.choix && chapter.choix.length > 0) {
        // si choix normaux
        this.availableChoices = chapter.choix

      } else if (chapter.nextChapter) {
        // si un seul chapitre suivant automatique
        this.availableChoices = [{
          id: 0,
          text: "Continuer",
          nextChapter: chapter.nextChapter
        }]

      } else {
        // aucun choix → fin ou scène spéciale
        this.availableChoices = []
      }

      // si le chapitre inflige des dégâts
      if (chapter.damage) {
        // récupère le store des joueurs
        const players = usePlayerStore()

        // applique chaque dégât au bon personnage
        for (const perso in chapter.damage) {
          players.damage[perso] += chapter.damage[perso]
        }

        // applique les dégâts et met à jour les sprites
        players.applyDamage()
      }

      // si le chapitre change l'état "active" des personnages
      if (chapter.active) {
        const players = usePlayerStore()

        // applique les nouveaux états actifs
        for (const perso in chapter.active) {
          players.active[perso] = chapter.active[perso]
        }

        players.CheckActive()
      }
    },

    // fonction appelée lorsqu’un joueur choisit une option
    makeChoice(choice) {
      // ajoute le choix dans l’historique
      this.history.push({
        chapter: this.currentChapter,
        choice: choice.text,
        nextChapter: choice.nextChapter || null
      })

      // si le choix mène à un autre chapitre → on y va
      if (choice.nextChapter) {
        this.goToChapter(choice.nextChapter)
      }
    },

    // reset complet du store
    reset() {
      this.$reset();
    }
  }
})
