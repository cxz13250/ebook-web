<template>
  <div>
    <section class="content-header">
    <h1>
      {{label}}
    </h1>
    <ol class="breadcrumb">
      <li>
        <a href="#">
          <i class="fa fa-dashboard"></i>首页
        </a>
      </li>
      <li>
        <router-link to="/admin/categories">类型列表</router-link>
      </li>
      <li class="active">
        <router-link to="/admin/category">{{label}}</router-link>
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
                          <label class="col-sm-3 control-label" for="categoryName">类别名称</label>
                          <div class="col-sm-9">
                              <input type="text" class="form-control" v-model="category.name" id="categoryName">
                          </div>
                      </div>
                      <div class="form-group">
                          <label class="col-sm-3 control-label" for="categoryMenu">所属菜单</label>
                          <div class="col-sm-9">
                              <select class="form-control" v-model="category.menu" id="categoryMenu">
                                  <option v-for="menu in menus" value="menu.menu" :key="menu.id">{{menu.menu}}</option>
                              </select>
                          </div>
                      </div>
                      <div class="form-group">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <input type="button" class="btn btn-primary" @click="save" value="保存"/>
                            <input type="button" class="btn btn-default" @click="goBack" value="返回"/>
                        </div>
                        <div class="col-md-3"></div>
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
import { getCategory, createCategory, updateCategory, deleteCategory } from 'service/category-service';
import { bookMenus } from '../../../constants/book-menu';
export default {
    name: 'category-detail',
    data() {
        return {
            menus: [],
            label: '',
            category: {
                id: null,
                name: '',
                menu: ''
            }
        }
    },
    mounted() {
        this.menus=bookMenus;
    },
    created() {
        this.menus=bookMenus;
        if(this.$route.query.id){
            this.label = '类型详情';
            this.search(this.$route.query.id);
        }else{
            this.label = '添加类型';
        }
    },
    methods: {
        async search(id) {
            let res = await getCategory(id);
            if(res.status == 200){
                this.category = res.data;
            }
        },
        goBack() {
            window.history.go(-1);
        },
        async save() {
            let res;
            if(this.category,id){
                res = await updateCategory(this.category);
            }else{
                res = await createCategory(this.category);
            }
            if(res.status == 200){
                this.$router.push({path:'/categories'});
            }
        }
    }
}
</script>

<style>

</style>
