<template>
  <div>
      <customCurtain></customCurtain>
      <categoryNav></categoryNav>
      <bookList></bookList>
  </div>
</template>
<script>
import customCurtain from './curtain.vue';
import customHeader from './header.vue';
import categoryNav from './category-menu.vue';
import bookList from 'custom/book/book-list';
export default {
    name: '',
    data() {
        return {

        }
    },
    components: {
        customHeader,
        customCurtain,
        bookList,
        categoryNav
    }
}
</script>
<style>

</style>


