<template>
  <div class="teamwork-container">
    <div class="header">合作方式</div>
    <div class="content">
      <div class="img-item" v-for="(item, index) in 8" :key="item" :style="{ marginRight: (index + 1) % 4 === 0 ? '0px' : '20px' }"></div>
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
    .teamwork-container {
      width: 600px;
      margin: 0 auto;
      margin-bottom: 50px;
      .header {
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-top: 50px;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        .img-item {
          width: 135px;
          height: 95px;
          margin-right: 20px;
          margin-bottom: 20px;
          box-sizing: border-box;
          border: 1px solid black;
        }
      }
    }
  }
</style>
