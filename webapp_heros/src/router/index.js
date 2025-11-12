/* On importe les méthodes nécessaires depuis le module `vue-router` */
import { createRouter, createWebHistory } from 'vue-router';

/* 
On importe les différentes views (pages) du projet, par exemple pour le 
projet "Mémoires interactives", on pourrait imaginer 4 views (pages) de base:
*/
import MenuView from '../views/MenuView.vue';
import ChapterView from '../views/ChapterView.vue';
import RoomView from '../views/RoomView.vue';
import EndingView from '../views/EndingView.vue';

/* Définition des routes dans un tableau [ ] d'objets { } */
const routes = [
  {
    path: '/', // (obligatoire) Contient la portion d'URL
    component: MenuView, // (obligatoire) Fait référence à la View souhaitée
    name: 'home' // (optionnel) Permet de nommer la route pour l'appeler plus simplement
  },
  {
    path: '/chapter/:id',
    component: ChapterView,
    name: 'chapter'
  },
  {
    path: '/ending/:id',  
    component: EndingView,
    name: 'ending'
  },
  {
    path: '/room/:id',  
    component: RoomView,
    name: 'room'
  }
];

// Création du router via la méthode createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // outil d'historique
  routes // contient les routes déclarées préalablement
});

/*
Le routeur étant maintenant configuré, nous allons l'exporter
pour l'importation dans le fichier main.js 
*/
export default router;