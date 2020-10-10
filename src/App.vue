<template>
  <div id="app">
    <FooterNav></FooterNav>
    <router-view/>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
export default {
  components:{
    FooterNav
  }
}
</script>


<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
        touch-action: none;
    }
</style>

