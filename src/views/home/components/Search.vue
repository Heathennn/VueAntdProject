<template>
  <div class="dh-search dh-transparent-box" ref="dh-transparent-box">
    <div class="dh-search-input" v-clickoutside="searchBlur">
      <div class="dh-search-input-outbox">
        <input type="text" id="search" :placeholder="getPlaceholder(activeType.type)" v-model="searchContent"
          @focus="searchFocus" ref="home-search" autocomplete="off" @keyup.enter="_search(null,hasInputText)" />
        <!--  搜索候选提示 -->
        <div class="dh-search-tipbar" v-if="isFocus && !hasInputText" @click="clickSeachTipContent">
        <!-- 搜索历史 -->
          <div class="dh-search-history">
            <div class="history-title clearfix">
              <span class="title-left">搜索记录</span>
              <span class="history-clear-btn" @click="clearSearchHistory">清除记录</span>
            </div>
            <div class="history-content">
              <span v-for="(item, index) in searchHistory" :key="index" class="history-item"
                @click="jumpNextPage(item)">{{ item.text }}</span>
            </div>
          </div>
        </div>
        <!-- 模糊搜索 -->
        <div class="dh-search-tipbar dh-search-tips" v-if="isFocus && hasInputText && userSearchTips.length>0"
          @click="clickSeachTipContent">
          <ul class="dh-search-tip-list">
            <li class="search-tip-item" v-for="(tipItem, tipIndex) in userSearchTips" :key="tipIndex"
              @click="jump2Detail(tipItem)" v-html="tipItem.title"></li>
          </ul>
        </div>
        <!-- </transition> -->
      </div>
<!--      <button id="searchButton" @click="_search(null,hasInputText)">-->
<!--        <i class="iconfont icon-sousuo1"></i>-->
<!--      </button>-->
    </div>
  </div>
</template>

<script>
  // import {
  //   getSearchTip,
  //   getSearchList
  // } from "../api/index";

  export default {
    data() {
      return {
        searchContent: "",
        activeTag: "",
        isFocus: false,
        isClickSeachTipContent: false,
        activeType: {
          name: "全部",
          icon: "icon-quanbu2",
          activeIcon: "icon-quanbu1",
          type: ""
        },
        searchHistory: [
          {
            text: '搜索历史1'
          },
          {
            text: '搜索历史2'
          },
          {
            text: '搜索历史2'
          },
          {
            text: '搜索历史2'
          }
        ],
        hotSearch: [{
            name: "景点",
            tags: [{
              name: "自然景观"
            }]
          },
          {
            name: "景点",
            tags: [{
              name: "自然景观"
            }]
          }
        ],
        // 热门城市
        hotCityData: [],
        // 后端返回的原始列表
        searchTips: [],
        // 处理后的列表
        userSearchTips: [],
        type2page_map: {
          HomeScenicSpot: "/scenicplay.html#/scenicplaydetail", // 景点玩乐
          HomeAdvisory: "/tripinfo.html#/tripdetail", // 旅游咨询详情
          City: "/place.html#/placedetail", // 目的地详情
          HomeTravelMall: "/mall.html#/detail" // 旅行商城详情
        },
      };
    },
    computed: {
      isSearchFocus: {
        get() {
          return this.$store.state.isSearchFocus;
        },
        set(status) {
          this.$store.commit("CHANGE_SEARCH_STATUS", status);
        }
      },
      focusElment() {
        return this.$refs["dh-transparent-box"];
      },
      hasInputText() {
        return this.searchContent.trim();
      }
    },
    watch: {
      searchContent(val) {
        if (val != ''){

        }
          // this.fetchSearchList();
        else {

          this.searchTips = null
        }
      }
    },
    methods: {
      // 输入提示动态返回
      getPlaceholder(href) {
        if (href === '')
          return '搜索一下'
        else if (href === 'City')
          return '输入搜索地区/城市'
        else if (href === 'HomeAdvisory')
          return '输入搜索目的地/资讯类型等内容'
        else if (href === 'HomeTravelMall')
          return '输入搜索目的地/商品类型等内容'
      },
      // 获取父组件传来的热门城市
      // getHotCityData(data) {
      //   this.hotCityData = data
      // },
      // getHotAdvisoryData(data) {
      //   this.hotAdvisoryData = data
      // },
      // getHotTravelMallData(data) {
      //   this.hotTravelMallData = data
      // },
      async fetchTip() {
        // let res = await getSearchTip();
        // this.hotSearch = res.data;
      },
      // 获取搜索列表
      // async fetchSearchList() {
      //   let res = await getSearchList({
      //     href: this.activeType.type,
      //     keyword: this.searchContent
      //   });
      //   this.searchTips = res.data.list;
      //   this.setSearchTips();
      // },
      searchFocus() {
        // this.fetchTip();
        // this.isSearchFocus = true;
        this.isFocus = true;
      },
      searchBlur() {
        this.isFocus = false;
        // this.isSearchFocus = false;
      },
      clickSeachTipContent() {
        // this.$refs['home-search'].focus();
      },
      changeSearchType(type) {
        this.activeType = type;
        if (this.searchContent) {
          // this.fetchSearchList();
        }
      },
      jump2Detail(item) {
        let type = item.hrefs.split(",")[0];
        let scenicType = item.hrefs.split(",")[1];
        let url = this.type2page_map[type];
        if (type === "HomeTravelMall") {
          let href = item.hrefs.split(",")[1];
          url = `${url}?id=${item.id || item.travelMallId}&href=${href}&hrefs=${item.hrefs}`;
        }
        if (type === "HomeScenicSpot") {
          url = `${url}?scenicSpotId=${item.id}&scenicType=${scenicType}&hrefs=${item.hrefs}`;
        }
        if (type === "City") {
          url = `${url}?cityId=${item.id}`;
        }
        if (type === "HomeAdvisory") {
          url = `${url}?newsId=${item.id || item.newsId}&hrefs=${item.hrefs}`;
        }
        this.delRepeatHistiry({
          action: 'jump2Detail',
          text: item.oldTitle || item.title
        })
        this.addSearchHistory(item.oldTitle || item.title, item, 'jump2Detail')
        window.open(url);
      },
      jump2page(tag, href) {
        this.delRepeatHistiry({
          action: 'jump2page',
          text: tag.name
        })
        this.addSearchHistory(tag.name, tag, 'jump2page')
        window.open(
          `/scenicplay.html#/?moduleTypePId=${tag.pId}&moduleTypeId=${tag.moduleTypeId}&href=${href}&name=${tag.name}`
        );
      },
      jumpNextPage(item) {
        // 动态调用相应跳转方法
        this[item.action](item.href, item.text)
      },
      toCityDetal(cityId) {
        window.open(`place.html#/placedetail?cityId=${cityId}`)
      },
      setSearchTips() {
        let tips = cloneDeep(this.searchTips);
        if (!this.searchContent) return [];
        let liTemp = `<span style="color: #999999; fontWeight: bold">TEXT</span>`;
        let wordTemp = `<span style="color: #333333; fontWeight: bold">TEXT</span>`;
        tips = tips.map(tipItem => {
          let originText = tipItem.title;
          let initText;
          let initWord = wordTemp.replace(/TEXT/g, this.searchContent); // 带样式的word
          let reg = new RegExp(this.searchContent, "g");
          initText = originText.replace(reg, initWord);
          initText = `<span style="cursor: pointer" >${initText}</span>`;
          return Object.assign(tipItem, {
            title: initText,
            oldTitle: tipItem.title
          });
        });
        this.userSearchTips = tips;
      },
      // 搜索按钮
      _search(nullVal, text) {
        // 删除重复重读旧历史
        this.delRepeatHistiry({
          action: '_search',
          text: text
        })
        this.addSearchHistory(text, this.activeType, '_search')
        // 带着搜索内容跳转页面
        window.open(`/search.html#/?searchContent=${text}&activeTab=${this.activeType.type}`, "_blank");
      },
      addSearchHistory(text, val, action) {
        // 去除两端空格
        let oneTrace = {
          text: text,
          href: val,
          action: action
        }
        // 把当前搜索加入到搜索记录中
        if (this.searchHistory.length === 5) {
          this.searchHistory.shift()
        }
        this.searchHistory.push(oneTrace)
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory))
      },
      delRepeatHistiry(params) {
        // 如果有重复的历史，则删除重复的旧历史
        // if (params.action === '_search') {
        let repeatIndex = this.searchHistory.findIndex(ele => {
          return ele.text === params.text && ele.action === params.action
        })
        // } else if (params.action === 'jump2page') {
        //   repeatIndex = this.searchHistory.findIndex(ele => {
        //     return ele.text === params.text && ele.action === params.action
        //   })
        // } else if (params.action === 'jump2Detail') {
        //   repeatIndex = this.searchHistory.findIndex(ele => {
        //     return ele.text === params.text && ele.action === params.action
        //   })
        // }
        if (repeatIndex != -1)
          this.searchHistory.splice(repeatIndex, 1)
      },
      clearSearchHistory() {
        localStorage.removeItem('searchHistory')
        this.searchHistory = []
      }
    },
    created() {
      // this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || []
      //,JSON.stringify(obj)
    }
  };
</script>

<style lang="less" scoped>
  .dh-search {
    color: #000000;
    box-sizing: border-box;
    padding: 22px 30px 25px 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    /*padding: {*/
    /*  right: 30px;*/
    /*  bottom: 25px;*/
    /*  left: 30px;*/
    /*  top: 22px;*/
    /*}*/
  }

  .dh-search-tap {
    overflow: hidden;
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 0;
    padding: 0;
    padding-bottom: 5px;
  }

  .dh-search-tap-tag {
    font-size: 18px;
    font-weight: 400;
    float: left;
    cursor: pointer;

    margin-right: 82px;

  }

  .dh-search-tap-tag:last-child {
    margin-right: 0;
  }

  .iconfont {
    font-size: 20px;
  }

  .dh-search-tag-title {
    padding-left: 8px;

  }

  // 搜索控件
  .dh-search-input {
    width: 300px;
    height: 40px;
    .dh-search-input-outbox {
      position: relative;
      width: 300px;
      height: 40px;
      background: rgba(256, 256, 256, 0.8);
      float: left;
      line-height: 44px;
      border-radius: 20px 20px 20px 20px;
    }
    /*搜索提示*/
    .dh-search-tipbar {
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      top: 55px;
      left: 0px;
      background: #ffffff;
      color: #999999;
      border: 1px solid #f1f1f1;
      box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.06);
      border-radius: 3px;


      padding-top: 18px;
      padding-bottom: 18px;

    }

    #search {
      border: none;
      outline: none;
      width: 80%;
      margin-left: 40px;

    }

    #search::-webkit-input-placeholder {
      color: #cccccc;
      font-size: 16px;
    }

    .history-title {
      border-bottom: 1px dashed #f2f2f2;
      .title-left {
        float: left;
        color: #222222;
        font-size: 18px;
      }

      .history-clear-btn {
        color: #999999;
        font-size: 14px;
        float: right;
        cursor: pointer;

        &:hover {
          color: darken(#999999, 10%)
        }
      }
    }

    .dh-search-history {
        padding-left: 18px;
      padding-right: 18px;
    }

    .history-item {
      font-size: 12px;
      color: #999999;
      display: inline-block;
      white-space: nowrap;
      cursor: pointer;

      padding-left: 5px;
      padding-right: 5px;

      &:hover {
        color: #666;
      }
    }

    .hot-search {
      .hot-title {
        border-bottom: 1px dashed #f2f2f2;

        font-size: 18px;
        color: #222222;
      }

      .hot-content {
        .hot-item {
          box-sizing: border-box;
          position: relative;

          padding-right: 11px;

          border-bottom: 1px dashed #f2f2f2;


          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .hot-li {
          padding: 0 11px;
          cursor: pointer;

          &:hover {
            background-color: #f5f5f5;
          }
        }

        .hot-type {
          background: #bbc8e6;
          color: #ffffff;
          height: 24px;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          border-radius: 3px;
          box-sizing: border-box;

          margin-right: 35px;

          padding: 3px 10px 3px 10px;
        }

        .hot-type-tag,
        .hot-type {
          cursor: pointer;
        }

        .hot-type-tags {
          .hot-type-tag {
            margin-right: 20px;


            &:hover {
              color: #666;
            }
          }
        }

        .icon-more {
          font-size: 12px;
          position: absolute;
          right: 0;
          cursor: pointer;

          &:hover {
            color: darken(#999, 20%)
          }
        }
      }
    }
  }

  // 搜索时候选
  .dh-search-tips {
    .dh-search-tip-list {
      .search-tip-item {
        color: #999999;
        box-sizing: border-box;

        padding-left: 18px;
        padding-right: 18px;

        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
          background: #f5f5f5;
        }
      }
    }
  }

  #searchButton {
    outline: none;
    border: none;
    width: 96px;
    height: 45px;
    cursor: pointer;
    display: inline-block;
    background: #e52f3e;
    color: #ffffff;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    .iconfont {
      font-size: 22px;
    }

    &:hover {
      background: #E61728;
    }
  }
</style>
