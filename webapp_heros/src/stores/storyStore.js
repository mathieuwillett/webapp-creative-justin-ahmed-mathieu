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
        name: "haxanBloodlust",
        img: "/Images/Ahmed/PixelAhmed.png"
      },
      {
        id: 2,
        name: "Tacticien",
        img: "/Images/Mike/PixelMike.png"
      },
      {
        id: 3,
        name: "CapQC",
        img: "/Images/CapitaineQuebec/PixelCap.png"
      },
      {
        id: 4,
        name: "Magicien",
        img: "/Images/Alex/PixelAlex.png"
      },
      {
        id: 5,
        name: "Barbare",
        img: "/Images/Mathieu/PixelMathieu.png"
      },
      {
        id: 6,
        name: "Cyborg",
        img: "/Images/Raf/PixelRaf.png"
      },
      {
        id: 7,
        name: "Loup",
        img: "/Images/Emeryk/PixelEmeryk.png"
      },
      {
        id: 8,
        name: "Modelisateur",
        img: "/Images/Elie/PixelElie.png"
      },
      {
        id: 9,
        name: "Haxan",
        img: "/Images/Haxan/PixelHaxan.png"
      },
      {
        id: 10,
        name: "HommeUltra",
        img: "/Images/AhmedUltra/PixelAhmedUltra.png"
      },
      {
        id: 11,
        name: "MagicienEclipse",
        img: "/Images/Alex/PixelAlexEclipse.png"
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