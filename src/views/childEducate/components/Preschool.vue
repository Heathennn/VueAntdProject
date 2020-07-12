<template>
  <div class="child-preschool-container">
    <div class="header">
      幼稚园
    </div>

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
            name: 'C2C'
          },
          {
            name: '日本留学'
          },
          {
            name: '投资合作'
          },
          {
            name: '幼儿教育'
          },
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
  .child-preschool-container {
    width: 600px;
    margin: 0 auto;
    .header {
      text-align: center;
      height: 100px;
      line-height: 100px;
    }
    .icons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .icon-item {
        width: 135px;
        height: 175px;
        background-color: #E7E7E7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img{
          width: 90px;
          height: 90px;
          box-sizing: border-box;
          border: 1px solid black;
        }

        .name {
          text-align: center;
          line-height: 50px;
        }
      }
    }
  }
}
</style>
