<template>
  <div id="header" class="clearfix" style="background: #07111b;">
      <div class="head-container" id="nav">
          <div class="logo">
              <router-link class="logo-a" to="/">
                <img src="assets/img/logo.png" class="headImg"/>
                <span class="logo-title">图书借阅系统</span>
              </router-link>
          </div>
          <ul class="nav-item">
              <li>
                  <router-link to="/">首页</router-link></li>
              <li>
                  <router-link to="/custom/user">个人信息</router-link></li>
              <li>
                  <router-link to="/custom/orders">借阅记录</router-link></li>
          </ul>
          <div class="search-wrap">
              <div class="searchTags" v-if="showTag">
                  <a @click="searchByMenu('科技')" class="pointer">科技</a>
                  <a @click="searchByMenu('文艺')" class="pointer">文艺</a>
              </div>
              <div class="search-area">
                  <input type="text" class="search-input" @blur="setTags" @focus="setTags" v-model="keyword" @keyup.enter="search"/>
                  <input type="hidden" class="btn_search"/>
                  <ul class="search-area-result"></ul>
              </div>
              <div class="showhide-search">
                  <i class="fa fa-search pointer" @click="search"></i>
              </div>
          </div>
          <div class="login-area">
              <ul class="header-unlogin clearfix">
                  <!-- <li class="shop-cart">
                      <a class="shop-cart-icon pointer">
                           <span class="glyphicon glyphicon-shopping-cart">
                           </span>
                           <span>购物车</span>
                           <span class="shop-icon"></span>
                      </a>
                  </li> -->
                  <li class="remind_warp" v-if="!showLogin">
                      <router-link to="/custom" class="remind-a"><i class="fa fa-bell"></i></router-link>
                  </li>
                  <li class="user-head" v-if="!showLogin">
                      <router-link class="header-avator" to="/custom/user">
                      <img class="userImg" v-bind:src="user.imgUrl+'?t='+new Date().getTime()"/>
                      </router-link>
                      <div class="user-modal">
                          <div class="user-modal-header">
                              <router-link to="/custom/user">
                                  <img class="user-modal-img" v-bind:src="user.imgUrl+'?t='+new Date().getTime()"/>
                              </router-link>
                              <div>
                                  <label style="margin-top: 10px">{{user.name}}</label>
                              </div>
                          </div>
                          <div class="user-modal-footer">
                              <a role="button" @click="logout">安全退出</a>
                          </div>
                      </div>
                  </li>
                  <li class="header-signin" v-if="showLogin">
                      <router-link to="/login" class="signin">登录</router-link>/
                      <router-link to="/register" class="signin">注册</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { getUser, loginout } from 'service/user-service';
import { getBooks ,getBooksByCategory, getBooksByMenu } from 'service/book-service';
export default {
    name: 'custom-head',
    data() {
        return {
            user: {},
            showLogin: true,
            showTag: true,
            keyword:"",
            page:1,
            rows:10,
        }
    },
    created() {
        this.initUser();
        if(this.user){
            this.showLogin=false;
        }
    },
    methods: {
        initUser() {
            this.user = getUser();
        },
        setTags() {
            this.showTag = !this.showTag;
        },
        async search() {
            if(this.$route.path.startsWith("/custom/books")){
                let res = await getBooks(this.page,this.rows,this.keyword);
                if(res.status == 200){
                    this.$emit("changeBooks",res.data.list); 
                }
            }else{
                this.$router.push({path:"/custom/books",query:{keyword:this.keyword}});
            }
        },
        async searchByMenu(menu){
            if(this.$route.path.startsWith("/custom/books")){
                let res = await getBooksByMenu(menu);
                if(res.status == 200){
                    this.$emit("changeBooks",res.data.list); 
                }
            }else{
                this.$router.push({path:"/custom/books",query:{cate:menu}});
            }
        },
        async logout() {
            let res=await loginout();
            if(res.status == 200){
                window.localStorage.removeItem('user');
                this.$router.push('/login');
            }
        },
    }
}
</script>

<style>
/* #nav,container,.waper{
    margin: 0 auto;
} */
.head-container{
    width: auto;
    padding-right: 20px;
    height: 72px;
    position: relative;
    z-index: 88;
    background-color: #07111b;
}
.head-container a:hover{
    color: #fff;
}
.headImg{
    height: 72px;
    width: 72px;
}
.logo{
    margin: 0px 20px;
    float: left;
}
.logo-title{
    color: #0082df;
}
.logo-a{
    display: block;
    /* padding-top: 20px; */
    height: 72px;
    width: 240px;
    /* background: url(/assets/img/logo.png) center center no-repeat; */
    /* text-indent: 100%; */
    overflow: hidden;
    /* white-space: nowrap; */
    transition: background-color .2s;
    color: #fff;
    font-size: 26px;
}
.login-area{
    float: right;
    position: relative;
    font-size: 14px;
    font-weight: 400;
    /*top:-10px;*/
}
.header-unlogin{
    margin-bottom: 0px;
}
.header-unlogin li {
    float: left;
}
.shop-cart{
    position: relative;
    height: 36px;
    line-height: 36px;
    margin-top: 18px;
    margin-bottom: 18px;
    list-style:none; 
}
.shop-cart-icon{
    color: rgba(255,255,255,.6);
    display: inline-block;
    padding: 0 18px;
    width: auto;
    box-sizing: border-box;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 18px;
    height: 36px;
    line-height: 34px;
}
.shop-cart-icon :hover{
    color: #fff;
}
.shop-icon{
    padding: 0 5px;
    height: 16px;
    line-height: 16px;
    background: #f01414;
    border-radius: 50%;
    color: #fff;
    font-style: normal;
    font-size: 10px;
    margin-left: 8px;
    display: none;
}
.icon-cart{
    position: relative;
    top: 2px;
    font-size: 16px;
    margin-right: 8px;
}
.signin{
    display: inline-block;
    width: auto;
    padding: 0 12px;
    font-size: 14px;
    color: rgba(255,255,255,.6);
}
.search-wrap{
    min-width: 32px;
    height: 72px;
    float: left;
    position: relative;
    margin-left: 24px;
    color: #fff;
    /*top:-10px;*/
}
.searchTags{
    position: absolute;
    z-index: 100;
    bottom: 24px;
    right: 40px;
    display: block;
}
.searchTags a{
    padding: 3px 8px;
    color: rgba(255,255,255,.6);
    background-color: rgba(255,255,255,.1);
    border-radius: 12px;
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
}
.search-area{
    float: right;
    position: relative;
    /* height: 46px; */
    width: 260px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding-right: 40px;
    border-bottom: 1px solid #000;
    border-bottom-color: rgba(255,255,255,.4);
    zoom: 1;
    -webkit-transition: width .3s;
    -moz-transition: width .3s;
    transition: width .3s;
}
.search-input{
    padding: 12px 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    font-size: 12px;
    float: left;
    border: 0;
    color: #fff;
    -webkit-transition: background-color .3s;
    -moz-transition: background-color .3s;
    transition: background-color .3s;
    background-color: #07111B;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.showhide-search{
    width: 20px;
    height: 24px;
    text-align: right;
    position: absolute;
    display: inline-block;
    right: 0;
    bottom: 24px;
    padding: 0 8px;
    border-radius: 18px;
}
.btn_search{
    float: left;
    cursor: pointer;
    width: 30px;
    height: 38px;
    text-align: center;
    -webkit-transition: background-color .3s;
    -moz-transition: background-color .3s;
    transition: background-color .3s;
}
.search-area-result{
    position: absolute;
    left: 0;
    top: 60px;
    width: 300px;
    margin-bottom: 20px;
    border-top: none;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
    font-size: 12px;
    overflow: hidden;
    display: none;
    z-index: 1000;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}
.header-signin{
    display: block;
    font-size: 14px;
    text-align: center;
    height: 72px;
    line-height: 72px;
    color: #787d82;
    transition: background-color .2s;
}
.nav-item li {
    float: left;
}
.nav-item a {
    position: relative;
    padding: 0 25px;
    display: block;
    color: rgba(255,255,255,.6);
    text-align: center;
    font-size: 16px;
    height: 72px;
    line-height: 72px;
    font-weight: 400;
}
.remind_warp{
    width: 60px;
    height: 48px;
    position: relative;
    margin-top: 12px;
    margin-bottom: 12px;
}
.remind-a{
    display: block;
    width: 60px;
    color: #787d82;
    text-align: center;
    -webkit-transition: background-color .2s;
    -moz-transition: background-color .2s;
    transition: background-color .2s;
    height: 48px!important;
    line-height: 48px!important;
}
.user-head{
    float: left;
    position: relative;
}

.user-head:hover .user-modal {
    display: block;
}

.user-modal {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1050;
    display: none;
    background-color: #ffffff;
    color: #0c0c0c;
    box-shadow:0 6px 12px rgba(0,0,0,.175);
    border:1px solid #ccc;
    border-radius:4px;
    width:200px;
}

.user-modal-header {
    padding: 15px;
    font-size: 14px;
    color: #373d41
    /*border-bottom: 1px solid #e5e5e5;*/
}

.user-modal-header > div {
    vertical-align: top;
    display: inline-block;
    margin-left: 10px;
}

.user-modal-footer {
    padding: 15px;
    border-top: 1px solid #e5e5e5;
    text-align: left;
    vertical-align: middle;
    color: #73777a !important;
    font-size: 12px;
}

.user-modal-footer a:hover {
    color: #00c0ef;
}

.user-modal-img {
    width: 60px;
    height: 60px;
    border-color: #4d5559;
    border-radius: 50%;
    display: inline-block;
}

.header-avator{
    display: block;
    height: 72px;
    line-height: 72px;
    width: 60px;
    color: #787d82;
    text-align: center;
    -webkit-transition: background-color .2s;
    -moz-transition: background-color .2s;
    transition: background-color .2s;
}
.userImg{
    width: 36px;
    height: 36px;
    border-color: #4d5559;
    border-radius: 50%;
    display: inline-block;
    /* background: url(/static/img/menu_icon.png) no-repeat; */
}
</style>


