<template>
  <div class="educate-study-container">
    <div class="header">教育研究</div>
    <div class="items">
      <div class="item" v-for="(item, index) in list" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        list: [
          {
            content: '撒大大撒所大快速点击卡仕达克'
          },
          {
            content: '撒大大撒所大快速点击卡仕达克'
          },
          {
            content: '撒大大撒所大快速点击卡仕达克'
          },
          {
            content: '撒大大撒所大快速点击卡仕达克'
          }
        ]
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less">
.pc {
  .educate-study-container {
    width: 960px;
    height: 339px;
    margin: 0 auto;
    .header {
      text-align: center;
      height: 80px;
      line-height: 80px;
    }

    .items {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        width: 150px;
        height: 200px;
        box-sizing: border-box;
        border: 1px solid black;
      }
    }
  }
}
</style>
