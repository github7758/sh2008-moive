<template>
    <div>
        <FilmList :list="list" :key="'film' + list.length" :type="type"></FilmList>
    </div>
</template>
 
<script>
import {comingSoonListData} from '@/api/api'
import FilmList from '@/components/FilmList'

export default {
    data() {
        return {
            pageNum:1,
            list:[],
            type:2,
            cityId:this.$store.state.cityId,
        }
    },
    components:{
        FilmList
    },
    async mounted(){
        let ret = await comingSoonListData(this.cityId,this.pageNum)
        this.list = ret.data.data.films
        console.log(ret.data);
    }
}
</script>