<template>
  <div>
    <section class="content-header">
    <h1>
      书单详情
    </h1>
    <ol class="breadcrumb">
      <li>
        <a href="#">
          <i class="fa fa-dashboard"></i>首页
        </a>
      </li>
      <li>
        <router-link to="/admin/orders">书单列表</router-link>
      </li>
      <li class="active">
        <router-link to="/admin/order">书单详情</router-link>
      </li>
    </ol>
  </section>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header"></div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import { getOrder, updateOrder, deleteOrder } from 'service/order-service';
export default {
    name: 'order-admin',
    data() {
        return {
            label: '',
            order: {
                id: 1,
                userId: 1,
                userName: '',
                itemVOS: [
                    {
                        orderId: 1,
                        bookId: 1,
                        bookName: '',
                        isReturned: false
                    }
                ],
                allReturned: false
            }
        }
    },
    created() {
        if(this.$route.query.id){
            this.label='书单详情';
            this.search(this.$route.query.id);
        }
    },
    methods: {
        async search(id) {
            let res = await getOrder(id);
            if(res.status == 200){
                this.order = res.data;
            }
        }
    }
}
</script>

<style>

</style>
