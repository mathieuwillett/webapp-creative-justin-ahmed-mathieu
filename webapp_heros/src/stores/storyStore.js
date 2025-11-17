import { defineStore } from "pinia"
import chapitres from "../data/chapitres.json"

export const useStoryStore = defineStore("story", {
  state: () => ({
    currentChapter: null,
    narrative: "",
    availableChoices: [],
    chapitres: chapitres // make sure this is exactly your imported JSON
  }),
  actions: {
    loadChapters() {
      // not necessary if already imported
      this.chapitres = chapitres
    },
    goToChapter(id) {
      const chapterId = String(id)
      const chapter = this.chapitres[chapterId]
      if (!chapter) {
        console.warn("Chapter not found:", chapterId)
        return
      }
      this.currentChapter = chapterId
      this.narrative = chapter.texte || ""
      if (chapter.choix && chapter.choix.length > 0) {
        this.availableChoices = chapter.choix
      } else if (chapter.nextChapter) {
        this.availableChoices = [{ id: 0, text: "Continuer", nextChapter: chapter.nextChapter }]
      } else {
        this.availableChoices = []
      }
      console.log("Chapter loaded:", this.narrative, this.availableChoices)
    },
    makeChoice(choice) {
      if (choice.nextChapter) this.goToChapter(choice.nextChapter)
    }
  }
})
