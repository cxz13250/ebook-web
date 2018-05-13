<template>
  <div class="book-wrapper">
      <div class="book-container">
        <div class="book-left">
            <div class="pic">
                <div class="pic-info">
                    <img class="book-img" v-bind:src="book.imgUrl">
                </div>
            </div>
        </div>
        <div class="book-right">
            <div class="book-info">
                <h1 v-bind:title="book.name">{{book.name}}</h1>
                <div class="line"></div>  
                <div class="message">
                    <span class="t1">作者:{{book.author}} 著</span>
                    <span class="t1" v-if="book.translator">{{book.translator}} 译</span>
                    <span class="t1">出版社:{{book.publisher}}</span>
                    <span class="t1">出版时间:{{book.publishTime}}</span>
                    <span class="t1">标准书号ISBN:{{book.number}}</span>
                </div>
                <div class="line"></div>
                <h2>{{book.description}}</h2>
                <div class="line"></div>
                <a class="btn btn-primary" @click="addToCart" style="margin-top:20px;">立刻借阅</a>
                <span class="t1">剩余库存:{{book.total-book.borrowed}}/{{book.total}}</span>
            </div>
        </div>
      </div>
      <div class="line clear-fix"></div>  
      <bookList :num="5"></bookList>
  </div>
</template>

<script>
import bookList from './book-list.vue'
import { formatDate } from 'util/date-util.js';
import { getBook } from 'service/book-service';
export default {
    name: 'book-info',
    data() {
        return {
            id: 0,
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
            }
        }
    },
    created() {
        if(this.$route.query.id){
            this.id=this.$route.query.id;
            this.search();
        }
    },
    filters: {
        formatDate(time) {
            return formatDate(time);
        }
    },
    methods: {
        addToCart() {

        },
        async search() {
            let res= await getBook(this.id);
            if(res.status ==200){
                this.book =res.data;
            }
        }
    },
    components:{
        bookList,
    },
}
</script>

<style>
.book-wrapper{
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    padding: 30px 8%;
    display: table;
    min-height: 900px;
}
.book-left{
    float: left;
}
.book-right{
    margin-left: 20px;
    float: left;
}
.pic{
    float: left;
    width: 320px;
    padding: 0 20px 30px 0;
}
.pic-info{
    width: 320px;
    height: 320px;
    margin: 0 auto;
    position: relative;
    z-index: 7777;
}
.book-img{
    display: block;
    width: 320px;
    height: 320px;
    overflow: hidden;
}
.book-info{
    float: left;
    width: 860px;
    font: 12px "Verdana","Simsun";
    color: #646464;
    padding-left: 20px;
}
.book-info h1{
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
    color: #323232;
    font-size: 18px;
    margin: 0 auto;
}
.book-info h2{
    padding-top: 6px;
    /* max-height: 96px; */
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 6px;
}
.message{
    /* float: left; */
    width: 860px;
    font: 12px "Verdana","Simsun";
    color: #646464;
}
.t1{
    display: inline-block;
    padding-right: 25px;
    font-size: 1.2em;
    /* padding-bottom: 25px; */
}
.book-container{
    margin-bottom: 20px;
    display: table;
}
</style>