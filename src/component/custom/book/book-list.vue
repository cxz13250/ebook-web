<template>
  <div v-if="books">
      <div class="col-md-12" style="margin-top:30px;min-height:550px;" v-if="books.length>0">
          <bookItem v-for="book in books" :key="book.id" :book="book"></bookItem>
      </div>
      <div class="col-md-12" style="margin-top:30px;text-align:center;min-height:550px;" v-if="books.length==0">
          <h1>抱歉，没有找到您想要书籍</h1>
      </div>
  </div>
</template>

<script>
import bookItem from './book-item.vue';
import { getBooks ,getBooksByCategory, getBooksByMenu } from 'service/book-service';
import { bookMenus } from '../../../constants/book-menu';
export default {
    name: 'book-list-custom',
    data() {
        return {
            books: [
            ],
            page:1,
            rows:10,
            keyword:''
        }
    },
    created() {
        if (this.$route.query.keyword){
            this.keyword=this.$route.query.keyword;
        }
        if(this.$route.query.cate){
            this.searchByMenu(this.$route.query.cate);
        }else{
            this.search();
        }
    },
    methods: {
        async search() {
            let res = await getBooks(this.page,this.num,this.keyword);
            if(res.status == 200){
                this.books = res.data.list; 
            }
        },
        async searchByCategory(id){
            let res = await getBooksByCategory(id);
            if(res.status == 200){
                this.books = res.data.list; 
            }
        },
        async searchByMenu(menu){
            let res = await getBooksByMenu(menu);
            if(res.status == 200){
                this.books = res.data.list; 
            }
        }
    },
    components:{
        bookItem
    },
    props: {
        num: {
            default:20,
            required:false
        }
    }
}
</script>


<style>

</style>