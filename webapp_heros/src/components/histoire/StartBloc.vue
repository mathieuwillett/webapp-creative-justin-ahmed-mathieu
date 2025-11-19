<template>
    <div>
        <p>Personnage 1</p>
        <p>Personnage 2</p>
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
    
</style>