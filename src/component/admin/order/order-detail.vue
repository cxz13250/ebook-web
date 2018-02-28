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
          <form class="form-horizontal">
            <div class="box-body">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                    <div class="form-group">
                          <label class="col-sm-3 control-label" for="userName">借书人</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" v-model="order.userName" name="userName" id="userName" disabled>
                          </div>
                    </div>
                    <div class="form-group">
                          <label class="col-sm-3 control-label" for="createTime">借书时间</label>
                          <div class="col-sm-6">
                              <input type="text" class="form-control" v-model="order.createTime" name="createTime" id="createTime" disabled>
                          </div>
                    </div>
                    <table class="table table-bordered table-striped dataTable">
                      <thead>
                        <tr>
                          <th width="30%">书名</th>
                          <th width="30%">是否归还</th>
                          <th width="40%">操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in order.itemVOS" :key="item.id">
                          <td>{{item.bookName}}</td>
                          <td>{{item.isReturned | checkReturn}}</td>
                          <td>
                            <input type="button" class="btn btn-danger btn-sm" @click="removeItem(index)" value="删除" style="height:30px"/>
                            <input type="button" class="btn btn-primary btn-sm" @click="returnItem(item)" value="归还" style="height:30px"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>  
                    <div class="form-group">
                      <div class="col-md-3"></div>
                      <div class="col-md-6">
                          <input type="button" class="btn btn-primary" @click="save" value="保存"/>
                          <input type="button" class="btn btn-default" @click="goBack" value="返回"/>
                      </div>
                      <div class="col-md-1"></div>
                  </div>      
                </div>
              <div class="col-md-3"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import { getOrder, updateOrder, deleteOrder } from 'service/order-service';
import { formatDate } from 'util/date-util.js';
import userDetailVue from '../user/user-detail.vue';
export default {
    name: 'order-admin',
    data() {
        return {
            label: '',
            order: {
                id: 1,
                userId: 1,
                userName: '哈哈哈',
                createTime: 0,
                itemVOS: [
                    {
                        id: 1,
                        orderId: 1,
                        bookId: 1,
                        bookName: '嘿嘿',
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
    filters:{
      checkReturn(allReturn) {
            if(allReturn) {
                return '是';
            }else {
                return '否';
            }
        }
    },
    methods: {
        async search(id) {
            let res = await getOrder(id);
            if(res.status == 200){
                this.order = res.data;
            }
        },
        async save() {
            let res = await updateOrder(this.order);
            if(res.status == 200){
              this.$router.push({path:'orders'});
            }
        },
        removeItem(index){
          console.log(index);
          this.order.itemVOS.splice(index,1);
        },
        returnItem(item){
          item.isReturned=true;
        },
        goBack() {
            window.history.go(-1);
        },
        cancel() {
          $('#purchase').modal('hide');
        }
    }
}
</script>

<style>

</style>
