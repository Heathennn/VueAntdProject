<template>
  <div class="news2-container">
      <div class="header">投资合作、富士优学</div>
      <div class="content">
          <div class="news-item" v-for="(news, index) in list" :key="index" :style="{
              flexDirection: index === 1 ? 'row-reverse' : 'row'
          }">
              <div class="img"></div>
              <div class="text">{{ news.content }}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'News2',
    data() {
        return {
            list: [
                {
                    imgUrl: '',
                    content: '答案了接口数据库阿萨德开机了sad数据库里是打卡的'
                },
                {
                    imgUrl: '',
                    content: '答案了接口数据库阿萨德开机了sad数据库里是打卡的'
                },
                {
                    imgUrl: '',
                    content: '答案了接口数据库阿萨德开机了sad数据库里是打卡的'
                }
            ]
        }
    }
}
</script>

<style lang="less">
.pc {
    .news2-container {
        margin: 0 auto;
        width: 960px;
        min-height: 500px;
        box-sizing: border-box;
        border: 1px solid black;
        padding-bottom: 40px;
        .header {
            width: 100%;
            text-align: center;
            height: 60px;
            line-height: 60px;
            margin-top: 40px;
        }

        .content {
            width: 600px;
            margin: 0 auto;
            .news-item {
                height: 150px;
                width: 100%;
                display: flex;
                .img {
                    width: 300px;
                    height: 150px;
                    box-sizing: border-box;
                    border: 1px solid black;
                }
                .text {
                    width: 300px;
                    height: 150px;
                }
            }
        }
    }
}
</style>