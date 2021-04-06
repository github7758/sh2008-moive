<template>
  <div>
    <div class="header">
      <div class="left">
        <i class="iconfont icon-tubiaoguifan2" style="font-size: 19px" @click='goBack()'></i>
      </div>
      <div class="title">当前城市 -</div>
    </div>
    <div class="search-city-input">
      <div class="input-wrap">
        <i
          class="search-icon iconfont icon-sousuo-sousuofangdajing"
          style="font-size: 20px"
        ></i>
        <input
          type="text"
          placeholder="输入城市名或拼音"
          class="search-input"
        />
        <div class="clean-icon">
          <i
            class="iconfont icon-chongzhi-qingchu"
            style="font-size: 20px; display: none"
          ></i>
        </div>
      </div>
    </div>
    <div class="content">
      <van-index-bar :index-list="indexList" highlight-color="red">
        <template v-for="(item, index) in dataList">
          <van-index-anchor
            :index="item.index"
            :key="index"
            style="background: #eee"
          />
          <van-cell
            @click="chooseCity(sub)"
            v-for="(sub, key) in item.data"
            :title="sub.name"
            :key="key"
          />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { cityListData } from "@/api/api";
import Vue from "vue";
import "vant/lib/index.css";
import { IndexBar, IndexAnchor, Cell } from "vant";
import("@/assets/app.50919e9088f5a9735b1aec0c8d3f0f4f.css");

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

import { mapMutations } from "vuex";
export default {
  data() {
    return {
      dataList: [],
      indexList: [],
    };
  },
  // 进入时去掉底部导航
  created() {
    this.eventBus.$emit("footernav", false);
  },
  // 出来时显示底部导航
  beforeDestroy() {
    this.eventBus.$emit("footernav", true);
  },
  async mounted() {
    let ret = await cityListData();
    this.dataList = ret[0];
    this.indexList = ret[1];
  },
  methods: {
    ...mapMutations(["setCity"]),
    ...mapMutations(["setCityId"]),
    chooseCity: function (sub) {
      console.log(sub);
      console.log(sub.cityId);
      this.$store.commit("setCity", sub.name);
      this.$store.commit("setCityId", sub.cityId);
      this.$router.go(-1);
    },
    goBack:function(){
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  // position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 300;
  background-color: #fff;

  .title {
    width: 72%;
    text-align: center;
    font-size: 17px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #191a1b;
  }

  .left {
    width: 14%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    & > i {
      margin-left: 10px;
    }
  }
}

.search-city-input {
  z-index: 2000;
  height: 49px;
  width: 100vw;
  padding: 9.5px 15px;
  background-color: #f4f4f4;
  position: fixed;
  top: 44px;

  .input-wrap {
    background-color: #fff;
    position: relative;
    display: inline-block;
    border-radius: 3px;
    width: 100%;
    height: 30px;

    .search-icon {
      position: absolute;
      left: 7px;
      top: 0;
      line-height: 30px;
      font-size: 21px;
      color: #797d82;
    }
    .search-input {
      position: absolute;
      left: 33.5px;
      top: 0;
      height: 30px;
      width: calc(100% - 65px);
      border: 0;
    }
  }
}
.content {
  margin-top: 93px;
}
</style>