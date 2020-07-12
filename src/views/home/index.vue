<template>
  <div class="home-page-container">
    <Banner></Banner>
    <Recommend></Recommend>
    <News></News>
    <C2C></C2C>
    <News2></News2>
     <School></School>
  </div>
</template>

<script>
  import Banner from './components/Banner' // Banner
  import News from './components/News' // 新闻
  import C2C from './components/C2C' // C2C
  import News2 from './components/News2' //投资
  import School from './components/School'
  import Recommend  from "views/home/components/Recommend"
  export default {
    name: "Home",
    components: {
      Banner,
      News,
      C2C,
      News2,
      School,
      Recommend
    }
  }
</script>

<style scoped>

</style>
