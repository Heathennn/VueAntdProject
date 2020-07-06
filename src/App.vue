<template>
  <div :class="{
    pc: true
  }">
    <router-view/>
  </div>
</template>

<style>
  .pc {
    width: 100%;
    height: 100%;
  }
</style>
