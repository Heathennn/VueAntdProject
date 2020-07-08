<template>
  <div class="c2c-page-container">
    <Banner></Banner>
    <Introduction></Introduction>
    <Educate></Educate>
    <Near></Near>
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import Introduction from './components/Introduction'
  import Educate from './components/Educate'
  import Near from './components/Near'
  export default {
    name: "C2CIndex",
    components: {
      Banner,
      Introduction,
      Educate,
      Near
    }
  }
</script>

<style scoped>

</style>
