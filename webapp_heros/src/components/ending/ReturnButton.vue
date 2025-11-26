<template>
    <div class="bouton">
        Retourner au menu
    </div>
</template>

<style scoped>
.bouton {
    background-color: grey;
    border: solid 2px black;
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
    cursor: pointer;
    border-radius: 12px;
    box-shadow:
        0 0 0 6px #000,
        0 6px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    user-select: none;
    transition: transform 120ms, filter 120ms;
}

.bouton::before {
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

.bouton:hover {
    filter: brightness(105%);
    transform: scale(1.05);
    box-shadow: 0 0.5vw 0.5vw 0 #000;
}
</style>