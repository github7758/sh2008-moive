import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0,
        city:'北京',
        _token:'',
        cityId:'110100',
    },
    mutations:{
        add:function(state,step){
            state.count += step
        },
        setCity:function(state,cityName){
            state.city = cityName
            localStorage.setItem('cityName',cityName)
        },
        setCityId:function(state,cityId){
            state.cityId = cityId
            localStorage.setItem('cityId',cityId)
        },
        updateToken:function(state,_token){
            state._token = _token
            localStorage.setItem('_token',_token)
        },
    },
    actions:{
        addAsync:function(context,step){
            setTimeout(()=>{
                context.commit('add',step)
            },3000)
        }
    },
    getters:{
        getCount:function(state){
            return '当前总数是' + state.count;
        }
    },
})


