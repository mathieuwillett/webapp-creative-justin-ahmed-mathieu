<template>
    <div class="wrapper">
        <div class="scene"><img class="image" src="/Images/Scenes/FastFood.png" alt=""></div>
        <div class="scene scene2"><img class="image" src="/Images/Scenes/Bar.png" alt=""></div>
        <div class="scene scene3"><img class="image" src="/Images/Scenes/Meditation.png" alt=""></div>
        <div class="scene scene4"><img class="image" src="/Images/Scenes/Cafe.png" alt=""></div>
    </div>
</template>

<style scoped>
div {
    background-color: lightgray;
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>

<style>
p{
    user-select: none;       /* Standard */
    -webkit-user-select: none; /* Chrome, Safari, Edge */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
}

.image {
    height:100%;
    transition: transform 0.3s ease;
}


    
</style>