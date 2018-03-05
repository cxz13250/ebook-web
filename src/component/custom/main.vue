<template>
  <div>
    <div class="wrapper" style="height: auto; min-height: 100%;">
      <customHeader></customHeader>
      顾客主页，尚在开发中~~~
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import customHeader from './header.vue';
import bookItem from 'custom/book/book-item';
export default {
  name: 'custom-main',
  data() {
      return {
          books:[]
      }
  },
  components: {
    customHeader
  }
}
</script>

<style>

</style>
