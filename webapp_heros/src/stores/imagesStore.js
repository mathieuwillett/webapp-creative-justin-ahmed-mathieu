import { defineStore } from 'pinia'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [
      { id: 1, name: "Homme", img: "/Images/Ahmed/PixelAhmed.png" },
      { id: 2, name: "Tacticien", img: "/Images/Mike/PixelMike.png" },
      { id: 3, name: "CapQC", img: "/Images/CapitaineQuebec/PixelCap.png" },
      { id: 4, name: "Magicien", img: "/Images/Alex/PixelAlex.png" },
      { id: 5, name: "Barbare", img: "/Images/Mathieu/PixelMathieu.png" },
      { id: 6, name: "Cyborg", img: "/Images/Raf/PixelRaf.png" },
      { id: 7, name: "Loup", img: "/Images/Emeryk/PixelEmeryk.png" },
      { id: 8, name: "Modelisateur", img: "/Images/Elie/PixelElie.png" },
      { id: 13, name: "Haxan", img: "/Images/Haxan/PixelHaxan.png" },
      // …
    ]
  })
})
