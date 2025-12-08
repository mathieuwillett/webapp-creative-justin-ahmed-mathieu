# Cahier de Charges: Trace ton chemin

## 📌 Informations du Projet

*Nom du projet:* [Les héros de l'éclipse]  
*Nom de l'équipe:* [La super équipe]  
*Membres:*

- [Justin Montpetit] - Chef de projet / [Architecture]
- [Ahmed Kaissoumi] - [Responsable design et animations]
- [Mathieu Willett] - [Responsable données et système]

*Date de début:* [17 octobre]  
*Date de livraison finale:* [10 décembre]  
*Version du document:* 1.0


## 🎯 1. Présentation du Projet

### 1.1 Concept général
une histoire narrative dans laquelle chaque choix à une incidence réelle sur l'histoire et changera le futur des héros. Dans un univers de science-fiction avec des super-héros


Décrivez en 2-3 paragraphes le concept de votre histoire interactive:

- Aventure narrative de science-fiction
- Un homme fait un grabuge dans la ville, les héros sont appelés pour l'arrêter
- Les personnages sont des héros nommés les "héros de l'éclipse"
- Méchanisme de choix par moral & actions


### 1.2 Public cible

- *Âge:* [16 à 30 ans]
- *Profil:* [Amateurs de récits de style super-héros et de farfelu]
- *Niveau technique:* [Utilisateurs grand public]
- *Temps de lecture estimé:* [10-15 minutes]

### 1.3 Objectifs du projet

- [x] Créer une expérience narrative immersive et émotionnelle
- [x] Développer un système de choix avec conséquences réelles
- [x] Implémenter un système de sauvegarde de progression
- [x] Démontrer la maîtrise de Vue.js, GSAP et Pinia
- [x] Créer une interface accessible et responsive



## 📖 2. Architecture Narrative

### 2.1 Synopsis détaillé

Racontez votre histoire en 1-2 paragraphes (sans spoiler les fins):


[un appel est reçu par les héros de l'éclipse, indiquant qu'un mystérieux homme fait des dommages à la ville. On envoit alors un duo de héros voir ce qui se passe.
S'en suit un combat épique et difficile, ne pouvant mener qu'à un seul vainqueur.]

### 2.2 Arbre narratif

Dessinez ou décrivez l'arbre de décisions de votre histoire:

*Structure globale:*

<img width="7342" height="3897" alt="Lore" src="https://github.com/user-attachments/assets/f9a0f4f2-95a1-4e71-984e-3b8d3eac80a6" />


### 2.3 Liste des chapitres/scènes

Minimum 8 niveaux (chapitres/scènes). Listez-les avec leurs informations:

| # | Nom du chapitre | Type | Description courte | Choix proposés | Conséquences |
|---|----------------|------|-------------------|----------------|--------------|
| 1 | [Alerte] | Linéaire | Introduction aux personnages et au contexte | choisir équipe | N/A |
| 2 | [Rencontre] | Choix | rencontre avec l'homme | 2 choix (variés) | Branche 1 ou 2 |
| 3 | [Contact] | Choix | début des affrontements | 2 choix (variés) | Branche 1 ou 2 |
| 4 | [Urgence] | Choix | sentiment d'urgence d'agir | 2 choix (variés) | Branche 1 ou 2 |
| 5 | [Rassemblement] | Choix | Rassemblement de l'équipe | 2 choix (variés) | Branche 1 ou 2 |
| 6 | [Combat] | Choix | choix stratégique de combat | 2 choix (variés) | Branche 1 ou 2 |
| 7 | [Dénouement] | Choix | choix finaux déterminant la fin | 2 choix (variés) | Branche 1 ou 2 |
| 8 | [Fin] | Linéaire | fin de l'histoire | Aucun | N/A |

### 2.4 Fins possibles

Listez toutes les fins de votre histoire (minimum 3, idéal 4-6):

<small>(les noms des fins énoncées ici ne sont que des exemples)</small>

| # | Nom de la fin | Condition pour l'atteindre | Type (bonne/mauvaise/neutre) |
|---|--------------|---------------------------|------------------------------|
| 1 | [Fin malheureuse] | Haxan vient à bout de tout les héros | Mauvaise |
| 2 | [Fin maléfique] | Alex a fini corrompu | Mauvaise |
| 3 | [Fin trahison] | Ahmed a trahis l'équipe pour un univers alternatif | Mauvaise |
| 4 | [Fin heureuse] | Avoir vaincu Haxan | Bonne |
| 5 | [Fin lâche] | Les héros ont abandonnés face à Haxan | Mauvaise |
| 6 | [Fin sacrifice] | Ahmed s'est sacrifié pour sauver la terre | Bonne |
| 7 | [Fin anti-101] | Colonel Canada (Capitaine QC) rejoint Haxan, détruisant la planète et les humains | Mauvaise |
| 8 | [Fin alternative 1] | Raf fait sauté la terre et haxan d'un coup | Mauvaise |
| 9 | [Fin alternative 2] | Haxan tue la race humaine et détruit la terre, mais prend Emeryk comme animal de compagnie | Mauvaise |
| 10 | [Fin alternative 3] | Alex détruit la terre et les humains dans un vortex magique | Mauvaise |

### 2.5 Personnages principaux

| #  | Nom                          | Rôle        | Description                         | Pouvoirs                                                                                                       | Apparaît dans                |
|----|-----------------------------|-------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------|
| 1  | Ahmed                       | Protagoniste | Timide, rêveur, humble.              | Aucuns pouvoirs, jeune homme passionné de mangas, potentiel latent.                                           | Presque tous les chapitres  |
| 2  | Ahmed (Version Éclipse)    | Protagoniste | Calme, déterminé, animé par la foi et la volonté inébranlable.         | Entité cosmique vivante, vitesse supersonique, invocation du Croissant Astral, maîtrise des récits shōnen.   | Presque tous les chapitres  |
| 3  | Ahmed (Version Ultra)      | Protagoniste | Sombre, introspectif.         | Manipulation des forces astrales, aura intimidante, force terrifiante.                                       | Presque tous les chapitres  |
| 4  | Justin (Capitaine Québec)  | Protagoniste | Charismatique, combatif, distrait.   | Contrôle de l’hydroélectricité, résilience patriotique, talent stratégique basé sur la conviction.            | Presque tous les chapitres  |
| 5  | Mathieu (L'Ours)     | Protagoniste | Farouche, loyal, protecteur.         | Transformation en ours, force brute, endurance surhumaine, polyvalence.                                       | Presque tous les chapitres  |
| 6  | Mikael (Casquette Man)     | Protagoniste | Décontracté mais concentré.          | Aucuns pouvoirs, vitesse/agilité exceptionnelles, tacticien imprévisible, tech avancée.                       | Presque tous les chapitres  |
| 7  | Rafael (Le Cyborg Handicapé) | Protagoniste | Résilient, déterminé.               | Corps cybernétique, force accrue, réparation instantanée, armes intégrées.                                   | Presque tous les chapitres  |
| 8  | Alexandre (Le Magicien)    | Protagoniste | Farouche, loyal, protecteur.         | Transformation en ours, force brute, endurance surhumaine, polyvalence.                                       | Presque tous les chapitres  |
| 9  | Elie (Le Modélisateur Mental) | Protagoniste | Créatif, analytique, innovant.     | Modélisation mentale 3D tangible, création d’objets et environnements.                                       | Presque tous les chapitres  |
| 10 | Emeryk (L’Homme-Loup)      | Protagoniste | Sauvage, brillant, loyal.            | Force et agilité lupine, vitesse de codage, sens aiguisés, instinct sauvage.                                  | Presque tous les chapitres  |
| 11 | Hazan (Le Dieu des Dieux)  | Antagoniste  | Calme, sûr de lui, mystérieux.       | Omnipotence, connaissance absolue, manipulation de la réalité, immunité aux faiblesses.                        | Tous les chapitres          |


### 2.6 Système de conséquences

Comment les choix influencent l'histoire?

*Mécanisme choisi:*

- [ ] *Système de karma/moralité* (points bons/mauvais)
- [ ] *Stats du personnage* (courage, intelligence, empathie)
- [ ] *Inventaire d'objets* (collecte d'items)
- [ ] *Relations avec personnages* (affinités)
- [x] *Flags de choix* (choix X débloque scène Y)

*Exemple de tracking:*
```javascript
playerState: {
  karma: 0,  // -10 à +10
  inventory: ['clé', 'journal'],
  relationships: {
    marcus: 5,  // 0 à 10
    chronos: -3
  },
  flags: {
    hasActivatedMachine: true,
    knowsTheSecret: false
  }
}
```


## 🎨 3. Design et Identité Visuelle

### 3.1 Moodboard

Insérez ici 3-5 images d'inspiration (ou liens):

- [Image 1: Ambiance générale]
- [Image 2: Style visuel des personnages]
- [Image 3: Palette de couleurs]
- [Image 4: Typographie inspirante]
- [Image 5: Animations de référence]

###  Ambiance générale
![Ambiance générale](https://github.com/user-attachments/assets/2def219d-d842-4f65-bfb6-371325d14264)

---

### Style visuel des personnages

| IA | Pixel Art | IA + Pixel Art |
|----|-----------|----------------|
| ![IA](https://github.com/user-attachments/assets/35b5d0ed-7543-4047-9124-ad58a1dd1438) | ![Pixel Art](https://github.com/user-attachments/assets/e744e965-ce7e-455c-b257-a827d4f4dbb2) | ![Fusion](https://github.com/user-attachments/assets/f9f674b1-ccc8-4757-860e-41f18a17910b) |
  
### 3.2 Palette de couleurs

*Couleurs par ambiance/chapitre:*
<img width="808" height="468" alt="image" src="https://github.com/user-attachments/assets/2ef03e75-27ce-42ff-8fd5-463a2beeb6cd" />



*Couleurs système:*

<img width="875" height="185" alt="image" src="https://github.com/user-attachments/assets/60662cb4-cfa3-488a-8e18-bb862bb23fe9" />

### 3.3 Typographie

- *Titres narratifs:* : [Iceberg] - [[Iceberg - Google Fonts](https://fonts.google.com/specimen/Iceberg)]
- *Texte de narration:* [Pixelify Sans] - [[Pixelify Sans - Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans?query=pixel)]
- *Dialogues:* [Pixelify Sans] - [[Pixelify Sans - Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans?query=pixel)]
- *Boutons de choix:* [Iceberg] - [[Iceberg - Google Fonts](https://fonts.google.com/specimen/Iceberg)]

### 3.4 Style visuel

Choisissez un ou plusieurs styles:

- [x] Cinématique (film, thriller)
- [x] Rétro
- [ ] Illustratif (dessins, concept art)
- [ ] Minimaliste (focus sur le texte)
- [ ] Immersif (photos, ambiances réalistes)
- [ ] Stylisé (flat design, géométrique)

### 3.5 Éléments visuels par chapitre

| # | Titre          | Effets visuels                                 | Ambiance sonore                          | Type de musique associé         |
|---|----------------|------------------------------------------------|------------------------------------------|---------------------------------|
| 1 | Alerte         | Fade in sur la scène                           | Musique douce, intro                     | Ambient cinématographique       |
| 2 | Rencontre      | Animation feu, opacité silhouette volante      | Sons de feu et vent                      | Musique ethérée / new age       |
| 3 | Contact        | Flash bleu, effet gel simple                   | Sons magiques, crépitement               | Musique orchestrale fantastique |
| 4 | Urgence        | Glow lumineux, shake léger                     | Musique épique, voix grave               | Musique épique / trailer        |
| 5 | Rassemblement  | Transition rapide, icônes d’armes              | Tambours, montée en tension              | Percussions tribales            |
| 6 | Combat         | Animation d’impact, ralentis                   | Musique intense, bruitages de combat     | Rock orchestral / action        |
| 7 | Dénouement     | Fondu enchaîné, zoom sur visages               | Musique dramatique, silence, dialogues   | Musique dramatique              |
| 8 | Fin            | Transition ciel, fondu final                   | Musique triste ou joyeuse selon fin      | Musique émotionnelle / finale   |




## 💻 4. Spécifications Techniques

### 4.1 Stack technologique

*Frontend obligatoire:*

- ✅ Vue.js 3 (Composition API ☐ / Options API ☐)
- ✅ Vite
- ✅ Vue Router
- ✅ Pinia (state management)
- ✅ CSS
- ✅ GSAP + ScrollTrigger (optionnel selon style)

*Librairies additionnelles envisagées:*

- [ ] VueUse (composables utilitaires)
- [ ] Typed.js (effet de machine à écrire)
- [ ] Howler.js (gestion audio avancée)
- [ ] [Autre]

### 4.2 Architecture des composants

Listez vos composants Vue principaux:

*Composants de layout:*

- `AppHeader.vue` - Navigation et menu
- `SaveSlotManager.vue` - Gestion des sauvegardes
- `ProgressBar.vue` - Barre de progression dans l'histoire

*Composants de contenu:*

- `ChapterView.vue` - Vue d'un chapitre/scène
- `NarrativeText.vue` - Affichage du texte narratif
- `DialogueBox.vue` - Boîte de dialogue pour personnages
- `ChoiceButton.vue` - Bouton de choix interactif
- `ChoicePanel.vue` - Panel contenant tous les choix

*Composants système:*

- `InventoryDisplay.vue` - Affichage de l'inventaire
- `StatsPanel.vue` - Affichage des stats du joueur
- `EndingScreen.vue` - Écran de fin avec récapitulatif
- `Modal.vue` - Fenêtre modale (sauvegarde, options)

*Composants UI:*

- `ButtonPrimary.vue` - Bouton principal
- `LoadingSpinner.vue` - Indicateur de chargement
- `AudioController.vue` - Contrôle de la musique/sons

### 4.3 Routes (Vue Router)

| Route | Composant | Description | Params |
|-------|-----------|-------------|--------|
| `/` | `HomeView.vue` | Menu principal | - |
| `/nouvelle-partie` | `CharacterSetupView.vue` | Config initiale (nom, etc.) | - |
| `/chapitre/:id` | `ChapterView.vue` | Vue d'un chapitre | id du chapitre |
| `/fin/:endingId` | `EndingView.vue` | Écran de fin | id de la fin |
| `/sauvegardes` | `SavesView.vue` | Gestion des sauvegardes | - |
| `/credits` | `CreditsView.vue` | Crédits | - |

### 4.4 Gestion de l'état (Pinia)

*Stores prévus:*

1. *`useStoryStore`*
   - State: `currentChapterId`, `visitedChapters`, `storyData`, `availableChoices`
   - Actions: `loadChapter()`, `makeChoice()`, `goToChapter()`
   - Getters: `currentChapter`, `isChapterUnlocked()`

2. *`usePlayerStore`*
   - State: `playerName`, `karma`, `stats`, `inventory`, `flags`, `relationships`
   - Actions: `addToInventory()`, `updateStat()`, `setFlag()`, `updateRelationship()`
   - Getters: `hasItem()`, `getRelationship()`, `canAccessEnding()`

3. *`useSaveStore`*
   - State: `saveSlots` (array de 3 slots)
   - Actions: `saveGame()`, `loadGame()`, `deleteSave()`, `getSaveInfo()`
   - Getters: `hasSaves`, `latestSave`

4. *`useAudioStore`* (optionnel)
   - State: `currentMusic`, `soundEffects`, `volume`, `isMuted`
   - Actions: `playMusic()`, `playSound()`, `toggleMute()`, `setVolume()`

### 4.5 Persistance des données

*Méthode choisie:*

- [x] LocalStorage (obligatoire pour sauvegardes)
- [ ] Firebase Firestore (bonus optionnel pour galerie publique)

*Structure de données LocalStorage:*

```json
{
  "saveSlot1": {
    "savedAt": "2025-01-15T14:30:00Z",
    "playerName": "Alex",
    "currentChapterId": "chapter-5",
    "playerState": {
      "karma": 5,
      "stats": {
        "courage": 7,
        "intelligence": 8,
        "empathy": 6
      },
      "inventory": ["clé", "journal", "photo"],
      "flags": {
        "hasActivatedMachine": true,
        "knowsTheSecret": true,
        "savedMarcus": false
      },
      "relationships": {
        "marcus": 8,
        "chronos": -5
      }
    },
    "visitedChapters": ["ch-1", "ch-2", "ch-3a", "ch-4", "ch-5"],
    "choiceHistory": [
      { "chapterId": "ch-2", "choiceId": "activate", "timestamp": "..." },
      { "chapterId": "ch-3a", "choiceId": "go-past", "timestamp": "..." }
    ]
  },
  "saveSlot2": null,
  "saveSlot3": null,
  "settings": {
    "volume": 0.7,
    "textSpeed": "normal",
    "autoSave": true
  }
}
```

### 4.6 Structure de données de l'histoire

Comment stockez-vous les chapitres et choix?

*Option A: JSON statique* (recommandé)
```javascript
// data/chapters.json
{
  "ch-1": {
    "id": "ch-1",
    "title": "Le Réveil",
    "text": "Vous vous réveillez dans votre laboratoire...",
    "backgroundImage": "/images/bg-lab.jpg",
    "music": "intro-theme.mp3",
    "choices": null,  // Chapitre linéaire
    "nextChapter": "ch-2"
  },
  "ch-2": {
    "id": "ch-2",
    "title": "La Découverte",
    "text": "Face à la machine, vous devez décider...",
    "backgroundImage": "/images/bg-machine.jpg",
    "music": "tension-theme.mp3",
    "choices": [
      {
        "id": "activate",
        "text": "Activer la machine",
        "consequence": "Vous entrez dans l'inconnu...",
        "nextChapter": "ch-3a",
        "effects": {
          "karma": -2,
          "stats": { "courage": +1 },
          "flags": { "hasActivatedMachine": true }
        }
      },
      {
        "id": "report",
        "text": "Rapporter la découverte",
        "consequence": "La prudence avant tout...",
        "nextChapter": "ch-3b",
        "effects": {
          "karma": +2,
          "stats": { "intelligence": +1 },
          "flags": { "hasReported": true }
        }
      }
    ]
  }
}
```


## 🎬 5. Fonctionnalités et User Stories

### 5.1 Fonctionnalités MVP (Minimum Viable Product)

*Obligatoires pour la livraison:*

- [x] *F1 - Lecture de l'histoire*
  - Affichage du texte narratif chapitre par chapitre
  - Navigation linéaire dans l'intro
  - Transitions fluides entre chapitres

- [x] *F2 - Système de choix*
  - Affichage de 2-4 choix par chapitre décisionnel
  - Sélection d'un choix
  - Redirection vers le chapitre suivant approprié
  - Minimum 8 chapitres avec au moins 3 fins

- [x] *F3 - Tracking des conséquences*
  - État du joueur (karma/stats/flags)
  - Mise à jour après chaque choix
  - Conditions pour débloquer fins

- [x] *F4 - Système de sauvegarde*
  - 3 slots de sauvegarde
  - Sauvegarde manuelle
  - Chargement d'une sauvegarde
  - Affichage des infos de sauvegarde (date, progression)

- [x] *F5 - Historique des choix*
  - Garder trace des décisions prises
  - Affichage dans un menu (optionnel mais recommandé)

- [x] *F6 - Écrans de fin*
  - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Option de recommencer ou charger

- [x] *F7 - Interface responsive*
  - Mobile (320px+)
  - Tablette (768px+)
  - Desktop (1024px+)

- [x] *F8 - Animations de texte*
  - Apparition progressive du texte (optionnel: effet typewriter)
  - Transitions entre chapitres avec GSAP

- [x] *F9 - Accessibilité*
  - Navigation au clavier
  - ARIA labels
  - Contraste WCAG AA
  - Option skip animations

- [x] *F10 - Médias intégrés*
  - Images de fond par chapitre
  - Musique d'ambiance (avec contrôle volume)

### 5.2 Fonctionnalités bonus (optionnelles)

- [ ] *B1 - Auto-save*
  - Sauvegarde automatique à chaque chapitre
  - Indication visuelle de la sauvegarde

- [ ] *B2 - Inventaire visuel*
  - Affichage graphique des items
  - Description des objets au survol

- [x] *B3 - Stats visuelles*
  - Barres de progression pour stats
  - Graphique radar des caractéristiques

- [x] *B4 - Arbre de choix visualisé*
  - Carte interactive des chemins possibles
  - Indication des chapitres visités/non-visités

- [x] *B5 - Galerie des fins*
  - Collection de toutes les fins débloquées
  - Pourcentage de complétion

- [x] *B6 - Mode rejouabilité*
  - Fast-forward pour texte déjà lu
  - Skip to choice (sauter au prochain choix)

- [x] *B7 - Effets sonores contextuels*
  - Sons lors de choix importants
  - Ambiances sonores par scène

- [x] *B8 - Animations avancées GSAP*
  - Parallax sur les backgrounds
  - Animations de transition complexes

- [ ] *B9 - Firebase (équipes avancées)*
  - Partage de fins débloquées
  - Galerie publique d'histoires

### 5.3 User Stories

*Format:* En tant que [rôle], je veux [action] afin de [bénéfice]

1. *US-01:* En tant que lecteur, je veux lire une histoire interactive afin de vivre une expérience narrative immersive.

2. *US-02:* En tant que joueur, je veux faire des choix qui ont des conséquences afin de sentir que mes décisions comptent.

3. *US-03:* En tant qu'utilisateur, je veux sauvegarder ma progression afin de reprendre plus tard sans perdre mon avancement.

4. *US-04:* En tant que lecteur, je veux voir l'impact de mes choix afin de comprendre comment ils influencent l'histoire.

5. *US-05:* En tant que joueur, je veux atteindre différentes fins afin de découvrir toutes les possibilités de l'histoire.

6. *US-06:* En tant qu'utilisateur mobile, je veux lire l'histoire sur mon téléphone afin d'en profiter partout.

7. *US-07:* En tant que lecteur, je veux consulter l'historique de mes choix afin de me rappeler mes décisions passées.

8. *US-08:* En tant qu'utilisateur, je veux contrôler le volume sonore afin d'adapter l'expérience à mon environnement.


## 📊 6. Maquettes et Wireframes

### 6.1 Lien vers les maquettes Figma

*Lien:* [https://www.figma.com/design/r6R9Jj0nzHcH17XgecL28C/Moodboard---Projet-Final-Web?node-id=0-1&t=juwRv1v8ZNchIAYQ-1]

### 6.2 Écrans principaux à maquetter

- [x] Menu principal (nouvelle partie, charger, options)
- [x] Écran de chapitre avec texte narratif
- [x] Panel de choix (2-4 options)
- [x] Inventaire/Stats (si applicable)
- [x] Écran de fin avec récapitulatif
- [x] Gestion des sauvegardes (3 slots)
- [x] Version mobile d'au moins 2-3 écrans

### 6.3 Interactions clés à maquetter

- Apparition progressive du texte
- Animations des boutons de choix
- Transition entre chapitres
- Ouverture de l'inventaire/stats
- États des boutons (hover, actif, disabled)


## 📊 7. Plan de Réalisation

### 7.1 Répartition des rôles

| Membre | Rôle principal | Responsabilités |
|--------|----------------|-----------------|
| [Justin Montpetit] | Chef de projet + Architecture Vue | Coordination, Vue Router, stores Pinia, structure de l'histoire |
| [Ahmed Kaissoumi] | Design + Animations | CSS, design visuel, animations GSAP, transitions |
| [Justin Montpetit] | Contenu + Narration | Écriture des chapitres, création de l'arbre narratif, dialogues |
| [Mathieu Willett] | Données + Système | Gestion des sauvegardes, LocalStorage, logique de choix, stats |

*Note:* Tous participent au développement, mais chacun a sa spécialité.

### 7.2 Tâches transversales

*À répartir entre tous:*

- Tests de l'histoire (lecture complète)
- Correction de fautes et relecture
- Tests et debugging
- Documentation du code
- Présentation finale

### 7.3 Outils de collaboration

- *Git/GitHub:* [https://github.com/mathieuwillett/projet_final_web/tree/main]
- *Gestion de projet:* [Trello / Word / GitHub Projects]
- *Communication:* [Teams]
- *Design:* [Figma]
- *Documentation:* [Word / Google Docs / README.md]
- *Écriture collaborative:* [Google Docs / Word]


## 🚀 8. Critères de Succès

### 8.1 Critères techniques

- [ ] Application Vue.js fonctionnelle sans erreurs console
- [OK] Minimum 8 composants Vue bien structurés
- [OK] Vue Router avec 5+ routes
- [OK] Pinia implémenté avec state management cohérent
- [OK] CSS organisé avec variables
- [Non] Animations GSAP fluides
- [Non] Système de sauvegarde fonctionnel
- [ ] Code validé (ESLint)
- [OK] Responsive sur 3 breakpoints
- [ ] Accessibilité WCAG AA

### 8.2 Critères narratifs

- [OK] Histoire cohérente du début à la fin
- [OK] Minimum 8 chapitres/scènes
- [OK] Au moins 3 fins différentes
- [OK] Choix ayant un impact réel sur l'histoire
- [OK] Aucune faute d'orthographe majeure
- [OK] Dialogues naturels et crédibles
- [OK] Rythme narratif bien dosé

### 8.3 Critères de qualité

- [OK] Interface intuitive et facile à utiliser
- [OK] Design cohérent et esthétique
- [OK] Lisibilité du texte (taille, contraste, police)
- [OK] Animations pertinentes (pas excessives)
- [OK] Temps de chargement < 2 secondes
- [OK] Aucun bug bloquant
- [ ] Musique/sons appropriés
- [ ] Documentation complète (README)

### 8.4 Critères créatifs

- [OK] Histoire originale et engageante
- [OK] Personnages mémorables
- [OK] Twist ou surprise dans l'intrigue
- [OK] Expérience émotionnelle impactante
- [OK] Rejouabilité (envie de tester d'autres chemins)


## 📅 9. Calendrier du projet: Planning prévisionnel

### 9.1 *PHASE 1: PLANIFICATION ET DESIGN*
<!--Semaine 1-2 (la 2 étant la semaine de rattrapage)-->

**Du 8 au 22 octobre**

*Remise 22 octobre | 15%*

- Rédaction du cahier de charges
- Écriture de l'arbre narratif complet
- Design: Création des maquettes Figma
- Définition de l'architecture technique
- Setup du projet (Vite + Vue + dépendances)

### 9.2 *PHASE 2: FONDATION*
<!--Semaine 3-4-->

**Du 22 octobre au 2 novembre environ**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

!!! tip "Le projet portfolio en parallèle"
    Notez que mercredi le 29 octobre c'est la remise et présentation de votre portfolio donc nous laissons un peu plus qu'une semaine pour cette phase car vous allez probablement finaliser votre portfolio en même temps.

- Structure des composants de base
- Vue Router configuré
- Pinia stores créés
- Premiers chapitres (texte + affichage)

### 9.3 *PHASE 3: INTERACTIVITÉ - Système de Choix*
<!-- Semaine 4-5-->

**Environ du 2 novembre au 12 novembre**

*Remise Phases 2 FONDATION et 3 INTERACTIVITÉ : vendredi 14 novembre | 15%*

- Logique de branches narratives
- Système de tracking des conséquences
- Composants de choix interactifs
- Plus de chapitres écrits et intégrés


### 9.4 *PHASE 4: ANIMATIONS ET MÉDIAS*
<!-- Semaine 6 -->

**Du 12 au 19 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Intégration GSAP (transitions)
- Images de fond par chapitre
- Musiques/sons d'ambiance
- Animations de texte


### 9.x *ÉVALUATION PAR LES PAIRS ET AUTO-ÉVALUATION DE MI PARCOURS*

**Sera fait en classe le 19 novembre**

*Remise de l'évaluation par les pairs et auto-évaluation de mi parcours: 19 novembre | 5%*


### 9.5 *PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES + Fin de l'histoire*
<!-- Semaine 7 -->

**Du 19 au 26 novembre**

*Remise Phases 4 ANIMATIONS+MÉDIAS et 5 PERSISTANCE : 26 novembre | Formatif*

- Système de sauvegarde (3 slots)
- LocalStorage complet
- Toutes les fins écrites et intégrées
- Écrans de fin avec récapitulatif

### 9.6 *PHASE 6: AFFINAGE ET ACCESSIBLITÉ* pour la version *BETA*

**Du 26 novembre au 3 décembre**

*Remise version *BETA* le 3 décembre | Formatif*

- Responsive final
- Accessibilité (ARIA, keyboard)

### 9.7 *PHASE 7:  CONTRÔLE QUALITÉ ET CORRECTIONS*
<!-- Semaine 8 -->
**Du 3 au 8 décembre**

*Remise Phase 7 RAPPORT DU CONTRÔLE DE LA QUALITÉ : 8 décembre | 10%*

- Tests de toutes les branches de l'histoire
- Tests fonctionnels
- Tests multi-plateformes (navigateurs et appareils)
- Relecture et corrections
- Optimisation de la performance
- Gestion des bogues

### 9.8 *PHASE 8:  FINALISATION*
<!-- Semaine 8 + 2 jours-->

**Du 3 au 10 décembre** (peut-être fait en parallèle avec la phase 7)

*Remise et présentation finale : 10 décembre | 50%*

- Documentation (README complet)
- Déploiement - Mise en ligne (GitHub/Netlify/Vercel)
- Vidéo de présentation
- Préparation de la démo en classe

### 9.9 *PHASE 9: POST-MORTEM*

**Du 10 au 12 décembre**

*Remise de l'analyse réflexive et suivi de l'évaluation de mi-parcours: 12 décembre | 5%*


## 🎯 10. Risques et Solutions

| Risque | Probabilité | Impact | Solution préventive |
|--------|-------------|--------|---------------------|
| Scope creep narratif (trop d'histoire) | Élevée | Élevé | Limiter à 8-10 chapitres max, garder histoires simples |
| Manque de temps pour écrire | Élevée | Élevé | Écrire les chapitres AVANT de coder, paralléliser |
| Bugs dans la logique de branches | Moyenne | Élevé | Tester chaque branche manuellement, diagramme clair |
| Incohérences narratives | Moyenne | Moyen | Relecture croisée, document de tracking des flags |
| Fautes d'orthographe | Élevée | Faible | Utiliser correcteur, relecture collective |
| Sauvegardes corrompues | Faible | Élevé | Validation JSON, gestion d'erreurs, tests intensifs |


## 📝 11. Annexes

### 11.1 Ressources et références

*Documentation officielle:*

- Contenu du cours Web 5 https://tim-montmorency.com/compendium/582-511-web5/
- Guide étudiant du projet appli web créative: https://tim-montmorency.com/compendium/582-511-web5/projets/appweb-creative/syllabus_guide_etudiant.html
- Vue.js: https://vuejs.org
- Pinia: https://pinia.vuejs.org
- GSAP: https://greensock.com/docs/

*Inspiration narrative:*

- Bandersnatch (Black Mirror)
- Life is Strange
- Detroit: Become Human
- Twine games

*Tutoriels utiles:*

- [Lien vers tuto 1]
- [Lien vers tuto 2]

### 11.2 Glossaire

- *Branche:* Chemin narratif distinct selon les choix
- *Flag:* Variable booléenne qui track un événement
- *Ending:* Fin possible de l'histoire
- *Karma:* Système de moralité basé sur les choix
- *Node:* Point de décision dans l'arbre narratif
- *Save slot:* Emplacement de sauvegarde



## ✅ Validation du Cahier de Charges

*Date de validation:* [Date]

*Signatures:*

- Chef de projet: _______________
- Membre 2: _______________
- Membre 3: _______________
- Membre 4: _______________ (si applicable)

*Validation enseignant:* _______________  
*Date:* _______________  
*Commentaires:*

---

*Version du document cahier de charge:* 1.0  
*Dernière mise à jour:* [Écrire ici la date]
