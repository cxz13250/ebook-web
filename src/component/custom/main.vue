<template>
  <div>
    <div class="wrapper" style="height: auto; min-height: 100%;background-color: #f3f5f7;">
      <customHeader></customHeader>
      <router-view></router-view>
    </div>
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
    customHeader,
  }
}
</script>

<style>

</style>
