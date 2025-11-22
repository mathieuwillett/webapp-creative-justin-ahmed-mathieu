<script>
import MenuButtonNew from '../components/layout/MenuButtonNew.vue';
import MenuButtonPersonnages from '../components/layout/MenuButtonPersonnages.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import MusicButton from '@/components/layout/MusicButton.vue';
import { usePlayerStore } from '@/stores/playerStore';

export default {
    name: 'home',

    components: {
        MenuButtonNew,
        MenuButtonPersonnages,
        AppFooter,
        MusicButton
    },

    //joue au chargement de la page
    mounted() {
        const playerStore = usePlayerStore();
        // reset toutes les données sauvegardées
        playerStore.reset();
    },

    methods: {
        startAdventure() {
            this.$router.push({
                name: 'start'
            });
        },
        menuPersonnages() {
            this.$router.push({
                name: 'perso'
            })
        }
    }
};
</script>


<template>
    <div class="page">
        <h1 style="" class="titre">LES HÉROS DE L'ÉCLIPSE</h1>
        <MenuButtonNew @click="startAdventure(), reset() " class="bouton"></MenuButtonNew>
        <MenuButtonPersonnages class="bouton" @click="menuPersonnages()"></MenuButtonPersonnages>
        <MusicButton @click="audioStore.playMusic('TheEclipseRising.mp3')"></MusicButton>
        
    </div>
    <AppFooter></AppFooter>
</template>



<style>
@font-face {
    font-family: pixel;
    src: url(../assets/fonts/Monocraft.ttf) format(truetype);
}

@font-face {
    font-family: PixelTitre;
    src: url(../assets/fonts/Pixelmax-Regular.otf) format("opentype")
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: pixel;
    font-weight: 400;
}

.page {
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 95vh;
}

.titre {
    
    font-size: 6vw;
    font-weight: 500;
    user-select: none;       /* Standard */
    -webkit-user-select: none; /* Chrome, Safari, Edge */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
}

.bouton:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>