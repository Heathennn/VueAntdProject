<template>
  <div class="common-header">
    <div class="header-top">
      <div class="top-inner">
        <div class="loginOrRegister">
          <span @click="toLogin">登录</span>丨<span>注册</span>
        </div>

        <div class="language">简体中文</div>
      </div>
    </div>
    <div class="header-nav">
      <div :class="['nav-item', nav.key === currentNav[0] ? 'nav-item-active' : '']" v-for="(nav, index) in menu"
           :key="index" @click="clickNav(nav)">
        <span>{{ nav.name }}</span>
<!--        <div class="sub-nav" v-if="nav.subMenu">-->
<!--          二级菜单-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonHeader",
    data() {
      return {
        currentNav: ['home'],
        menu: [
          {
            name: '首页',
            path: '/home',
            key: 'home'
          },
          {
            name: '日本留学',
            key: 'Japan',
            path: '/japan/index',
            subMenu: {
              title: '',
              icon: '',
              menu: [
                {
                  name: '高中报名',
                  key: 'school1'
                },
                {
                  name: '大学报名',
                  key: 'school2'
                },
                {
                  name: '考试信息',
                  key: 'info'
                },
                {
                  name: '入学安排',
                  key: 'plan'
                }
              ]
            }
          },
          {
            name: '幼儿教育',
            key: 'child',
            path: '/child/index'
          },
          {
            name: '投资提携',
            key: 'money',
            path: '/investment/index'
          },
          {
            name: 'C2C Group',
            key: 'C2C',
            path: '/c2c/index'
          },
        ]
      }
    },
    methods: {
      clickNav(nav) {
        this.$router.push({ path: nav.path, replace: true})
        this.currentNav = [nav.key, nav.subMenu ? nav.subMenu.menu[0].key : null]
      },
      // 点击具有下拉菜单的导航时事件
      clickSubMenu({key, domEvent}) {
        let menu = this.menu.find(item => item.key === key);
        this.current = [menu.subMenu.menu[0].key]
      },
      toLogin() {
        this.$router.push({path: '/login', replace: true})
      }
    }
  }
</script>

<style lang="less">
  .pc {
    .common-header {
      width: 100%;
      .header-top {
        width: 100%;
        height: 30px;
        margin: 0 auto;
        background-color: #434343;
        color: #ffffff;
        .top-inner {
          width: 960px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .header-nav {
        width: 960px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .nav-item {
          height: 50px;
          line-height: 50px;
          text-align: center;
          padding: 0 20px;
          .sub-nav {
            width: 100%;
            position: absolute;

          }
        }

        .nav-item-active {
          background-color: #DA251C;
          color: #ffffff;
        }
      }
    }
  }


</style>
