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
            typingInterval: null
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

            const map = {
                "85": this.story.imagesFin[0],  // img 1
                "130": this.story.endingsImgs[1], // img 2
                // add more here:
                // "200": this.story.endingsImgs[2],
                // "300": this.story.endingsImgs[3],
            };

            return map[id] || null;
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
    <div>
        <EndingScreen :background="endingBackground"/>

        <NarrativeText>
            <NarrativeTextParagraph>
                {{ displayedText }}
            </NarrativeTextParagraph>
        </NarrativeText>

        <ChoicePanel>
            <ChoiceHistory :history="story.history" />
            <ReturnButton @click="retourMenu()" />
        </ChoicePanel>
    </div>
</template>
