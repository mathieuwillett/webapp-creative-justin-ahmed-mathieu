<script setup lang="ts">
import ContinueButton from '@/components/histoire/ContinueButton.vue';
import ChoiceButton from '@/components/histoire/ChoiceButton.vue';
import ChoiceButtonText from '@/components/histoire/ChoiceButtonText.vue';
import ChoicePanel from '@/components/histoire/ChoicePanel.vue';
import NarrativeText from '@/components/histoire/NarrativeText.vue';
import NarrativeTextParagraph from '@/components/histoire/NarrativeTextParagraph.vue';
import PersonnagesBloc from '@/components/histoire/PersonnagesBloc.vue';

</script>

<template>
    <div>
        <PersonnagesBloc></PersonnagesBloc>
        <!-- <ContinueButton></ContinueButton> -->
        <NarrativeText>
            <NarrativeTextParagraph></NarrativeTextParagraph>
        </NarrativeText>
        <ChoicePanel>
            <ChoiceButton>
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
             <ChoiceButton>
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
        </ChoicePanel>
    </div>
</template>