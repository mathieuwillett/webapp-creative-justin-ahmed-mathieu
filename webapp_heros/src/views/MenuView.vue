<script setup lang="ts">
import MenuButtonNew from '@/components/layout/MenuButtonNew.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import MenuButtonLoad from '@/components/layout/MenuButtonLoad.vue';
import MenuButtonContinue from '@/components/layout/MenuButtonContinue.vue';

</script>

<template>
    <div class="page">
        <MenuButtonNew></MenuButtonNew>
        <MenuButtonContinue></MenuButtonContinue>
        <MenuButtonLoad></MenuButtonLoad>
    </div>
    <AppFooter></AppFooter>
</template>

<style>

* {
    box-sizing: border-box;
    margin: 0;
}

.page {
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    height: 97vh;
}

.page > * {
    margin: 3vh;
}

</style>