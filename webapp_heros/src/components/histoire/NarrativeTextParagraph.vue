<template>
  <div class="paragraph">
    <slot></slot>
  </div>
</template>

<style scoped>
.paragraph {
  width: 100%;
  word-wrap: break-word;
  text-align: start;
  user-select: none;
  /* Standard */
  -webkit-user-select: none;
  /* Chrome, Safari, Edge */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE/Edge */
}

@media screen and (max-width: 1400px) {
  .paragraph {
    height: 100%;
    font-size: 1.3vh;
  }
}
</style>