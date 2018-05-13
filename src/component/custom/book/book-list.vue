<template>
  <div>
      <div class="col-md-12" style="margin-top:30px;">
          <bookItem v-for="book in books" :key="book.id" :book="book"></bookItem>
      </div>
  </div>
</template>

<script>
import bookItem from './book-item.vue';
import { getBooks } from 'service/book-service';
export default {
    name: 'book-list-custom',
    data() {
        return {
            books: [
            ],
            page:1,
            rows:10
        }
    },
    created() {
        this.search();
    },
    methods: {
        async search() {
            let res = await getBooks(this.page,this.rows);
            if(res.status == 200){
                this.books = res.data.list; 
            }
        },
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