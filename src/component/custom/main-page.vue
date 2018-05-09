<template>
  <div>
      <customCurtain></customCurtain>
      <bookList></bookList>
  </div>
</template>
<script>
import customCurtain from './curtain.vue';
import customHeader from './header.vue';
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
        bookList
    }
}
</script>
<style>

</style>


