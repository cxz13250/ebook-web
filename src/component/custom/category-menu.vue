<template>
    <div class="category-nav">
        <div>
            <router-link :to="{path:'/custom/books',query:{id:cate.id}}" v-for="cate in categories" :key="cate.id">{{cate.menu}}</router-link>
        </div>
    </div>
</template>
<script>
import { getCategories } from 'service/category-service';
import { bookMenus } from 'constants/book-menu';
export default {
    name: 'category-nav',
    data() {
        return {
            categories: [
                {
                    id: 0,
                    name:"",
                    menu:"",
                }
            ]
        }
    },
    created() {
        this.categories=bookMenus;
    },
    methods: {
        navicat() {

        }
    }
}
</script>
<style>
.category-nav{
    height: 72px;
    background: #FFFFFF;
    box-shadow: 0 8px 16px 0 rgba(28, 31, 33, 0.1);
    padding: 16px 0;
    box-sizing: border-box;
}
.category-nav a{
    float: left;
    font-size: 16px;
    color: #07111B;
    line-height: 40px;
    height: 40px;
    position: relative;
    margin-right: 48px;
    font-weight: bold;
}
.category-nav div{
    width: 1152px;
    padding-left: 12px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
}
</style>


