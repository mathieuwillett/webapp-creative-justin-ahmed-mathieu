import {
  createRouter,
  createWebHistory
} from 'vue-router';


import MenuView from '../views/MenuView.vue';
import StartView from '../views/StartView.vue';
import ChapterView from '../views/ChapterView.vue';
import EndingView from '../views/EndingView.vue';
import SavesView from '../views/SavesView.vue';
import PersonnagesView from '@/views/PersonnagesView.vue';


const routes = [{
    path: '/',
    component: MenuView,
    name: 'home'
  },
  {
    path: '/start',
    component: StartView,
    name: 'start'
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
    path: '/saves',
    component: SavesView,
    name: 'saves'
  },
  {
    path: '/perso',
    component: PersonnagesView,
    name: 'perso'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: {
      name: 'menu'
    }
  },
];


const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
});

export default router;