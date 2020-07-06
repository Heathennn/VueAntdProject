<template>
  <div class="news-container">
    <div class="news-inner">
      <div class="header">学院新闻</div>
      <div class="content">
        <div class="img"></div>
        <div class="news-list">
          <div class="news-item" v-for="(news, index) in list" :key="index">
            <span>{{ news.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        list: [
          {
            title: '新闻标题1'
          },
          {
            title: '新闻标题1'
          },
          {
            title: '新闻标题1'
          },
          {
            title: '新闻标题1'
          },
          {
            title: '新闻标题1'
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
  .news-container {
    width: 960px;
    height: 330px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .news-inner {
      width: 500px;
      height: 100%;
      .header {
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .content {
        display: flex;
        .img {
          width: 300px;
          height: 195px;
          box-sizing: border-box;
          border: 1px solid black;
        }

        .news-list {
          box-sizing: border-box;
          padding-left: 30px;
        }
      }
    }
  }
}
</style>
