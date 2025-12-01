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
    imagesFin: [
      {
        id: 0,
        name: "finInterview",
        img: "/Images/Scenes/Fins/AhmedInterview.jpg"
      },
      {
        id: 1,
        name: "Haxan Bloodlust",
        img: "/Images/Scenes/Fins/BloodLustHaxanWin.jpg"
      },
      {
        id: 2,
        name: "Victoire - Breaking News, les héros aux nouvelles",
        img: "/Images/Scenes/Fins/BreakingNewsVictory.png"
      },
      {
        id: 3,
        name: "Défaite - Colonnel Canada possédé par Haxan",
        img: "/Images/Scenes/Fins/ColCanHaxanVictory.jpg"
      },
      {
        id: 4,
        name: "Défaite - Le loup apprivoisé ",
        img: "/Images/Scenes/Fins/Cursed.png"
      },
      {
        id: 5,
        name: "Défaite - Le Cyborg Explose ",
        img: "/Images/Scenes/Fins/ExplodingRafEnd.jpg"
      },
      {
        id: 6,
        name: "Victoire - Capitaine Québec et Le Magicien ont une statue d'or à leurs effigies",
        img: "/Images/Scenes/Fins/GoldenStatueCapAlex.jpg"
      },
      {
        id: 7,
        name: "Victoire - Et l'homme fonda sa famille et vécurent heureux jusqu'à la fin des temps",
        img: "/Images/Scenes/Fins/HappyEnding.png"
      },
      {
        id: 8,
        name: "Défaite - Haxan décima la race humaine et changea de planète dans sa soif de conquète",
        img: "/Images/Scenes/Fins/HaxanConquering.png"
      },
      {
        id: 9,
        name: "Victoire - Le Barbare et Le Cyborg ont une statue d'or à leurs effigies",
        img: "/Images/Scenes/Fins/MatRafStatues.png"
      },
      {
        id: 10,
        name: "Victoire - Le Tacticien fête la victoire en mangeant au restaurant",
        img: "/Images/Scenes/Fins/MikeEatingEnding.png"
      },
      {
        id: 11,
        name: "Défaite - Haxan a gagné",
        img: "/Images/Scenes/Fins/SurrendedHerosEnd.jpg"
      },
            {
        id: 12,
        name: "Neutre - L'univers est reset par le magicien",
        img: "/Images/Scenes/Fins/UniverseReset.png"
      },
            {
        id: 13,
        name: "Défaite - L'univers est détruit par le vortex du magicien",
        img: "/Images/Scenes/Fins/VortexEnd.jpg"
      },
    ]
  }),

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