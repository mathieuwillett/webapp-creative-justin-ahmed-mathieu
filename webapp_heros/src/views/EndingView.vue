<script>
import ChoiceHistory from '@/components/ending/ChoiceHistory.vue';
import EndingScreen from '@/components/ending/EndingScreen.vue';
import ReturnButton from '@/components/ending/ReturnButton.vue';

export default {
    name: 'ending',

    components: {
        EndingScreen,
        ChoiceHistory,
        ReturnButton
    },

    methods: {
        retourMenu() {
            this.$router.push({
                name: 'home'
            });
        }
    }
};
</script>

<template>
    <div>
        <EndingScreen></EndingScreen>
        <ChoiceHistory></ChoiceHistory>
        <ReturnButton @click="retourMenu()"></ReturnButton>
    </div>
</template>

