<script>
import CartePersonnages from '@/components/layout/CartePersonnages.vue';
import ReturnButton from '@/components/ending/ReturnButton.vue';
import { usePlayerStore } from '@/stores/playerStore';

export default {
    components: {
        ReturnButton,
        CartePersonnages
    },
    setup() {
        const store = usePlayerStore();
        return { store };
    },
    methods: {
        retourMenu() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<template>
    <div class="main">
        <h1>Les Personnages</h1>

        <div class="persos">
            <CartePersonnages v-for="(personnage, index) in store.images" :key="personnage.id">
                <template #images>
                    <img :src="personnage.img" :alt="personnage.name" class="img" />
                </template>

                <template #name>
                    <h2>{{ personnage.title }}</h2>
                </template>
            </CartePersonnages>
        </div>

        <ReturnButton class="boutonRetour" @click="retourMenu()" />
    </div>
</template>


<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-color: #a8a2a2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    text-align: center;
    margin: 10vh;
}

h2 {
    text-align: center;
}

.persos {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.img {
    width: 100%;
    height: 100%;
}

.boutonRetour {
    margin-bottom: 5vw;
}
</style>
