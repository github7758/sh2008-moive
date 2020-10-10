<template>
    <div class="nav">
        <ul>
            <router-link to="/film" tag="li" active-class="active">
                <i class="iconfont icondianying"></i>
                <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="active">
                <i class="iconfont iconyingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
                <i class="iconfont icongeren"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss">
   .nav {
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    height: 50px;
    text-align: center;
    background: #fff;
    color: #7a7e83;
    width: 100%;

    ul,li{
        list-style: none;
    }

    ul {
        display: flex;
        align-items: center;
        li {
            margin-top: 5px;
            flex: 1;
            height: 43px;
            &.active {
                color: #fe5100;
            }
            p {
                margin-top: 2px;
            }
            i {
                font-size: 20px;
            }
        }
    }
}
</style>

<script>
import('@/assets/iconfont/iconfont.css')
export default {
    
}
</script>