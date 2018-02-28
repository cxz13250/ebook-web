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
              <div class="col-md-3" style="text-align:center;padding-bottom: 15px;">
                  <img v-bind:src="book.imgUrl" id="image" class="head-image">
                  <br/>
                  <button id="updateImage" type="button"  class="btn btn-link" @click="chooseFile">更改头像</button>
                  <input id="imageFile" type="file" style="display:none" v-on:change="uploadFile"/>
              </div>
              <div class="col-md-8">
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookName">书籍名称</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="book.name" name="bookName" id="bookName" @blur="checkName">
                        </div>
                        <label class="col-sm-3 control-label warning" for="bookName" v-if="nameInvalid"><i class="fa fa-close"></i>名称不可为空</label>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookCategory">书籍类型</label>
                        <div class="col-sm-6">
                            <select class="form-control" v-model="book.category" name="bookCategory" id="bookCategory" @blur="checkCategory">
                                <option value="-1">请选择类型</option>
                                <option v-for="cate in categories" v-bind:value="cate.id" :key="cate.id">{{cate.name}}</option>
                            </select>
                        </div>
                        <label class="col-sm-3 control-label warning" for="bookCategory" v-if="cateInvalid"><i class="fa fa-close"></i>类型不可为空</label>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookAuthor">书籍作者</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="book.author" name="bookAuthor" id="bookAuthor" @blur="checkAuthor">
                        </div>
                        <label class="col-sm-3 control-label warning" for="bookAuthor" v-if="authorInvalid"><i class="fa fa-close"></i>作者不可为空</label>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookTranslator">翻译作者</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="book.translator" name="bookTranslator" id="bookTranslator" placeholder="选填">
                        </div>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookPublisher">出版社</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="book.publisher" name="bookPublisher" id="bookPublisher" @blur="checkPublisher">
                        </div>
                        <label class="col-sm-3 control-label warning" for="bookPublisher" v-if="publisherInvalid"><i class="fa fa-close"></i>出版社不可为空</label>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label">出版时间</label>
                        <div class="col-sm-6">
                            <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
                        </div>
                        <label class="col-sm-3 control-label warning" v-if="timeInvalid"><i class="fa fa-close"></i>时间不可为空</label>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookTotal">总数量</label>
                        <div class="col-sm-6">
                            <input type="number" class="form-control" v-model="book.total" name="bookTotal" id="bookTotal" @blur="checkTotal">
                        </div>
                        <label class="col-sm-3 control-label warning" v-if="totalInvalid"><i class="fa fa-close"></i>数量必须为正</label>
                  </div>
                  <div class="form-group">
                        <label class="col-sm-3 control-label" for="bookDescription">书籍描述</label>
                        <div class="col-sm-6">
                            <textarea class="form-control" v-model="book.description" name="bookDescription" id="bookDescription" rows="6" @blur="checkDescrip"/>
                        </div>
                        <label class="col-sm-3 control-label warning" v-if="descripInvalid"><i class="fa fa-close"></i>描述不可为空</label>
                  </div>
                  <div class="form-group">
                    <div class="col-md-3"></div>
                    <div class="col-md-6">
                        <input type="button" class="btn btn-primary" @click="save" value="保存"/>
                        <input type="button" class="btn btn-danger" click="delete" v-if="edit" value="删除"/>
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
import { getBook , createBook, updateBook, deleteBook } from 'service/book-service';
import { getCategories } from 'service/category-service';
import { uploadFile } from 'service/common-service';
import { show_stack_topleft } from 'js/notification.js';
import myDatepicker from 'vue-datepicker'
export default {
    name: 'admin-book',
    data() {
        return {
            //form validate
            nameInvalid: false,
            cateInvalid: false,
            authorInvalid: false,
            publisherInvalid: false,
            timeInvalid: false,
            descripInvalid: false,
            totalInvalid: false,
            
            // datapicker
            startTime: {
            time: ''
            },
            endtime: {
                time: ''
            },
            option: {
                type: 'day',
                week: ['一', '二', '三', '四', '五', '六', '日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD',
                placeholder: '请选择时间',
                inputStyle: {
                'height': '34px',
                'display': 'inline-block',
                'padding': '6px 12px',
                'line-height': '22px',
                'font-size': '14px',
                'border': '1px solid #fff',
                'box-shadow': 'none',
                'border-radius': '2px',
                'border-color': '#d2d6de',
                'color': '#5F5F5F',
                'width': '100%'
                },
                color: {
                header: '#ccc',
                headerText: '#f00'
                },
                buttons: {
                ok: '确认',
                cancel: '取消'
                },
                overlayOpacity: 0.5, // 0.5 as default
                dismissible: true // as true as default
            },
            timeoption: {
                type: 'min',
                week: ['一', '二', '三', '四', '五', '六', '日'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format: 'YYYY-MM-DD HH:mm'
            },
            multiOption: {
                type: 'multi-day',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                format:"YYYY-MM-DD HH:mm"
            },
            limit: [],

            edit: false,
            label: '',
            book: {
                id: undefined,
                name: '',
                category: -1,
                categoryName: '',
                author: '',
                translator: '',
                publisher: '',
                description: '',
                publishTime: '',
                total: 0,
                borrowed: 0,
                imgUrl: '/assets/img/two_cat.jpg'
            },
            categories: []
        }
    },
    created() {
        this.getCategories();
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
            this.checkName();
            this.checkCategory();
            this.checkAuthor();
            this.checkPublisher();
            this.checkTotal();
            this.checkDescrip();
            if(this.nameInvalid() || this.cateInvalid || this.authorInvalid || this.publisherInvalid || this.timeInvalid
             || this.totalInvalid || this.descripInvalid){
                return;
            }
            this.book.publishTime = this.startTime.time;
            let res
            if(!this.book.id){
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
        async getCategories() {
            let res = await getCategories(1,10);
            if(res.status == 200){
                this.categories = res.data.list;
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
        },
        checkName(){
            if(!this.book.name || this.book.name.trim()==''){
                this.nameInvalid = true;
            }else{
                this.nameInvalid = false;
            }
        },
        checkCategory(){
            if(!this.book.category || this.book.category == -1){
                this.cateInvalid = true;
            }else{
                this.cateInvalid = false;
            }
        },
        checkAuthor(){
            if(!this.book.author || this.book.author.trim() == ''){
                this.authorInvalid = true;
            }else{
                this.authorInvalid = false;
            }
        },
        checkPublisher(){
            if(!this.book.publisher || this.book.publisher.trim() == ''){
                this.publisherInvalid = true;
            }else{
                this.publisherInvalid = false;
            }
        },
        checkTotal(){
            if(!this.book.total || this.book.total <= 0){
                this.totalInvalid = true;
            }else{
                this.totalInvalid = false;
            }
        },
        checkTotal(){
            if(!this.book.total || this.book.total <= 0){
                this.totalInvalid = true;
            }else{
                this.totalInvalid = false;
            }
        },
        checkDescrip(){
            if(!this.book.description || this.book.description == ''){
                this.descripInvalid = true;
            }else{
                this.descripInvalid = false;
            }
        }
    },
    components: {
        'date-picker': myDatepicker
    }
  
}
</script>

<style>
.head-image {
    flex-shrink: 0;
    margin: 0px;
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
.cov-vue-date {
    width: 100%;
}
.warning {
    color: red;
    font-size: 8px;
}
</style>


