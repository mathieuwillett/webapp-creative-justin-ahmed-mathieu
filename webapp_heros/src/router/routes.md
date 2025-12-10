| Route | Composant | Description | Params |
|-------|-----------|-------------|--------|
| / | MenuView.vue | Menu principal | - |
| /start | StartView.vue | Choix de base concernant le personnage de début | - |
| /chapter/:id | ChapterView.vue | Vue d’un chapitre/scène | id du chapitre |
| /ending/:id | EndingView.vue | Vue d’une fin | id de la fin |
| /perso | PersonnagesView.vue | Vue de la liste des personnages | - |
| /:pathMatch(.*)* | redirect → MenuView.vue | (404) redirige vers le menu | - |


## 4.4 Gestion de l'état (Pinia)
Stores prévus:

useStoryStore
State: currentChapterId, visitedChapters, storyData, availableChoices
Actions: loadChapter(), makeChoice(), goToChapter()
Getters: currentChapter, isChapterUnlocked()

usePlayerStore
State: playerName, karma, stats, inventory, flags, relationships
Actions: addToInventory(), updateStat(), setFlag(), updateRelationship()
Getters: hasItem(), getRelationship(), canAccessEnding()

useSaveStore
State: saveSlots (array de 3 slots)
Actions: saveGame(), loadGame(), deleteSave(), getSaveInfo()
Getters: hasSaves, latestSave

useAudioStore (optionnel)
State: currentMusic, soundEffects, volume, isMuted
Actions: playMusic(), playSound(), toggleMute(), setVolume()
Stores utilisés :


#### 1. useStoryStore (implémenté dans storyStore.js)

State :
currentChapter → identifiant du chapitre en cours
narrative → texte narratif du chapitre actuel
availableChoices → liste des choix disponibles pour le joueur
chapitres → données chargées depuis chapitres.json
history → historique des chapitres et des choix effectués
imagesFin → tableau des images associées aux fins possibles
endingMap → mapping entre IDs de fin et index des images correspondantes

Getters :
endingImage(endingId) → retourne l’image correspondant à un ID de fin via endingMap

Actions :
loadChapters() → recharge les données des chapitres depuis chapitres.json
goToChapter(id) → change de chapitre, met à jour le texte narratif, les choix disponibles, applique les dégâts et active/désactive des personnages via usePlayerStore
makeChoice(choice) → enregistre le choix dans l’historique et bascule vers le chapitre suivant si défini
reset() → réinitialise le store à son état initial ($reset())
---

#### 2. usePlayerStore (implémenté dans playerStore.js)

State :
hp → points de vie par personnage
damage → dégâts subis par personnage
active → booléen indiquant si un personnage est actif ou non

Actions :
CheckActive() → affiche et met à jour les personnages actifs
ResetStats() → réinitialise les points de vie et l’état actif de tous les personnages
reset() → remet le store à son état initial ($reset())


---

#### 4. useAudioStore (implémenté dans audioStore.js)

State :
audio → instance Audio
isMuted → booléen (muet ou non)
volume → nombre (volume global)
currentTrack → nom du morceau actuel

Actions :
init(track) → initialise l’instance audio et optionnellement définit un morceau
setTrack(track) → change le morceau en cours, charge et joue si non muet
playMusic(track = "Menu.mp3") → lance la musique (par défaut Menu.mp3)
pauseMusic() → met la musique en pause
toggleMute() → bascule entre muet et non muet, relance la lecture si nécessaire
setVolume(value) → ajuste le volume global