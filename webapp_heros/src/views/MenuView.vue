<script>
import MenuButtonNew from '../components/layout/MenuButtonNew.vue';
import MenuButtonPersonnages from '../components/layout/MenuButtonPersonnages.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import MusicButton from '@/components/layout/MusicButton.vue';
import { useStoryStore } from '@/stores/storyStore';
import { usePlayerStore } from '@/stores/playerStore';
import { useAudioStore } from "@/stores/audioStore";

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
        const audioStore = useAudioStore();
        const playerStore = usePlayerStore();
        const storyStore = useStoryStore();
        // reset toutes les données sauvegardées
        playerStore.reset();
        storyStore.reset();

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
        <MenuButtonNew @click="startAdventure(), reset()" class="bouton"></MenuButtonNew>
        <MenuButtonPersonnages class="bouton" @click="menuPersonnages()"></MenuButtonPersonnages>
        <MusicButton @click="audioStore.playMusic('TheEclipseRising.mp3')" class="bouton"></MusicButton>

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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 95vh;
    position: relative;
    overflow: hidden;
}

.page::before {
    content: "";
    inset: 0;
    background-image: url(@/assets/War2.png);
    filter: blur(3px);
    position: absolute;
    z-index: -1;
}

.titre {

    font-size: 6vw;
    font-weight: 500;
    user-select: none;
    /* Standard */
    -webkit-user-select: none;
    /* Chrome, Safari, Edge */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE/Edge */
    padding: 1vw 2vh;
    background: #FFA600;
    color: #111;
    font-weight: 700;
    letter-spacing: 0.06em;
    border: none;
    border-radius: 12px;
    box-shadow:
        0 0 0 6px #000,
        0 6px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    user-select: none;
    transition: transform 120ms, filter 120ms;
}

.titre::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image:
        radial-gradient(circle at 10% 10%, rgba(0, 0, 0, .25) 0 2px, transparent 2px),
        radial-gradient(circle at 60% 40%, rgba(0, 0, 0, .18) 0 3px, transparent 3px),
        radial-gradient(circle at 85% 80%, rgba(0, 0, 0, .12) 0 4px, transparent 4px);
    background-size: 8px 8px, 12px 12px, 20px 20px;
    opacity: 0.35;
    mix-blend-mode: overlay;

}

.bouton:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>