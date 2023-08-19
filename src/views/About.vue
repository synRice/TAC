<template>
  <h1 class="title">{{ msg }}</h1>
  <button @click="plusCount">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref("hello")
const count = ref(0)

const plusCount = () => {
  count.value++;
}
</script>

<style lang="sass" scoped>
.title{
  font-size: 18px;
}
</style>