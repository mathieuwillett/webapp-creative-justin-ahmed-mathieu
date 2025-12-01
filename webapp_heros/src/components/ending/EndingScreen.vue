<template>
    <div
        class="ending-screen"
        :style="{
            backgroundImage: background ? `url(${background.img})` : 'none'
        }"
    ></div>
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
    position: absolute;   /* <— KEY */
    inset: 0;             /* top: 0; right: 0; bottom: 0; left: 0 */
    width: 100vw;
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    z-index: -1;          /* <— places it BEHIND everything */
}
</style>