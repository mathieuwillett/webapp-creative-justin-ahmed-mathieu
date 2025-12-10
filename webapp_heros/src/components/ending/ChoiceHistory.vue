<script>
export default {
    name: "ChoiceHistory",

    props: {
        history: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div class="history">
        <h2>Vos choix</h2>

        <ul>

            <!-- Show this when history is empty -->
            <li v-if="history.length === 0">History is empty</li>

            <!-- Show entries when history is NOT empty -->
            <li v-for="(entry, index) in history" :key="index">
                <strong>Chapitre {{ entry.chapter }}</strong>
            </li>

        </ul>
    </div>
</template>



<style scoped>
.history {
    width: 30vw;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw 2vh;
    background: #FFA600;
    color: #111;
    font-weight: 700;
    letter-spacing: 0.06em;
    border: none;
    border-radius: 12px;
    box-shadow:
        0 0 0 6px #000,
        0 6px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    user-select: none;
    transition: transform 120ms, filter 120ms;
    font-size: auto;
}

.history::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-image:
        radial-gradient(circle at 10% 10%, rgba(0, 0, 0, .25) 0 2px, transparent 2px),
        radial-gradient(circle at 60% 40%, rgba(0, 0, 0, .18) 0 3px, transparent 3px),
        radial-gradient(circle at 85% 80%, rgba(0, 0, 0, .12) 0 4px, transparent 4px);
    background-size: 8px 8px, 12px 12px, 20px 20px;
    opacity: 0.35;
    mix-blend-mode: overlay;
    pointer-events: none;
}

@media screen and (max-width: 1400px) {
    .history {
        height: 15vh;
        font-size: 0.8vh;
    }
}

@media screen and (max-width: 700px) {
    .history {
        font-size: 0.6vh;
    }
}
</style>