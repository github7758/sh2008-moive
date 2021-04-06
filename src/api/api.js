import http from '@/api/http'

import{
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUri,
    cityListUri,
    loginUri,
    centerinUri,
    cinemaListUri,
    cinemaDetailUri,
} from '@/config/url'

export const nowPlayingListData = (cityId,pageName)=>{
    http.defaults.headers.info = ''
    http.defaults.headers.authorization = "";
    return http.get(nowPlayingListUri + pageName + '&cityId=' + cityId)
}

export const comingSoonListData = (cityId,pageName)=>{
    http.defaults.headers.info = 'list'
    http.defaults.headers.authorization = "";
    return http.get(comingSoonListUri + pageName + '&cityId=' + cityId)
}

export const cinemaListData = (cityId)=>{
    http.defaults.headers.info = 'cinema'
    http.defaults.headers.authorization = "";
    return http.get(cinemaListUri  + cityId)
}

export const cinemaDetailData = (cinemaId)=>{
    http.defaults.headers.info = 'cinemaDetail'
    http.defaults.headers.authorization = "";
    return http.get(cinemaDetailUri + cinemaId)
}

export const moiveDetail = (filmId)=>{
    http.defaults.headers.info = 'info'
    http.defaults.headers.authorization = "";
    return http.get(moiveDetailUri + filmId)
}

export const cityListData = async ()=>{
    http.defaults.headers.info = 'city'
    http.defaults.headers.authorization = "";
    let ret = await http.get(cityListUri)
    let cities = ret.data.data.cities
    let cityIndex = []
    let dataList = []
    let indexList = []

    for(let i = 65; i <= 90; i++){
        cityIndex.push(String.fromCharCode(i))
    }

    cityIndex.forEach((index)=>{
        let tmpArr = cities.filter((item)=>index.toLowerCase() == item.pinyin.substr(0,1))
        if(tmpArr.length > 0){
            indexList.push(index);
            dataList.push({
                index,
                data:tmpArr
            })
        }
    })
    return Promise.resolve([dataList,indexList])
}

export const userLogin = (data)=>{
    return http.post(loginUri,data)
}

export const userInfo = (_token)=>{
    http.defaults.headers.authorization = _token
    // http.interceptors.response.use(function(response){
    //     response.data.user_info.gender = response.data.user_info.gender ? '女' : '男'
    // })
    return http.get(centerinUri)
}