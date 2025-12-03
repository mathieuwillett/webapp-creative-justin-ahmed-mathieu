import {
  defineStore
} from "pinia"
import chapitres from "../data/chapitres.json"
import {
  usePlayerStore
} from "@/stores/playerStore"

export const useStoryStore = defineStore("story", {
  state: () => ({
    currentChapter: null,
    narrative: "",
    availableChoices: [],
    chapitres: chapitres,
    history: [],
    imagesFin: [{
        id: 0,
        name: "finInterview",
        img: new URL('@/assets/Images/Scenes/Fins/AhmedInterview.jpg',
          import.meta.url).href
      },
      {
        id: 1,
        name: "Haxan Bloodlust",
        img: new URL('@/assets/Images/Scenes/Fins/BloodLustHaxanWin.jpg',
          import.meta.url).href
      },
      {
        id: 2,
        name: "Victoire - Breaking News",
        img: new URL('@/assets/Images/Scenes/Fins/BreakingNewsVictory.png',
          import.meta.url).href
      },
      {
        id: 3,
        name: "Défaite - Colonnel Canada possédé",
        img: new URL('@/assets/Images/Scenes/Fins/ColCanHaxanVictory.jpg',
          import.meta.url).href
      },
      {
        id: 4,
        name: "Défaite - Le loup apprivoisé",
        img: new URL('@/assets/Images/Scenes/Fins/Cursed.png',
          import.meta.url).href
      },
      {
        id: 5,
        name: "Défaite - Le Cyborg explose",
        img: new URL('@/assets/Images/Scenes/Fins/ExplodingRafEnd.jpg',
          import.meta.url).href
      },
      {
        id: 6,
        name: "Victoire - Statues d'or",
        img: new URL('@/assets/Images/Scenes/Fins/GoldenStatueCapAlex.jpg',
          import.meta.url).href
      },
      {
        id: 7,
        name: "Happy ending",
        img: new URL('@/assets/Images/Scenes/Fins/HappyEnding.png',
          import.meta.url).href
      },
      {
        id: 8,
        name: "Haxan conquiert tout",
        img: new URL('@/assets/Images/Scenes/Fins/HaxanConquering.png',
          import.meta.url).href
      },
      {
        id: 9,
        name: "Statues des héros",
        img: new URL('@/assets/Images/Scenes/Fins/MatRafStatues.png',
          import.meta.url).href
      },
      {
        id: 10,
        name: "Tacticien mange au resto",
        img: new URL('@/assets/Images/Scenes/Fins/MikeEatingEnding.png',
          import.meta.url).href
      },
      {
        id: 11,
        name: "Défaite - Haxan gagne",
        img: new URL('@/assets/Images/Scenes/Fins/SurrendedHerosEnd.jpg',
          import.meta.url).href
      },
      {
        id: 12,
        name: "Univers reset",
        img: new URL('@/assets/Images/Scenes/Fins/UniverseReset.png',
          import.meta.url).href
      },
      {
        id: 13,
        name: "Vortex du magicien",
        img: new URL('@/assets/Images/Scenes/Fins/VortexEnd.jpg',
          import.meta.url).href
      },
    ],

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

  getters: {
    endingImage: (state) => {
      return (endingId) => {
        const index = state.endingMap[endingId];
        return index !== undefined ? state.imagesFin[index] : null;
      };
    }
  },

  actions: {
    loadChapters() {
      this.chapitres = chapitres
    },

    goToChapter(id) {
      const chapterId = String(id)
      const chapter = this.chapitres[chapterId]

      if (!chapter) {
        console.warn("Chapter not found:", chapterId)
        return
      }

      this.history.push({
        chapter: chapterId
      })

      this.currentChapter = chapterId
      this.narrative = chapter.texte || ""

      if (chapter.choix && chapter.choix.length > 0) {
        this.availableChoices = chapter.choix
      } else if (chapter.nextChapter) {
        this.availableChoices = [{
          id: 0,
          text: "Continuer",
          nextChapter: chapter.nextChapter
        }]
      } else {
        this.availableChoices = []
      }


      if (chapter.damage) {
        const players = usePlayerStore()

        for (const perso in chapter.damage) {
          players.damage[perso] += chapter.damage[perso]
        }

        players.applyDamage()
      }

      if (chapter.active) {
        const players = usePlayerStore()

        for (const perso in chapter.active) {
          players.active[perso] = chapter.active[perso]
        }

        players.CheckActive()

      }
    },

    makeChoice(choice) {

      this.history.push({
        chapter: this.currentChapter,
        choice: choice.text,
        nextChapter: choice.nextChapter || null
      })

      if (choice.nextChapter) {
        this.goToChapter(choice.nextChapter)
      }
    },

    reset() {
      this.$reset();
    }
  }
})