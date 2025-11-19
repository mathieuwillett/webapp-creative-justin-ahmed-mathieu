<template>
    <div class="paragraph">
      <slot></slot>
    </div>
  </template>

<style scoped>
.paragraph {
  width: 100%;
  text-align: center; 
  user-select: none;       /* Standard */
    -webkit-user-select: none; /* Chrome, Safari, Edge */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
}
</style>