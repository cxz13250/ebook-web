<template>
  <div>
      <section class="content-header">
          <h1>类型列表</h1>
          <ol class="breadcrumb">
              <li>
                  <a href="/#/admin"><i class="fa fa-dashboard"></i>主页
                  </a>
              </li>
              <li>
                  <a href="#">书籍管理</a>
              </li>
              <li class="active">
                  类型列表
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
                                  <div class="col-sm-6">
                                      <router-link class="btn btn-primary" to="/admin/category">添加类型</router-link>
                                  </div>
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
                                                <th width="25%">名称</th>
                                                <th width="25%">菜单</th>
                                                <th width="25%">创建时间</th>
                                                <th width="25%">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" v-for="category in categories" :key="category.id">
                                                <td>{{category.name}}</td>
                                                <td>{{category.menu}}</td>
                                                <td>{{category.createTime | formatDate}}</td>
                                                <td><router-link class="btn btn-info btn-sm" :to="{path:'/admin/category',query:{id:category.id}}">详情</router-link></td>
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
import { getCategories } from 'service/category-service';
export default {
    name:'category-list',
    data() {
        return {
            keyword: '',
            page: 1,
            rows: 10,
            categories: [
                {
                    id: 1,
                    name: '',
                    menu: '',
                    createTime: 1
                }
            ]
        }
    },
    created() {
        this.search();
    },
    methods: {
        async search() {
            let res = await getCategories(this.page,this.rows);
            if(res.status == 200){
                this.categories=res.data.list;
            }
        }
    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        }
    }
}
</script>

<style>

</style>
