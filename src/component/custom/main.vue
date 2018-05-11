<template>
  <div>
    <div class="wrapper" style="height: auto; min-height: 100%;background-color: #f3f5f7;">
      <customHeader></customHeader>
      <router-view></router-view>
      <efooter></efooter>
    </div>
  </div>
</template>

<script>
import customHeader from './header.vue';
import efooter from './footer.vue';
export default {
  name: 'custom-main',
  data() {
      return {
      }
  },
  components: {
    customHeader,
    efooter
  }
}
</script>

<style>

</style>
