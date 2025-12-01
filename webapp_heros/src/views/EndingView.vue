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
            return useStoryStore();   // ✔ correct reactive access
        },
        texte() {
            return this.story.narrative; // ✔ reactivity restored
        },
        endingBackground() {
            const id = this.$route.params.id;
            return this.story.endingImage(id); // ✔ clean, reactive, scalable
        }
    },

    methods: {
        retourMenu() {
            this.$router.push({ name: 'home' });
        },

        startTyping(fullText) {
            if (this.typingInterval) clearInterval(this.typingInterval);

            this.displayedText = "";
            let index = 0;
            const speed = 30;

            this.typingInterval = setInterval(() => {
                this.displayedText += fullText[index];
                index++;

                if (index >= fullText.length) {
                    clearInterval(this.typingInterval);
                    this.typingInterval = null;
                }
            }, speed);
        }
    },

    mounted() {
        const audioStore = useAudioStore();
        this.story.goToChapter(this.$route.params.id);  // now it works
        audioStore.setTrack("TheEclipseRising.mp3");
    },


    watch: {
        texte(newText) {
            this.startTyping(newText);
        },
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
    <img v-if="showChoices" src="/Images/down-arrow.png" alt="Hide Choices">
    <img v-else src="/Images/up-arrow.png" alt="Show Choices">
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
    position: relative; /* IMPORTANT */
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
