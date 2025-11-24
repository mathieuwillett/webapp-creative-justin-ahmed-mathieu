<script>
import ChoiceHistory from '@/components/ending/ChoiceHistory.vue';
import EndingScreen from '@/components/ending/EndingScreen.vue';
import ReturnButton from '@/components/ending/ReturnButton.vue';
import { useStoryStore } from '@/stores/storyStore';

export default {
    name: 'ending',

    components: {
        EndingScreen,
        ChoiceHistory,
        ReturnButton
    },

    setup() {
        const story = useStoryStore();
        return { story };
    },

    methods: {
        retourMenu() {
            this.$router.push({ name: 'home' });
        }
    }
};
</script>

<template>
    <div>
        <EndingScreen>
            <ChoiceHistory :history="story.history" />
            <ReturnButton @click="retourMenu()" />
        </EndingScreen>
    </div>
</template>
