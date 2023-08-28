<template>
    <div class="top-box">
      <div class="title-icon" @click="backToHome">TAC</div>
      <div class="navigator" v-for="item in navigatorList" :key=item.name @click="goPage(item.path)">
        <div class="icon home" :class="item.icon"></div>
        <span>{{item.name}}</span>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { navigatorList } from "@/constant/main";
const router = useRouter()
const backToHome = () => {
  router.push({
    path: '/'
  })
}

const goPage = (path) => {
  router.push({
    path: '/' + path
  })
}
</script>

<style lang="scss" scoped>
.top-box{
  padding: 0 40px;
  height: 70px;
  width: 100%;
  background-color: #fc912a;
  display: flex;
  align-items: center;
  .title-icon{
    margin-right: 30px;
    line-height: 40px;
    font-size: 40px;
    font-weight: 500;
    color: #000000;
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
      background: rgba(245, 65, 68, 0.2);
    }
  }
}
</style>
