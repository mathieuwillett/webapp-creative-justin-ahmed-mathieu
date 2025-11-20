<script setup>
import CartePersonnages from '@/components/layout/CartePersonnages.vue';
import { usePlayerStore } from '@/stores/playerStore';

const store = usePlayerStore();
</script>

<template>
    <h1>Les Personnages</h1>

    <div>
        <CartePersonnages v-for="(personnage, index) in store.images" :key="personnage.id">
            <template #images>
                <img :src="personnage.img" :alt="personnage.name" class="img" />
            </template>

            <template #name>
                <h2>{{ personnage.title }}</h2>
            </template>

            <template #descriptions>
            </template>

        </CartePersonnages>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    margin: 10vh;
}

div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.img {
    width: auto;
    height: 100%;
}
</style>
