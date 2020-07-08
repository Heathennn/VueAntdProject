<template>
    <div class="banner-container">
      <Search></Search>
    </div>
</template>

<script>
  import Search from './Search'
    export default {
        name: "Banner",
      components: {
        Search
      }
    }
</script>

<style lang="less">
  .pc {
    .banner-container {
      width: 960px;
      height: 260px;
      margin: 0 auto;
      box-sizing: border-box;
      border: 1px solid black;
      background: #BABABA;
    }
  }
</style>
