<template>
  <nav>
    <header data-v-4070467a="">
      <!---->
      <!---->
      <div data-v-4070467a="" class="left">
        <div data-v-4070467a="" class="city" @click='goCity()'>
          <span data-v-4070467a="">{{city}}</span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC"
          />
        </div>
      </div>
      <div data-v-4070467a="" class="title">
        <div data-v-4070467a="">电影</div>
      </div>
      <div data-v-4070467a="" class="right"></div>
    </header>
    <ul>
      <router-link to="/film/NowPlaying" tag="li" active-class="active">
        <span>正在热映</span>
      </router-link>
      <router-link to="/film/ComingSoon" tag="li" active-class="active">
        <span>即将上映</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // bool:false,
      city:this.$store.state.city
    }
  },
  // mounted(){
  //     window.addEventListener('scroll',(e)=>{
  //       let top = document.documentElement.scrollTop
  //       if(top > 94){
  //         this.bool = true
  //       }else{
  //         this.bool = false
  //       }
  //     })
  // },
  methods:{
    goCity:function(){
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="scss">
nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;

  header[data-v-4070467a] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    .left[data-v-4070467a] {
      min-width: 15%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-left: 15px;

      .city {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        span {
          font-size: 13px;
          max-width: 58px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #191a1b;
          padding-right: 5px;
        }
        img {
          width: 6px;
          height: 3px;
        }
      }
    }

    .title[data-v-4070467a] {
      text-align: center;
      font-size: 17px;
      color: #191a1b;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;

      header .title div[data-v-4070467a] {
        color: #191a1b;
      }
    }

    .right[data-v-4070467a] {
      width: 15%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-right: 15px;
    }
  }

  header[data-v-4070467a]:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  ul {
    position: fixed;
    top: 44px;
    display: flex;

    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      &.active {
        span {
          width: 40%;
          border-bottom: 2px solid red;
          display: block;
          color: #fe5100;
        }
      }
    }
  }
}
</style>