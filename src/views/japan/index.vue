<template>
  <div class="japan-container">
    <Banner></Banner>
    <div class="high-school">
      <div class="header">
        高中报名
      </div>
      <div class="content">
        <div class="img"></div>
        <div class="text">打上卡丢三落四两节课萨拉两节课圣诞节快乐困了就</div>
      </div>
    </div>

    <div class="college">
      <div class="header">
        大学报名
      </div>
      <div class="content">
        <div class="img"></div>
        <div class="text">打上卡丢三落四两节课萨拉两节课圣诞节快乐困了就</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner'
  export default {
    name: "",
    components: {
      Banner
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
.pc {
  .japan-container {
    .high-school {
      width: 600px;
      margin: 0 auto;
      .header {
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .content {
        display: flex;
        .img {
          width: 300px;
          height: 150px;
          box-sizing: border-box;
          border: 1px solid black;
        }
        .text {
          flex: 1;
          box-sizing: border-box;
          padding: 20px;
        }
      }
    }
    .college {
      width: 600px;
      margin: 0 auto;
      margin-bottom: 50px;
      .header {
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
      .content {
        display: flex;
        .img {
          width: 300px;
          height: 150px;
          box-sizing: border-box;
          border: 1px solid black;
        }
        .text {
          flex: 1;
          box-sizing: border-box;
          padding: 20px;
        }
      }
    }
  }
}
</style>
