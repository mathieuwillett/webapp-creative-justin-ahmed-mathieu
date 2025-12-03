<template>
    <div class="wrapper">
        <div class="scene scene1"><img class="image" src="/Images/Scenes/FastFood.png" alt=""></div>
        <div class="scene scene2"><img class="image" src="/Images/Scenes/Bar.png" alt=""></div>
        <div class="scene scene3"><img class="image" src="/Images/Scenes/Meditation.png" alt=""></div>
        <div class="scene scene4"><img class="image" src="/Images/Scenes/Cafe.png" alt=""></div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: black;
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.scene {
    height: 50vh;
    width: auto;
}

p {
    user-select: none;
    /* Standard */
    -webkit-user-select: none;
    /* Chrome, Safari, Edge */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE/Edge */
}

.image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

@media screen and (max-width: 1400px) {
    .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .scene {
        height: 25vh;
        width: 50vw;
    }

    .scene3 {
        grid-row-start: 2;
    }

    .scene4 {
        grid-row-start: 2;
    }
}
</style>