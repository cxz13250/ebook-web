<template>
  <div>
      <customHeader></customHeader>
      顾客主页，尚在开发中~~~
      <router-view></router-view>
  </div>
</template>

<script>
import customHeader from './header.vue';
export default {
  name: 'custom-main',
  data() {
      return {
          
      }
  },
  components: {
    customHeader
  }
}
</script>

<style>

</style>
