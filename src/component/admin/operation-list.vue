<template>
  <div>
      <section class="content-header">
          <h1>日志列表</h1>
          <ol class="breadcrumb">
              <li>
                  <a href="/#/admin"><i class="fa fa-dashboard"></i>主页
                  </a>
              </li>
              <li>
                  <a href="#">系统日志</a>
              </li>
              <li class="active">
                  日志列表
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
                                    <table class="table table-bordered table-striped dataTable" id="operationTable" cellspacing="0">
                                        <thead>
                                            <tr role="row">
                                                <th width="25%">操作者</th>
                                                <th width="25%">IP地址</th>
                                                <th width="25%">操作</th>
                                                <th width="25%">时间</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" v-for="operation in operations" :key="operation.createTime">
                                                <td>{{operation.name}}</td>
                                                <td>{{operation.ip}}</td>
                                                <td>{{operation.operation}}</td>
                                                <td>{{operation.createTime | formatDate}}</td>
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
import { getOperations } from 'service/user-service';
import { formatDate } from 'util/date-util.js'
export default {
    name: 'operation-list',
    data() {
        return {
            page: 1,
            rows: 15,
            keyword: '',
            dataTable: {
                draw: 1,
                recordsTotal: 1,
                recordsFiltered: 1,
                data: [],
                error: ''
            },
            operations: [
                {
                    id: 1,
                    name: '熊大',
                    ip: '127.0.0.1',
                    operation: '登录',
                    createTime: '2018-02-22 22:10:55',
                }
            ]
        }
    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        }
    },
    mouted() {

    },
    created() {
        this.search();
        $(document).ready(function() {
            $('#operationTable').DataTable({
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
                    { "data": "ip" },
                    { "data": "operation" },
                    { "data": "createTime" }
                ]
            });
        });
        // $('#operationTable').dataTable().fnDestroy();
        // var table = $('#operationTable').DataTable({
        //     bServerSide : true, 
        //     paging: true,
        //     pageLength: 10,   
        //     lengthChange: false,
        //     stripeClasses: ["odd", "even"],
        //     processing: true,
        //     autoWidth: false,
        //     pagingType: "simple_numbers",
        //     searching: false,  
        //     orderMulti: false,  
        //     renderer: "bootstrap",
        //     "ajax": function (data, callback, settings) {
        //         var param = {};
        //         param.rows = data.length;//页面显示记录条数，在页面显示每页显示多少项的时候
        //         param.start = data.start;
        //         param.page = (data.start / data.length)+1;
        //         $.ajax({
        //             url: '/api/operations',
        //             type: 'GET',
        //             data: param,
        //             dataSrc: 'data',
        //             dataType: "json",
        //             success: function(res){
        //                 var json = {};
        //                 json.draw = res.data.total;
        //                 json.recordsTotal = res.data.total;
        //                 json.recordsFiltered = res.data.total;
        //                 json.data = res.data.list;
        //                 console.log(json);
        //                 callback(json);
        //             }
        //         })
        //     },
        //     columns: [
        //         { "data": "name" },
        //         { "data": "ip" },
        //         { "data": "operation" },
        //         { "data": "createTime" }
        //     ]
        // });
    },
    methods: {
        async search() {
            let res = await getOperations(this.page,this.rows);
            if(res.status == 200){
                this.operations=res.data.list;
            }
        }
    }
}
</script>

<style>

</style>
