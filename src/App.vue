<template>
  <div id="app">
    <FooterNav v-if='is_show'></FooterNav>
    <router-view/>
  </div>
</template>


<script>
import FooterNav from '@/components/FooterNav'
export default {
  data() {
    return {
      is_show:true
    }
  },
  components:{
    FooterNav
  },
  created(){
    this.eventBus.$on('footernav',(bool)=>{
      this.is_show = bool
    })
  }, 
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

