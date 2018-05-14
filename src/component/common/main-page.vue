<template>
  <div>
      <customHeader></customHeader>
      <customCurtain></customCurtain>
      <categoryNav></categoryNav>
      <bookList :num="10"></bookList>
      <efooter></efooter>
  </div>
</template>
<script>
import customCurtain from 'custom/curtain.vue';
import customHeader from 'custom/header.vue';
import categoryNav from 'custom/category-menu.vue';
import bookList from 'custom/book/book-list';
import efooter from 'custom/footer.vue';
export default {
    name: 'common-main',
    data() {
        return {

        }
    },
    components: {
        customHeader,
        customCurtain,
        bookList,
        categoryNav,
        efooter
    }
}
</script>
<style>

</style>


