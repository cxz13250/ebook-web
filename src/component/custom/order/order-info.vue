<template>
<div>
    <customHeader></customHeader>
    <div class="order-panel">
        <div class="order-header">
            <div class="cart-header-warp">
                <div class="cart-title l">
                    <h1 class="l">确认借书</h1>
                </div>
            </div>
        </div>
        <div class="order-body clearfix">
            <div class="title-box clearfix">
                <p class="l goods-info-title">书籍信息</p>
            </div>
            <div class="detail-box">
                <ul>
                    <li class="clearfix">
                        <router-link :to="{path:'custom/book',query:{id:book.bookId}}">
                            <img v-bind:src="book.imgUrl" class="l" width="160px" height="140px">
                        </router-link>
                        <div class="text-info-box l">
                            <router-link :to="{path:'custom/book',query:{id:book.bookId}}">
                                <p class="package-info-title">{{book.name}}</p>
                            </router-link>
                            <p class="info-del">{{book.description}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="pay-box clearfix">
                <div class="pay-account-box clearfix">
                    <p class="pay-account r">
                        借书账号:
                        <span>{{user.name}}</span>
                    </p>
                </div>
            </div>
            <a href="javascript:void(0)" @click="createOrder" class="r moco-btn-red submit-btn moco-btn" style="border-radius: 25px;">提交借书单</a>
        </div>
    </div>
</div>
</template>

<script>
import { getUser } from 'service/user-service';
import { getBook } from 'service/book-service';
import { createOrder } from 'service/order-service';
import customHeader from 'custom/header.vue';
export default {
    name: 'order-info',
    data() {
        return {
            user:{
            },
            order: {
                id:0,
                bookId:0,
                userId:0,
                itemVOS:[
                ]
            },
            book:{
            }
        }
    },
    created() {
        this.getUser();
        this.getBook(this.$route.query.id);
    },
    methods:{
        getUser(){
            this.user=getUser();
        },
        async getBook(id) {
            let res=await getBook(id);
            if(res.status==200){
                this.book=res.data;
            }
        },
        async createOrder(){
            var item={
                bookId:this.book.id
            };
            this.order.itemVOS.push(item);
            this.order.userId=this.user.id;
            let res=await createOrder(this.order);
            if(res.status==200){
                this.$router.push('/custom/orders');
            }
        }
    },
    components:{
        customHeader
    }
}
</script>

<style>
.order-panel{
    min-height: 750px;
}
.order-header{
    height: 160px;
    background-color: #e3e6e9;
    background: url(https://order.imooc.com/static/module/pay/myorder/img/cart-header-bg.jpg) repeat-x left bottom;
}
.cart-header-warp{
    width: 1104px;
    height: 120px;
    line-height: 120px;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
}
.cart-title{
    color: #4D555D;
    font-weight: 200;
    font-size: 14px;
}
.cart-title h1{
    font-size: 32px;
    line-height: 115px;
    margin-right: 25px;
    color: #07111b;
    font-weight: 200;
}
.l{
    float: left;
}
.order-body{
    width: 1152px;
    padding: 0 36px 32px;
    background-color: #fff;
    margin-top: -40px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
}
.title-box{
    padding-top: 36px;
    padding-bottom: 24px;
}
.goods-info-title{
    margin-left: 18px;
    color: #07111b;
    font-size: 16px;
    line-height: 16px;
}
.detail-box{
    width: 100%;
}
.detail-box ul{
    width: 100%;
    padding-bottom: 36px;
    border-bottom: 1px solid #d9dde1;
}
.detail-box ul li{
    padding: 24px;
    box-sizing: border-box;
    background: #f3f5f7;
}
.detail-box ul li:last-child{
    margin-bottom: 0px;
}
.detail-box ul li img{
    margin-right: 24px;
}
/* .order-panel a:link, a:visited {
    color: #5e5e5e;
} */
.text-info-box{
    width: 700px;
    height: 100px;
    margin-right: 96px;
}
.package-info-title{
    margin: 0;
    font-size: 16px;
    color: #07111b;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info-del{
    font-size: 12px;
    color: #93999F;
    line-height: 24px;
    font-weight: 200;
}
.pay-box{
    margin-top: 36px;
}
.pay-account{
    font-size: 12px;
    color: #93999f;
    line-height: 24px;
    margin-bottom: 20px;
    margin-top: 15px;
}
.r{
    float: right;
}
.submit-btn{
    padding: 0px;
    width: 140px;
    height: 40px;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
}
.moco-btn-red:link, .moco-btn-red:visited {
    color: #fff;
}
.moco-btn-red {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -weibkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    color: #fff;
    background-color: #f20d0d;
    border-color: #f20d0d;
    opacity: 1;
}
</style>