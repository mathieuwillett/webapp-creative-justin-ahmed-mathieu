<template>
    <div class="ending-screen" :style="{
        backgroundImage: background ? `url(${background.img})` : 'none'
    }">
    </div>
</template>

<script>
export default {
    name: "EndingScreen",
    props: {
        background: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>
.ending-screen {
    width: 100vw;
    height: 50vh;
    background-size: 100% 200%;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
}
</style>