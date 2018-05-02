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
                {
                    id: 1,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 2,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 3,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },{
                    id: 4,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 5,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 6,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 7,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 8,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },{
                    id: 9,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                },
                {
                    id: 10,
                    name: '三国演义',
                    author: '罗贯中',
                    number: 'ECS12124',
                    time: '2011-01-01',
                    recent: 10,
                    imgUrl: 'http://img3m8.ddimg.cn/42/10/25228608-1_w_20.jpg'
                }
            ]
        }
    },
    created() {
        // this.search();
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
    }
}
</script>


<style>

</style>