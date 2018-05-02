<template>
  <div>
    <div class="wrapper" style="height: auto; min-height: 100%;background-color: #f3f5f7;">
      <customHeader></customHeader>
      <customCurtain></customCurtain>
      <bookList></bookList>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import customHeader from './header.vue';
import customCurtain from './curtain.vue';
import bookItem from 'custom/book/book-item';
import bookList from 'custom/book/book-list';
export default {
  name: 'custom-main',
  data() {
      return {
          books:[]
      }
  },
  components: {
    customHeader,
    customCurtain,
    bookList
  }
}
</script>

<style>

</style>
