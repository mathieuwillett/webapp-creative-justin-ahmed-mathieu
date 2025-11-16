<script lang="ts">
import ChoiceButton from '@/components/histoire/ChoiceButton.vue';
import ChoiceButtonText from '@/components/histoire/ChoiceButtonText.vue';
import ChoicePanel from '@/components/histoire/ChoicePanel.vue';
import NarrativeText from '@/components/histoire/NarrativeText.vue';
import NarrativeTextParagraph from '@/components/histoire/NarrativeTextParagraph.vue';
import StartBloc from '@/components/histoire/StartBloc.vue';

export default {
    name: 'menu',

    components: {
        ChoiceButton,
        ChoiceButtonText,
        ChoicePanel,
        NarrativeText,
        NarrativeTextParagraph,
        StartBloc
    },

    methods: {
        start1ereVoie() {
            this.$router.push({
                name: 'chapter',
                params: { id: '0' }
            });
        },
        start2emeVoie() {
            this.$router.push({
                name: 'chapter',
                params: { id: '1' }
            });
        },
        start3emeVoie() {
            this.$router.push({
                name: 'chapter',
                params: { id: '2' }
            });
        },
        start4emeVoie() {
            this.$router.push({
                name: 'chapter',
                params: { id: '3' }
            });
        }
    }
};
</script>

<template>
    <div>
        <StartBloc></StartBloc>
        <NarrativeText>
            <NarrativeTextParagraph></NarrativeTextParagraph>
        </NarrativeText>
        <ChoicePanel>
            <ChoiceButton class="bouton-start" @click="start1ereVoie()">
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
            <ChoiceButton class="bouton-start" @click="start2emeVoie()">
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
            <ChoiceButton class="bouton-start" @click="start3emeVoie()">
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
            <ChoiceButton class="bouton-start" @click="start4emeVoie()">
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
        </ChoicePanel>
    </div>
</template>

<style scoped>
.bouton-start {
    width: 20vw;
}
</style>