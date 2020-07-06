<template>
  <div class="home">
    首页
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less">
  .home {
    width: 960px;
    height: 100px;
  }
</style>
