# Les Héros de l'Éclipse

## À propos du projet

Projet scolaire réalisé dans le cadre du cours Web 5 (582-511MO) au Cégep de Montmorency, programme Techniques d'intégration multimédia. Cette histoire interactive propose une expérience narrative immersive où chaque choix du lecteur influence le déroulement et la conclusion de l'aventure.

## Équipe

- Justin Montpetit - Chef de projet
- Ahmed Kaissoumi - Responsable design et animations
- Mathieu Willett - Responsables données et système

## Description 

Un appel est reçu par les héros de l'éclipse indiquant qu'un mystérieux homme fait des dommages à la ville. On envoit alors un duo de héros voir ce qui se passe. S'en suit un combat épique et difficile, ne pouvant mener qu'à un seul vainqueur.

### Fonctionnalités principales

 - Affichage du texte narratif chapitre par chapitre
  - Navigation linéaire dans l'intro
  - Transitions fluides entre chapitres
   - Affichage de 2-4 choix par chapitre décisionnel
  - Sélection d'un choix
  - Redirection vers le chapitre suivant approprié
  - Minimum 8 chapitres avec au moins 3 fins
  - État du joueur (karma/stats/flags)
  - Mise à jour après chaque choix
  - Conditions pour débloquer fins - Garder trace des décisions prises
  - Affichage dans un menu
    - Affichage de la fin atteinte
  - Récapitulatif des choix faits
  - Option de recommencer ou charger
  - Apparition progressive du texte

## Technologies utilisées

- Vue.js: https://vuejs.org
- Pinia: https://pinia.vuejs.org
- GSAP: https://greensock.com/docs/

## Démo en ligne

[Site en ligne](https://mathieuwillett.github.io/webapp-creative-justin-ahmed-mathieu/#/)

## Comment jouer

Cliquer sur les choix pour avoir la meilleure fin possible.

## Installation en local pour développement

```
# Cloner le projet
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## Documentation additionnelle

[Lien vers le Figma](https://www.figma.com/design/r6R9Jj0nzHcH17XgecL28C/Moodboard---Projet-Final-Web?node-id=0-1&t=yJZNxXGZp3xeS3Ml-1)

[Lien vers le cahier de charges](https://github.com/mathieuwillett/webapp-creative-justin-ahmed-mathieu/blob/beta/cahier_charges_chemin.md)

[Lien vers le Trello](https://trello.com/invite/b/68f6d00a9f2320304ab687d7/ATTI94cd9c98da79e3d3e255456553100463AE9AE560/trelloprojetfinalweb)


## Remerciements et autres crédits

Merci à Copilot et Gemini pour les images des personnages.

## Licence

Projet éducatif - Cégep de Montmorency © 2024-2025

---

**Session**: Automne 2025
**Enseignante**: Marie-Michelle Ouellet
**Programme**: Techniques d'intégration multimédia (TIM)