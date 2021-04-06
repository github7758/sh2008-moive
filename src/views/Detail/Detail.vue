<template>
  <div class="detail">
    <div class="img">
      <img v-lazy="film.poster" />
    </div>
    <div>
      <div class="goBack">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
          alt=""
          @click='goBack'
        />
      </div>
      <div>{{ film.name }}</div>
      <div>{{ film.category }}</div>
      <div>{{ film.premiereAt | parsePremiereAt }}上映</div>
      <div>{{ film.nation }} | {{ film.runtime }} 分钟</div>
      <div>
        {{ film.synopsis }}
      </div>
    </div>
    <br>
    <div class="actors-title-bar"><span class="actors-title-text">演职人员</span></div>
    <Swiper :key="'actors_' + film.actors.length">
      <div
        v-for="(item, index) in film.actors"
        :key="index"
        class="swiper-slide"
      >
        <div>
          <img :src="item.avatarAddress" alt="" />
        </div>
      </div>
    </Swiper>
    <div class="goSchedule">
        选座购票
      </div>
  </div>
</template>

<script>
import { moiveDetail } from "@/api/api";
import moment from "moment";
import Swiper from "@/components/Swiper";
export default {
  data() {
    return {
      film: { actors: [], photos: [] },
    };
  },
  async mounted() {
    let ret = await moiveDetail(this.$route.params.filmId);
    this.film = ret.data.data.film;
  },
  filters: {
    parsePremiereAt: function (value) {
      return moment(value).format("YYYY-MM-DD");
    },
  },
  components: {
    Swiper,
  },
  created() {
    this.eventBus.$emit("footernav", false);
  },
  beforeDestroy() {
    this.eventBus.$emit("footernav", true);
  },
  methods:{
    goBack:function(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  margin-bottom: 50px;
  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }

    .actors-title-bar {
    width: 100%;
    padding: 15px;
}
  }

  .goBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;

    img {
      width: 30px;
    }
  }

  .swiper-slide {
    img {
      width: 80px;
      height: 105px;
    }
  }
}

.goSchedule {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    z-index: 100;
}
</style>