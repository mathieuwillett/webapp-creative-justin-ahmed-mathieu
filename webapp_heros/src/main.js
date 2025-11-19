import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


window.addEventListener('popstate', () => {
  // au click de la flèche retour en arrière, renvoie au menu
  if (router.currentRoute.value.name !== 'home') {
    router.replace({ name: 'home' })
  }
})

// Vérifie si la page s'apprête à être rechargée
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('redirectToHome', 'true')
})

// Si la page recharge, renvoie l'utilisateur à la page menu
if (sessionStorage.getItem('redirectToHome')) {
  sessionStorage.removeItem('redirectToHome')
  if (router.currentRoute.value.name !== 'home') {
    router.replace({ name: 'home' })
  }
}
