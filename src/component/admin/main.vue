<template>
  <div>
      <div class="wrapper" style="height: auto; min-height: 100%;">
        <adminHeader></adminHeader>
        <div class="content-wrapper" style="min-height: 960px;">
          <router-view></router-view>
        </div>
        <efooter></efooter>
      </div>
  </div>
</template>

<script>
import adminHeader from './header.vue';
import efooter from './footer.vue';
export default {
  name: 'admin-main',
  data() {
      return {

      }
  },
  created() {
    
  },
  components: {
    adminHeader,
    efooter
  },
}
</script>

<style>

</style>


