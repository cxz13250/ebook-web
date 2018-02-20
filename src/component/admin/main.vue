<template>
  <div>
      <div class="wrapper" style="height: auto; min-height: 100%;">
        <adminHeader></adminHeader>
        <div class="content-wrapper" style="min-height: 960px;">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import adminHeader from './header.vue';
export default {
  name: 'admin-main',
  data() {
      return {

      }
  },
  created() {
    
  },
  components: {
    adminHeader
  },
}
</script>

<style>

</style>


