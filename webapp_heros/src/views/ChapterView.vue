<script setup lang="ts">
import ChapterHeader from '@/components/histoire/ChapterHeader.vue';
import ContinueButton from '@/components/histoire/ContinueButton.vue';
import ImageChapitre from '@/components/histoire/ImageChapitre.vue';
import ProgressBar from '@/components/histoire/ProgressBar.vue';
import SaveManager from '@/components/layout/SaveManager.vue';

</script>

<template>
    <div>
        <SaveManager></SaveManager>
        <ContinueButton></ContinueButton>
        <ImageChapitre></ImageChapitre>
        <ChapterHeader></ChapterHeader>
        <ProgressBar></ProgressBar>
    </div>
</template>