<script>
import PersonnagesBloc from "@/components/histoire/PersonnagesBloc.vue"
import NarrativeText from "@/components/histoire/NarrativeText.vue"
import NarrativeTextParagraph from "@/components/histoire/NarrativeTextParagraph.vue"
import ChoicePanel from "@/components/histoire/ChoicePanel.vue"
import ChoiceButton from "@/components/histoire/ChoiceButton.vue"
import ChoiceButtonText from "@/components/histoire/ChoiceButtonText.vue"
import ContinueButton from "@/components/histoire/ContinueButton.vue"
import { useAudioStore } from "@/stores/audioStore";

import { useStoryStore } from "@/stores/storyStore"
import { usePlayerStore } from "@/stores/playerStore"

export default {
    name: "chapter",

    components: {
        PersonnagesBloc,
        NarrativeText,
        NarrativeTextParagraph,
        ChoicePanel,
        ChoiceButton,
        ChoiceButtonText,
        ContinueButton
    },

    data() {
        return {
            displayedText: '',
            typingInterval: null
        }
    },

    computed: {
        story() {
            return useStoryStore()
        },
        texte() {
            return this.story.narrative
        },
        choices() {
            return this.story.availableChoices
        },
        showContinue() {
            return this.choices.length === 1
        }
    },
    mounted() {
        const audioStore = useAudioStore(); // Récupère le store audio pour gérer la musique
        this.story.loadChapters() // Charge les données des chapitres depuis le store
        this.story.goToChapter(this.$route.params.id) // Va directement au chapitre correspondant à l'ID de la route
        audioStore.setTrack('TheEclipseRising.mp3')
    },
    watch: {
        texte(newText) {  // Quand la propriété "texte" change, déclenche l'effet d'écriture progressive
            this.startTyping(newText)
        },
        "$route.params.id"(newId) { // Surveille le changement d'ID dans l'URL et charge le nouveau chapitre
            this.story.goToChapter(newId)
        }
    },
    methods: {

        startTyping(fullText) {
            if (this.typingInterval) { // Si une animation est déjà en cours, on l'arrête
                clearInterval(this.typingInterval)
            }

            this.displayedText = '' // Réinitialise le texte affiché
            let index = 0 // Position actuelle dans le texte
            const speed = 30 // Vitesse d'affichage des caractères (ms)

            this.typingInterval = setInterval(() => {
                this.displayedText += fullText[index] // Ajoute un caractère à chaque intervalle
                index++

                if (index >= fullText.length) {
                    clearInterval(this.typingInterval) // Arrête l'intervalle quand tout le texte est affiché
                    this.typingInterval = null // Libère la référence
                }
            }, speed)
        },

        selectChoice(choice) {
            if (!choice.nextChapter) {
                //Vérifie si le fonctionnement de vie fonctionne
                applyDamage();
                updateHealth();
                this.story.currentChapter = null
                this.story.narrative = "Fin de l'histoire."
                this.story.availableChoices = []
            } else {
                const nextChapter = Number(choice.nextChapter)
                this.story.currentChapter = nextChapter

                // vérifie si le prochain chapitre est une fin, si oui, affiche l'écran de fin
                if (nextChapter == 85 || (nextChapter >= 126 && nextChapter <= 136)) {
                    this.$router.push({ name: "ending", params: { id: nextChapter } });
                } else {
                    this.$router.push({ name: "chapter", params: { id: nextChapter } });
                }

            }
        }

    }

}
</script>

<template>
    <div>
        <PersonnagesBloc />

        <NarrativeText>
            <NarrativeTextParagraph>
                {{ displayedText }}
            </NarrativeTextParagraph>
        </NarrativeText>

        <ChoicePanel>

            <ChoiceButton v-if="!showContinue" v-for="choice in choices" :key="choice.id" @click="selectChoice(choice)"
                class="bouton-choix">
                <ChoiceButtonText>
                    {{ choice.text }}
                </ChoiceButtonText>
            </ChoiceButton>


            <ContinueButton v-if="showContinue" @click="selectChoice(choices[0])" class="bouton-continuer" />
        </ChoicePanel>
    </div>
</template>

<style scoped>
.bouton-continuer:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}

.bouton-choix:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>