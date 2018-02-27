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
        <router-link to="/admin/books">书籍列表</router-link>
      </li>
      <li class="active">
        <router-link to="/admin/book">{{label}}</router-link>
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
              <div class="col-md-3" style="text-align:center;padding-bottom: 15px;padding-top: 15px;">
                  <img v-bind:src="book.imgUrl" id="image" class="head-image"><br/>
                  <button id="updateImage" type="button"  class="btn btn-link" @click="chooseFile">更改头像</button>
                  <input id="imageFile" type="file" style="display:none" v-on:change="uploadFile"/>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookName">书籍名称</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="book.name" name="bookName" id="bookName">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookCategory">书籍名称</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="book.categoryName" name="bookCategory" id="bookCategory">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookAuthor">书籍作者</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="book.author" name="bookAuthor" id="bookAuthor">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookTranslator">翻译作者</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="book.translator" name="bookTranslator" id="bookTranslator" placeholder="选填">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookPublisher">出版社</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" v-model="book.publisher" name="bookPublisher" id="bookPublisher">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookTotal">总数量</label>
                        <div class="col-sm-9">
                            <input type="number" class="form-control" v-model="book.total" name="bookTotal" id="bookTotal">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookDescription">书籍描述</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" v-model="book.description" name="bookDescription" id="bookDescription"/>
                        </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <button class="btn btn-primary" @click="save">保存</button>
                        <button class="btn btn-danger" click="delete" v-if="edit">删除</button>
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
import { getBook , createBook, updateBook, deleteBook } from 'service/book-service';
import { uploadFile } from 'service/common-service';
import { show_stack_topleft } from 'js/notification.js'
export default {
    name: 'admin-book',
    data() {
        return {
            edit: false,
            label: '',
            book: {
                id: null,
                name: '',
                category: 1,
                categoryName: '',
                author: '',
                translator: '',
                publisher: '',
                description: '',
                publishTime: 0,
                total: 0,
                borrowed: 0,
                imgUrl: '/assets/img/two_cat.jpg'
            }
        }
    },
    created() {
        if(this.$route.query.id){
            this.label = '书籍详情';
            this.edit = true;
            this.search(this.$route.query.id);
        }else {
            this.label = '添加书籍';
        }
    },
    methods: {
        async search(id) {
            let res = await getBook(id);
            if(res.status == 200){
                this.book = res.data;
            }
        },
        async save() {
            let res
            if(this.book.id){
                res = await createBook(this.book);
            }else{
                res = await updateBook(this.book);    
            }
            if(res.status == 200){
                    this.$router.push('/admin/books');
            }
        },
        async delete() {
            let res = await deleteBook(this.book.id);
            if(res.status == 200){
                this.$router.push('/admin/books');
            }
        },
        goBack() {
            // this.$router.go(-1);
            window.history.go(-1);
        },
        chooseFile() {
            $('#imageFile').click();
        },
        filterType(filename) {
            if(filename.endsWith('.jpg')||filename.endsWith('.png')||filename.endsWith('.jpeg')){
                return true;
            }else {
                return false;
            }
        },
        async uploadFile(){
            var file = $('#imageFile')[0].files[0];
            if(this.filterType(file.name)){
                let res = await uploadFile(file,'img/'+file.name);
                if(res.status == 200){
                    this.book.imgUrl = res.data;
                    console.log(this.book.imgUrl);
                    show_stack_topleft('success','上传成功');
                }
            }
        }
    }
  
}
</script>

<style>
.head-image {
    flex-shrink: 0;
    margin: 10px;
    width: 100px;
    height: 100px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 0 5px #aaa;
    overflow: hidden;
    opacity: .5;
}
</style>


