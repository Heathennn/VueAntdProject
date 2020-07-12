<template>
  <div class="childEdu-container">
    <Banner></Banner>
    <Preschool></Preschool>
    <EducateStudy></EducateStudy>
    <Team></Team>
  </div>
</template>

<script>
  import Banner from './components/Banner'
  import Preschool from "views/childEducate/components/Preschool"
  import Team from './components/Team'
  import EducateStudy from "views/childEducate/components/EducateStudy"
  export default {
    name: "",
    components: {
      Banner,
      Preschool,
      EducateStudy,
      Team
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less">

</style>
