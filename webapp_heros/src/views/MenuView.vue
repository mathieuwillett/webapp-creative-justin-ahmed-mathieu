<script lang="ts">
import MenuButtonNew from '../components/layout/MenuButtonNew.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import MenuButtonLoad from '../components/layout/MenuButtonLoad.vue';
import MenuButtonContinue from '../components/layout/MenuButtonContinue.vue';

export default {
    name: 'menu',

    components: {
        MenuButtonNew,
        AppFooter,
        MenuButtonLoad,
        MenuButtonContinue
    },

    methods: {
        startAdventure() {
            this.$router.push({
                name: 'chapter',
                params: { id: '0' }
            });
        }
    }
};
</script>


<template>
    <div class="page">
        <h1 class="titre">Les Héros de l'Éclipse</h1>
        <MenuButtonNew @click="startAdventure()" class="bouton"></MenuButtonNew>
        <MenuButtonContinue class="bouton"></MenuButtonContinue>
        <MenuButtonLoad class="bouton"></MenuButtonLoad>
    </div>
    <AppFooter></AppFooter>
</template>



<style>
@font-face {
    font-family: pixel;
    src: url(../assets/fonts/PixelifySans-VariableFont_wght.ttf) format(truetype);
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
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 95vh;
}

.page>* {
    margin: 3vh;
}

.titre {
    font-size: 6vw;
    font-weight: 500;
}

.bouton:hover {
    filter: brightness(105%);
    transform: translateY(0.5vw);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>