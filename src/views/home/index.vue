<template>
  <div class="home-page-container">
    <Banner></Banner>
    <News></News>
    <C2C></C2C>
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import News from './components/News'
  import C2C from './components/C2C'
  export default {
    name: "Home",
    components: {
      Banner,
      News,
      C2C
    }
  }
</script>

<style scoped>

</style>
