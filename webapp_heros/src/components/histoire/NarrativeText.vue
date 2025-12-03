<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    background-color: #FFA600;
    width: 100vw;
    height: 15vh;
    padding: 2vw;
    border: solid black 2px;
    color: black;
    font-size: 1.2vw;
    text-align: center;
    line-height: 30px;
}

@media screen and (max-width: 1400px) {
   div {
    height: 30vh;
    padding: 1vw;
   }
}
</style>
