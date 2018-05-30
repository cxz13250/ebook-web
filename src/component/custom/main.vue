<template>
  <div>
    <div class="wrapper" style="height: auto; min-height: 100%;background-color: #f3f5f7;">
      <router-view></router-view>
      <efooter></efooter>
    </div>
  </div>
</template>

<script>
import efooter from './footer.vue';
export default {
  name: 'custom-main',
  data() {
      return {
      }
  },
  components: {
    efooter
  }
}
</script>

<style>

</style>
