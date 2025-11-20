<template>
    <div class="card">
        <div class="images">
            <slot name="images"></slot>
        </div>
        <div class="background">
            <div class="name">
                <slot name="name"></slot>
            </div>
            <div class="description">
                <slot name="descriptions"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 40vw;
    height: 50vh;
    display: flex;
    margin-bottom: 10vh;
    box-shadow: 0 0 0 6px #000, 0 6px 0 rgba(0, 0, 0, 0.15);
}

.images {
    width: 20vw;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.images::before {
    content: "";
    inset: 0;
    background-image: url("@/assets/War2.png");
    background-size: cover;
    filter: blur(3px);
    opacity: 0.8;
    position: absolute;
    z-index: -1;
}

.background {
    width: 20vw;
    height: 50vh;
    background: #ffd33d;
    color: #111;
    font-weight: 700;
    letter-spacing: 0.06em;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.name {
    width: 20vw;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.description {
    width: 20vw;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background::before {
    content: "";
    position: absolute;
    inset: 0;
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