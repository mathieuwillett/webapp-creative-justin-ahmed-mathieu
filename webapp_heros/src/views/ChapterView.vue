<script lang="ts">
import ContinueButton from '@/components/histoire/ContinueButton.vue';
import ChoiceButton from '@/components/histoire/ChoiceButton.vue';
import ChoiceButtonText from '@/components/histoire/ChoiceButtonText.vue';
import ChoicePanel from '@/components/histoire/ChoicePanel.vue';
import NarrativeText from '@/components/histoire/NarrativeText.vue';
import NarrativeTextParagraph from '@/components/histoire/NarrativeTextParagraph.vue';
import PersonnagesBloc from '@/components/histoire/PersonnagesBloc.vue';

export default {
    name: 'chapter',

    components: {
        ChoiceButton,
        ContinueButton,
        ChoiceButtonText,
        ChoicePanel,
        NarrativeText,
        NarrativeTextParagraph,
        PersonnagesBloc
    },

    methods: {
        premierChoix() {
            this.$router.push({
                name: 'chapter',
                params: { id: '0' }
            });
        },
        deuxiemeChoix() {
            this.$router.push({
                name: 'chapter',
                params: { id: '1' }
            });
        },
        continuer() {
            this.$router.push({
                name: 'chapter',
                params: { id: '1' }
            });
        }
    }
};
</script>

<template>
    <div>
        <PersonnagesBloc></PersonnagesBloc>
        <NarrativeText>
            <NarrativeTextParagraph></NarrativeTextParagraph>
        </NarrativeText>
        <ChoicePanel>
            <ChoiceButton class="bouton-choix">
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
            <ContinueButton class="bouton-continuer"></ContinueButton>
            <ChoiceButton class="bouton-choix">
                <ChoiceButtonText></ChoiceButtonText>
            </ChoiceButton>
        </ChoicePanel>
    </div>
</template>

<style scoped>
.bouton-choix:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}

.bouton-continuer {
    display: none
}
</style>