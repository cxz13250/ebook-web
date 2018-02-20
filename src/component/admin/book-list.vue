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
                                  <div class="col-sm-6"></div>
                                  <div class="col-sm-6">
                                      <div id="example1_filter" class="dataTables_filter">
                                          <label>
                                              Search:<input type="search" class="form-control input-sm" aria-controls="example1" @click="search" v-model="keyword">
                                          </label>
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-sm-12">
                                    <table class="table table-bordered table-striped dataTable" id="example1">
                                        <thead>
                                            <tr role="row">
                                                <th>书名</th>
                                                <th>编号</th>
                                                <th>作者</th>
                                                <th>出版时间</th>
                                                <th>剩余数量</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" v-for="book in books" :key="book.id">
                                                <td>{{book.name}}</td>
                                                <td>{{book.number}}</td>
                                                <td>{{book.author}}</td>
                                                <td>{{book.time}}</td>
                                                <td>{{book.recent}}</td>
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
export default {
    name: 'book-list-admin',
    data() {
        return {
            keyword: '',
            books: [
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10
                },
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10
                },
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10
                },
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10
                },
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10
                },

            ]
        }
    },
    created() {

    },
    methods: {
        search() {}
    }
}
</script>


<style>

</style>

