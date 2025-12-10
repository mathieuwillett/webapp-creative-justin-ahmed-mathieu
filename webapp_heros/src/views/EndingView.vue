<script>
import ChoiceHistory from '@/components/ending/ChoiceHistory.vue';
import EndingScreen from '@/components/ending/EndingScreen.vue';
import ReturnButton from '@/components/ending/ReturnButton.vue';
import ChoicePanel from '@/components/histoire/ChoicePanel.vue';
import NarrativeText from '@/components/histoire/NarrativeText.vue';
import NarrativeTextParagraph from '@/components/histoire/NarrativeTextParagraph.vue';

import { useStoryStore } from '@/stores/storyStore';
import { useAudioStore } from '@/stores/audioStore';

export default {
    name: 'ending',

    components: {
        EndingScreen,
        ChoiceHistory,
        ReturnButton,
        ChoicePanel,
        NarrativeText,
        NarrativeTextParagraph
    },

    data() {
        return {
            displayedText: "",
            typingInterval: null,
            showChoices: false
        };
    },

    computed: {
        story() {
            return useStoryStore();   // Récupère le store qui contient l'histoire
        },
        texte() {
            return this.story.narrative; // Donne accès au texte narratif de l'histoire
        },
        endingBackground() {
            const id = this.$route.params.id;
            return this.story.endingImage(id); // Retourne l'image de fin selon l'id du chapitre
        }
    },

    methods: {
        // Fonction qui permet de revenir au menu principal
        retourMenu() {
       // Utilise le router de Vue pour aller à la page "home"
            this.$router.push({ name: 'home' });
        },

        // Fonction qui affiche un texte lettre par lettre
        startTyping(fullText) {
             
            // Arrête l’animation précédente si elle existe
            if (this.typingInterval) clearInterval(this.typingInterval);

            this.displayedText = ""; // Vide le texte affiché
            let index = 0; // Position dans le texte
            const speed = 30; // Vitesse d’écriture (ms)

            // Ajoute un caractère toutes les 30 ms
            this.typingInterval = setInterval(() => {
                this.displayedText += fullText[index];
                index++;

            // Quand tout le texte est écrit, on arrête
                if (index >= fullText.length) {
                    clearInterval(this.typingInterval);
                    this.typingInterval = null;
                }
            }, speed);
        }
    },

    mounted() {
        const audioStore = useAudioStore();
          // Au montage du composant : aller au chapitre correspondant à l'id dans l'URL
        this.story.goToChapter(this.$route.params.id);
        audioStore.setTrack("TheEclipseRising.mp3");
    },


    watch: {
        // quand la variable "texte" change, lancer l'effet d'écriture
        texte(newText) {
            this.startTyping(newText);
        },
        // quand l'id dans l'URL change, aller au nouveau chapitre
        "$route.params.id"(newId) {
            this.story.goToChapter(newId);
        }
    }
};
</script>


<template>
    <div class="ending-wrapper">
        <EndingScreen :background="endingBackground" />


        <div class="wrappingMenu">
            <button @click="showChoices = !showChoices" class="toggle-btn">
                <img v-if="showChoices" src="@/assets/Images/down-arrow.png" alt="Hide Choices">
                <img v-else src="@/assets/Images/up-arrow.png" alt="Show Choices">
            </button>
            <NarrativeText>
                <NarrativeTextParagraph>
                    {{ displayedText }}
                </NarrativeTextParagraph>
            </NarrativeText>
            <ChoicePanel v-show="showChoices">
                <ChoiceHistory :history="story.history" />
                <ReturnButton @click="retourMenu()" />
            </ChoicePanel>
        </div>
    </div>
</template>

<style scoped>
.ending-wrapper {
    position: relative;
    /* IMPORTANT */
    width: 100vw;
    height: 100vh;
}

.wrappingMenu {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.toggle-btn {
    height: 2vw;
    width: 4vw;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    border: none;
    cursor: pointer;
}

.toggle-btn img {
    height: 1.5vw;
    width: 1.5vw;
    object-fit: contain;
}
</style>
