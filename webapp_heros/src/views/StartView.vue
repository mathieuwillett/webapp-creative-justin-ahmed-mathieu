<script>
import { useRouter } from "vue-router"
import { useStoryStore } from "@/stores/storyStore"

import ChoiceButton from "@/components/histoire/ChoiceButton.vue"
import ChoiceButtonText from "@/components/histoire/ChoiceButtonText.vue"
import ChoicePanel from "@/components/histoire/ChoicePanel.vue"
import NarrativeText from "@/components/histoire/NarrativeText.vue"
import NarrativeTextParagraph from "@/components/histoire/NarrativeTextParagraph.vue"
import StartBloc from "@/components/histoire/StartBloc.vue"

export default {
    name: "StartView",

    components: {
        ChoiceButton,
        ChoiceButtonText,
        ChoicePanel,
        NarrativeText,
        NarrativeTextParagraph,
        StartBloc
    },

    data() {
        return {
            story: useStoryStore(),
            router: useRouter()
        }
    },

    mounted() {
        if (!this.story.chapitres || Object.keys(this.story.chapitres).length === 0) {
            this.story.loadChapters()
        }
    },


    methods: {
        startAt(chapterId) {
            this.router.push({
                name: "chapter",
                params: { id: chapterId }
            })
        }
    }
}
</script>

<template>
    <div>
        <StartBloc />

        <NarrativeText>
            <NarrativeTextParagraph>
                Choisissez votre voie :
            </NarrativeTextParagraph>
        </NarrativeText>

        <ChoicePanel>
            <ChoiceButton class="bouton-start" @click="startAt('0')">
                <ChoiceButtonText>Voie 1</ChoiceButtonText>
            </ChoiceButton>

            <ChoiceButton class="bouton-start" @click="startAt('1')">
                <ChoiceButtonText>Voie 2</ChoiceButtonText>
            </ChoiceButton>

            <ChoiceButton class="bouton-start" @click="startAt('2')">
                <ChoiceButtonText>Voie 3</ChoiceButtonText>
            </ChoiceButton>

            <ChoiceButton class="bouton-start" @click="startAt('3')">
                <ChoiceButtonText>Voie 4</ChoiceButtonText>
            </ChoiceButton>
        </ChoicePanel>
    </div>
</template>

<style scoped>
.bouton-start {
    width: 20vw;
}

.bouton-start:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>
