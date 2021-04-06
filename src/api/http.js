
import axios from "axios"

axios.defaults.baseURL = "https://m.maizuo.com/"

axios.interceptors.request.use(function (config) {
    let host = 'mall.film-ticket.film.list'
    let info = config.headers.info

    if (info == 'cinema') {
        host = 'mall.film-ticket.cinema.list'
    } else if (info == 'info') {
        host = 'mall.film-ticket.film.info'
    } else if (info == 'city') {
        host = "mall.film-ticket.city.list";
    } else if (info == 'list') {
        host = "mall.film-ticket.film.list";
    }else if(info == 'cinemaDetail'){
        host = "mall.film-ticket.cinema.info";
    }

    if (config.headers.authorization) {
        config.headers = {
            authorization: config.headers.authorization
        }
    } else {
        config.headers = {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"160074726930910879629313","bc":"310100"}',
            'X-Host': host
        }
    }
    return config
}, function (err) {

})

export default axios