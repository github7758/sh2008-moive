<template>
    <div>
        {{count}}
        {{city}}
        {{getCount}}
        <br>
        <button @click='handle2()'>点我加13</button>
        <button @click='handle5()'>点我加13</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
    
    mounted(){
        // 1.state直接获取对应数据值
        console.log(this.$store.state.count);
    },
    computed:{
        // 2.映射过来的，数据使用和用自己的一样
        ...mapState(['count','city']),
        ...mapGetters(['getCount'])
    },
    methods:{
        ...mapMutations(['add']),
        ...mapActions(['addAsync']),
        handle1:function(){
            this.$store.commit('add',13)
        },
        handle2:function(){
            this.add(14)
        },
        handle3:function(){
            this.$store.dispatch('addAsync',31)
        },
        handle4:function(){
            this.addAsync(31)
        },
        handle5:function(){
            console.log(this.$store.getters.getCount);
        }
    }  
}
</script>