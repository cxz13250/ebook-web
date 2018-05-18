<template>
  <div>
      <section class="content-header">
          <h1>书籍列表</h1>
          <ol class="breadcrumb">
              <li>
                  <a href="/#/admin"><i class="fa fa-dashboard"></i>主页
                  </a>
              </li>
              <li>
                  <a href="#">书籍管理</a>
              </li>
              <li class="active">
                  书籍列表
              </li>
          </ol>
      </section>
      <section class="content">
          <div class="row">
              <div class="col-md-12">
                  <div class="box">
                      <!-- <div class="box-header">
                          <h3 class=""></h3>
                      </div> -->
                      <div class="box-body">
                          <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                              <div class="row">
                                  <div class="col-sm-6">
                                      <router-link class="btn btn-primary" to="/admin/book">添加书籍</router-link>
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
                                    <table class="table table-bordered table-striped dataTable" id="bookTable">
                                        <thead>
                                            <tr role="row">
                                                <th width="20%" style="overflow: hidden;text-overflow: ellipsis;">书名</th>
                                                <th>作者</th>
                                                <th>出版社</th>
                                                <th>出版时间</th>
                                                <th>剩余数量</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" v-for="book in books" :key="book.id">
                                                <td>{{book.name}}</td>
                                                <td>{{book.author}}</td>
                                                <td>{{book.publisher}}</td>
                                                <td>{{book.publishTime}}</td>
                                                <td>{{book.total-book.borrowed}}</td>
                                                <td>
                                                    <router-link class="btn btn-info btn-sm" :to="{path:'/admin/book',query:{id:book.id}}">详情</router-link>
                                                    <a type="button" class="btn btn-warning btn-sm" click="delete(book.id)">删除</a>
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
import { getBooks, deleteBook } from 'service/book-service';
export default {
    name: 'book-list-admin',
    data() {
        return {
            keyword: '',
            page: 1,
            rows: 20,
            books: [
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10
                }
            ]
        }
    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        }
    },
    created() {
        this.search();
    },
    methods: {
        async search() {
            let res = await getBooks(this.page,this.rows,this.keyword);
            if(res.status == 200){
                this.books = res.data.list; 
            }
        },
        async delete(id) {
            let res = await deleteBook(id);
            if(res.status == 200){
                this.search();
            }
        }
    }
}
</script>


<style>

</style>

