<template>
  <div class="c2c-educate-container">
    <div class="header">高等教育</div>
    <div class="icons">
      <div class="icon-item" v-for="(icon, index) in list" :key="index">
        <div class="img"></div>
        <div class="name">{{ icon.name }}</div>
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
            name: '小学'
          },
          {
            name: '初中'
          },{
            name: '高中'
          },
          {
            name: '大学'
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
  .c2c-educate-container {
    width: 600px;
    margin: 0 auto;
    .header {
      height: 80px;
      line-height: 80px;
      text-align: center;
      margin-top: 50px;
    }

    .icons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon-item {
        .img {
          width: 80px;
          height: 80px;
          box-sizing: border-box;
          border: 1px solid black;
          border-radius: 50%;
        }

        .name {
          text-align: center;
        }
      }
    }
  }
}
</style>
