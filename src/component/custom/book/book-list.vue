<template>
    <div>
        <customHeader v-if="showHead" v-on:changeBooks="event"></customHeader>
        <div v-if="books">
            <div class="col-md-12" style="padding-top:30px;min-height:650px;background-color: #f3f5f7;" v-if="books.length>0">
                <bookItem v-for="book in books" :key="book.id" :book="book" v-on:changeBook="changeBookEvent"></bookItem>
            </div>
            <div class="col-md-12" style="margin-top:30px;text-align:center;min-height:550px;" v-if="books.length==0">
                <h1>抱歉，没有找到您想要书籍</h1>
            </div>
        </div>
    </div>
</template>

<script>
import bookItem from './book-item.vue';
import { getBooks ,getBooksByCategory, getBooksByMenu } from 'service/book-service';
import { bookMenus } from '../../../constants/book-menu';
import customHeader from 'custom/header.vue';
export default {
    name: 'book-list-custom',
    data() {
        return {
            books: [
            ],
            page:1,
            rows:10,
            keyword:'',
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
        },
        event(data){
            this.books=data;
        },
        changeBookEvent(data){
            this.$emit('changeBookEvent',data);
        }
    },
    components:{
        bookItem,
        customHeader
    },
    props: {
        num: {
            default:100,
            required:false
        },
        showHead:{
            default:true,
            required:false
        }
    }
}
</script>


<style>

</style>