<script setup></script>

<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/chapter">Chapitre</router-link>
        <router-link to="/ending">Ending</router-link>
        <router-link to="/room">room</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
