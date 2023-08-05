<template>
    <div>当前鼠标位置</div>
    <div>x: {{ mouse.x }}</div>
    <div>y: {{ mouse.y }}</div>
    <div>当前点击次数：{{ count }}</div>
    <button @click="add">点击</button>
  </template>
  ​
  <script>
  import { onMounted, onUnmounted, reactive, ref } from 'vue'
  ​
  export default {
    setup() {
      const count = ref(0)
      const add = () => {
        count.value++
      }
  ​
      const mouse = reactive({
        x: 0,
        y: 0,
      })
  ​
      const move = (e) => {
        mouse.x = e.pageX
        mouse.y = e.pageY
      }
      onMounted(() => {
        document.addEventListener('mousemove', move)
      })
      onUnmounted(() => {
        document.removeEventListener('mousemove', move)
      })
      return {
        count,
        add,
        mouse,
      }
    },
  }
  </script>
  