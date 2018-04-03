<template>
  <div>
      <section class="content-header">
          <h1>用户列表</h1>
          <ol class="breadcrumb">
              <li>
                  <a href="/#/admin"><i class="fa fa-dashboard"></i>主页
                  </a>
              </li>
              <li>
                  <a href="#">用户管理</a>
              </li>
              <li class="active">
                  用户列表
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
                                                <th width="20%">姓名</th>
                                                <th width="20%">邮箱</th>
                                                <th width="20%">手机</th>
                                                <th width="20%">注册时间</th>
                                                <th width="20%">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" v-for="user in users" :key="user.id">
                                                <td>{{user.name}}</td>
                                                <td>{{user.email}}</td>
                                                <td>{{user.mobile}}</td>
                                                <td>{{user.createTime | formatDate}}</td>
                                                <td><router-link class="btn btn-info btn-sm" :to="{path:'/admin/user',query:{id: user.id}}">详情</router-link></td>
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
import { getUsers } from 'service/user-service';
import { formatDate } from 'util/date-util.js'
export default {
    name:'user-list',
    data() {
        return {
            page: 1,
            rows: 10,
            keyword: '',
            users: [
                {
                    'id':'',
                    'name':'',
                    'email':'',
                    'mobile':'',
                    'createTime':0
                }
            ],
            dataTable: {
                draw: 1,
                recordsTotal: 1,
                recordsFiltered: 1,
                data: [],
                error: ''
            },
        }
    },
    created() {
        this.search();
        $(document).ready(function() {
            $('#userTable').DataTable({
                paging: true,
                bPaginate: true,
                iDisplayLength: 10,
                searching: false,
                bLengthChange: false,
                bAutoWidth: true,
                bSort: false,
                info: false,
                columns: [
                    { "data": "name" },
                    { "data": "email" },
                    { "data": "mobile" },
                    { "data": "createTime" }
                ]
            });
        });
    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        }
    },
    methods: {
        async search() {
            let res = await getUsers(this.page,this.rows,this.keyword);
            if(res.status == 200){
                this.users=res.data.list;
            }
        }
    },

}
</script>

<style>

</style>

