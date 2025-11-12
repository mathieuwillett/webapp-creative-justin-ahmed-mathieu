<script setup lang="ts">
import ChoiceButton from '@/components/histoire/ChoiceButton.vue';
import ChoiceButtonText from '@/components/histoire/ChoiceButtonText.vue';
import ChoicePanel from '@/components/histoire/ChoicePanel.vue';
import NarrativeText from '@/components/histoire/NarrativeText.vue';
import NarrativeTextParagraph from '@/components/histoire/NarrativeTextParagraph.vue';
import PersonnagesBloc from '@/components/histoire/PersonnagesBloc.vue';

</script>

<template>
    <div>
        <ChoicePanel></ChoicePanel>
        <ChoiceButton></ChoiceButton>
        <ChoiceButtonText></ChoiceButtonText>
        <NarrativeText></NarrativeText>
        <NarrativeTextParagraph></NarrativeTextParagraph>
        <PersonnagesBloc></PersonnagesBloc>
    </div>
</template>