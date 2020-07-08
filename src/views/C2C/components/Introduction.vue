<template>
  <div class="c2c-introduction-container">
      <div class="header">公司简介</div>
      <div class="content">
        <div class="img">图片</div>
        <div class="text">打撒奥奥奥奥奥奥奥奥奥奥奥奥奥奥</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less">
.pc {
  .c2c-introduction-container {
    width: 960px;
    margin: 0 auto;
    .header {
      height: 80px;
      line-height: 80px;
      text-align: center;
    }

    .content {
      width: 600px;
      height: 195px;
      margin: 0 auto;
      display: flex;
      .img {
        width: 50%;
        height: 100%;
        border: 1px solid black;
      }
    }
  }
}
</style>
