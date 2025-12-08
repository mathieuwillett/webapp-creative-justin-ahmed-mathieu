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

    data() {
    return {
      audioStore: useAudioStore()
    };
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
        <div style="" class="titre"></div>
        <MenuButtonNew @click="startAdventure(), reset()" class="bouton"></MenuButtonNew>
        <MenuButtonPersonnages class="bouton" @click="menuPersonnages()"></MenuButtonPersonnages>
        <MusicButton @click="audioStore.playMusic('Menu.mp3')" class="bouton"></MusicButton>

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
    background-image: url(@/assets/Images/Titre.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    /* keeps aspect ratio */
    width: 50vw;
    height: 7vw;
}


.bouton:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>