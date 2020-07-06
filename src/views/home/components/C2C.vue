<template>
  <div class="c2c-container">
    <div class="c2c-item" v-for="(item, index) in list" :key="index">
      <div class="move-page">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "C2C",
    data() {
      return {
        list: [
          {
            content: '投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作',
            imgUrl: ''
          },
          {
            content: '投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作',
            imgUrl: ''
          },
          {
            content: '投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作、富士优学的内容投资合作',
            imgUrl: ''
          }
        ]
      }
    },
    methods: {
      handleMouseEnter() {
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less">
.pc {
  .c2c-container {
    width: 960px;
    height: 340px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    .c2c-item {
      width: 188px;
      height: 222px;
      box-sizing: border-box;
      border: 1px solid black;
      margin: 0 10px;
      overflow: hidden;
      position: relative;
      .move-page {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 180px;
        transition: all 0.5s;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        color: #ffffff;
      }
      &:hover {
        .move-page {
          top: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
