<script>
import MenuButtonNew from '../components/layout/MenuButtonNew.vue';
import AppFooter from '../components/layout/AppFooter.vue';

export default {
    name: 'home',

    components: {
        MenuButtonNew,
        AppFooter
    },

    methods: {
        startAdventure() {
            this.$router.push({
                name: 'start'
            });
        }
    }
};
</script>


<template>
    <div class="page">
        <h1 class="titre">Les Héros de l'Éclipse</h1>
        <MenuButtonNew @click="startAdventure()" class="bouton"></MenuButtonNew>
    </div>
    <AppFooter></AppFooter>
</template>



<style>
@font-face {
    font-family: pixel;
    src: url(../assets/fonts/Monocraft.ttf) format(truetype);
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
}

.bouton:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>