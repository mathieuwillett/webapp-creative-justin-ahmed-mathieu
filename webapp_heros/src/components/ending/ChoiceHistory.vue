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
            <li v-for="(entry, index) in history" :key="index" v-if="history.length === 0">History is empty>
                <strong>Chapitre {{ entry.chapter }}</strong>

                <div v-if="entry.choice">
                    Choix : {{ entry.choice }}
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>
.history {
    width: 30vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1vw 2vh;
    background: #ADD8E6;
    color: #111;
    font-weight: 700;
    letter-spacing: 0.06em;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    box-shadow:
        0 0 0 6px #000,
        0 6px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    user-select: none;
    transition: transform 120ms, filter 120ms;
    margin: 10vh;
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
</style>