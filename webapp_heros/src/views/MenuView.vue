<script setup lang="ts">
import MenuButton from '@/components/layout/MenuButton.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import SaveManager from '@/components/layout/SaveManager.vue';

</script>

<template>
    <div>
        <AppHeader></AppHeader>
        <MenuButton></MenuButton>
        <AppFooter></AppFooter>
        <SaveManager></SaveManager>
    </div>
</template>