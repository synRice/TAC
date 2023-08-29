<template>
    <div class="top-box">
        <div class="title-icon" @click="backToHome">TAC</div>
        <div class="navigator" :class="item.path===activePage?'active':''" v-for="item in navigatorList" :key=item.name @click="goPage(item.path)">
            <div class="icon home" :class="item.icon"></div>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { navigatorList } from "@/constant/main";
import { ref } from 'vue'

const router = useRouter()

const activePage = ref('home')

const backToHome = () => {
    router.push({
        path: '/'
    })
}

const goPage = (path) => {
    activePage.value = path
    router.push({
        path: '/' + path
    })
}
</script>

<style lang="scss" scoped>
.top-box{
    position: relative;
    z-index: 1000;
    padding: 0 40px;
    height: 70px;
    width: 100%;
    background-color: #107e64;
    display: flex;
    align-items: center;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    .title-icon{
        margin-right: 30px;
        line-height: 40px;
        font-size: 40px;
        font-weight: 500;
        cursor: pointer;
    }
    .navigator{
        display: flex;
        align-items: center;
        padding: 0 10px;
        height: 100%;
        font-size: 20px;
        cursor: pointer;
        transition: all .5s ease-out;
        .icon{
            width: 20px;
            height: 20px;
            margin-right: 4px;
        }
        .home{
            background: no-repeat url("@/assets/img/home.svg");
        }
        &:hover{
            opacity: 0.7;
            background: #0d6550;
        }
        &.active{
            color: #f6903d;
            border-bottom: 4px solid #f6903d;
            .home{
                background: no-repeat url("@/assets/img/home_active.svg");
            }
        }
    }
}
</style>
