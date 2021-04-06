<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <Loading v-if="loading"></Loading>
    <div>
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="left">
          <img :src="item.poster" />
        </div>
        <div class="middle">
          <div>{{ item.name }}</div>
          <div v-if="type == 1">
            <span v-if="item.grade">观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>主演：{{ item.actors | parseActors }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预购</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import BScroll from "better-scroll";
import { nowPlayingListData, comingSoonListData } from "@/api/api";
export default {
  data() {
    return {
      loading: true,
      height: 0,
      bs: null,
      flag: true,
      pageNum: 1,
      data: [],
      cityId: 110100,
    };
  },
  props: ["list", "type"],
  components: {
    Loading,
  },
  created() {
    this.data = this.list;
    if (this.data.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  filters: {
    parseActors: function (value) {
      let actors = "";
      if (value) {
        value.forEach((element) => {
          actors += element.name + " ";
        });
      } else {
        actors = "暂无主演";
      }
      return actors;
    },
  },
  methods: {
    goDetail: function (filmId) {
      this.$router.push({ name: "detail", params: { filmId } });
    },
    getData: async function () {
      if (this.flag) {
        this.pageNum++;
        if (this.type == 1) {
          var ret = await nowPlayingListData(this.cityId, this.pageNum);
        } else {
          var ret = await comingSoonListData(this.cityId,this.pageNum);
        }
        if (ret.data.data.films.length < 10) {
          this.flag = false;
        }
        this.data = this.data.concat(ret.data.data.films);
      }
    },
  },
  beforeMount(){ this.height = document.documentElement.clientHeight - 144;},
  mounted() {
   

    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      pullDownRefresh: true,
      click: true,
      mouseWheel:true,
      probeType: 3,
    });
    this.bs.on("pullingUp", async () => {
      await this.getData();
      this.bs.finishPullUp();
      this.bs.refresh()
    });
    this.bs.on("pullingDown", () => {
      this.getData();
      this.bs.finishPullDown();
      this.bs.refresh()
    });
  },
  beforeDestroy() {
    this.bs = null;
  },
};
</script>


<style lang="scss">
.list {
  margin-bottom: 50px;
  margin-top: 50px;

  .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
      width: 77px;
      height: 100px;
      margin-left: 20px;
      img {
        width: 66px;
        height: 100%;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;

      div:nth-of-type(1) {
        color: #191a1b;
        font-size: 16px;
      }

      div:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .grade {
        color: #ffb232;
        font-size: 14px;
      }
    }

    .right {
      width: 15%;
      display: flex;
      align-items: center;
      margin-right: 20px;

      span {
        border: 1px solid #ff5f16;
        background: white;
        color: #ff5f16;
        border-radius: 2px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        width: 50px;
        text-align: center;
      }
    }
  }
}
.scroll {
  overflow: hidden;
}
</style>