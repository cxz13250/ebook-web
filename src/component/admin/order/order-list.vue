<template>
  <div>
      <section class="content-header">
          <h1>书单列表</h1>
          <ol class="breadcrumb">
              <li>
                  <a href="/#/admin"><i class="fa fa-dashboard"></i>主页
                  </a>
              </li>
              <li>
                  <a href="#">书单管理</a>
              </li>
              <li class="active">
                  书单列表
              </li>
          </ol>
      </section>
      <section class="content">
          <div class="row">
              <div class="col-md-12">
                  <div class="box">
                      <div class="box-body">
                          <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                              <div class="row">
                                  <div class="col-sm-6"></div>
                                  <div class="col-sm-6">
                                      <div id="example1_filter" class="dataTables_filter">
                                          <label>
                                              Search:<input type="search" class="form-control input-sm" aria-controls="example1" @keyup.enter="search" v-model="keyword">
                                          </label>
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-sm-12">
                                    <table class="table table-bordered table-striped dataTable" id="userTable" cellspacing="0">
                                        <thead>
                                            <tr role="row">
                                                <th width="20%">借书人</th>
                                                <th width="20%">书籍名称</th>
                                                <th width="20%">借书时间</th>
                                                <th width="20%">状态</th>
                                                <th width="20%">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" v-for="(order, index) in orders" :key="order.id">
                                                <td>{{order.userName}}</td>
                                                <td>{{order.itemVOS[0].bookName}}</td>
                                                <td>{{order.createTime | formatDate}}</td>
                                                <td>{{order.status | checkStatus}}</td>
                                                <td>
                                                    <!-- <router-link class="btn btn-info btn-sm" :to="{path:'/admin/order',query:{id:order.id}}">详情</router-link> -->
                                                    <a class="btn btn-warning btn-sm" @click="check(index)" href="javascript:void(0)" v-if="order.status==0||order.status==2">批准</a>
                                                    <a class="btn btn-danger btn-sm" @click="deleteOrder(order.id)" href="javascript:void(0)">删除</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
import { formatDate } from 'util/date-util.js';
import { getOrders, checkOrder, deleteOrder } from 'service/order-service';
import { OrderStatus } from 'constants/order-status';
export default {
    name: 'order-list',
    data() {
        return {
            page: 1,
            rows: 10,
            keyword: '',
            orders: [
                {
                    id: 1,
                    userName: '',
                    createTime: 0,
                    allReturned: false
                }
            ]
        }
    },
    created() {
        this.search();
    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        },
        checkReturn(allReturn) {
            if(allReturn) {
                return '是';
            }else {
                return '否';
            }
        },
        checkStatus(status) {
            if(status==OrderStatus.CHECK_BORROW) {
                return '借书审核中';
            }else if(status==OrderStatus.CHECK_RETURN) {
                return '归还审核中';
            }else if(status==OrderStatus.OVERDUE) {
                return '逾期未还';
            }else if(status==OrderStatus.BORROWED) {
                return '借阅中';
            }else if(status==OrderStatus.RETURNED) {
                return '已归还';
            }
        },
    },
    methods: {
        async search() {
            let res = await getOrders(this.page,this.rows);
            if(res.status == 200){
                this.orders = res.data.list;
            }
        },
        async check(index){
            let res = await checkOrder(this.orders[index].id);
            if(res.status == 200){
                this.search();
            }
        },
        async deleteOrder(id){
            let res = await deleteOrder(id);
            if(res.status==200){
                this.search();
            }
        } 
    }
  
}
</script>

<style>

</style>

