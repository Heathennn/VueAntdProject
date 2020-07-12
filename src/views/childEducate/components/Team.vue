<template>
  <div class="child-team-container">
    <div class="header">
      专家团队, 师资教育
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
    name: "Team",
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
  .child-team-container {
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

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .img{
          width: 125px;
          height: 125px;
          box-sizing: border-box;
          border: 1px solid black;
        }

        .name {
          text-align: center;
          line-height: 80px;
        }
      }
    }
  }
}
</style>
