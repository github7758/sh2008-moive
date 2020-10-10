<template>
  <nav>
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

<style lang="scss">
nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  ul {
    display: flex;
    text-align: center;
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