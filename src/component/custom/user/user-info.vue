<template>
    <div class="info-container">
        <div class="info-left">
            <div class="avator-wapper">
                <div class="avator-mode">
                    <img class="avator-img" v-bind:src="user.imgUrl">
                    <div class="change-avator">
                        <p>
                            <a role="button" style="color: inherit;cursor:default">更换头像</a>
                        </p>
                    </div>
                </div>
                <div class="des-mode">
                    <p>{{user.name}}</p>
                </div>
            </div>
                <div class="list-wrapper">
                    <h2>账户管理</h2>
                    <div class="line"></div>
                    <ul class="menu">
                        <li>
                            <a @click="showInfo">个人信息
                                <span class="arr">
                                    <i class="glyphicon glyphicon-chevron-right"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a @click="showOperation">操作记录
                                <span class="arr">
                                    <i class="glyphicon glyphicon-chevron-right"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
        <div class="info-right">
            <div class="info-boxing">
                <div class="info-title">
                    个人信息
                </div>
                <div class="line"></div>
                <div class="">
                    <div class="itemBox">
                        <div class="left">
                            <i class="glyphicon glyphicon-envelope"></i>
                        </div>
                        <div class="center">
                            <p>
                                <span class="font1">邮箱</span>
                                <span class="font4">{{user.email}}</span>
                            </p>
                            <p class="font">
                                可用邮箱加密码登录本系统，可用邮箱找回密码
                            </p>
                        </div>
                        <div class="right">
                            <a href="javascript:void(0);" class="moco-btn moco-btn-normal" @click="edit('email')">更改</a>
                        </div>
                    </div>
                    <div class="itemBox">
                        <div class="left">
                            <i class="glyphicon glyphicon-phone"></i>
                        </div>
                        <div class="center">
                            <p>
                                <span class="font1">手机</span>
                                <span class="font4">{{user.mobile}}</span>
                            </p>
                            <p class="font">
                                可用手机号加密码登录本系统，可通过手机号找回密码
                            </p>
                        </div>
                        <div class="right">
                            <a href="javascript:void(0);" class="moco-btn moco-btn-normal" @click="edit('mobile')">更改</a>
                        </div>
                    </div>
                    <div class="itemBox">
                        <div class="left">
                            <i class="glyphicon glyphicon-lock"></i>
                        </div>
                        <div class="center">
                            <p>
                                <span class="font1">密码</span>
                                <span class="font4">已设置</span>
                            </p>
                            <p class="font">
                                用于保护账号信息和登录安全
                            </p>
                        </div>
                        <div class="right">
                            <a href="javascript:void(0);" class="moco-btn moco-btn-normal" @click="edit('password')">更改</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="email" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-top:-12px"><span
          @click="cancel('email')">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">修改邮箱</h4>
                    </div>
                    <div class="modal-body clearfix">
                        <div class="form-group">
                            <label class="control-label col-md-2" for="emailInput" style="padding-top:7px">邮箱地址</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" v-model="user.email" id="emailInput" name="emailInput">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="moco-btn moco-btn-blue" @click="updateUser('email')">确定</button>
                        <button class="moco-btn moco-btn-normal" @click="cancel('email')">取消</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="mobile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-top:-12px"><span
          @click="cancel('mobile')">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">修改手机</h4>
                    </div>
                    <div class="modal-body clearfix">
                        <label class="control-label col-md-2" for="mobileInput" style="padding-top:7px">手机号码</label>
                        <div class="col-sm-6">
                            <input type="text" class="form-control" v-model="user.mobile" id="mobileInput" name="mobileInput">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="moco-btn moco-btn-blue" @click="updateUser('mobile')">确定</button>
                        <button class="moco-btn moco-btn-normal" @click="cancel('mobile')">取消</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="password" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="margin-top:-12px"><span
          @click="cancel('password')">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">修改密码</h4>
                    </div>
                    <div class="modal-body clearfix">
                        <label class="control-label col-md-2" for="passwordInput" style="padding-top:7px">新密码</label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control" v-model="user.password" id="passwordInput" name="passwordInput">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="moco-btn moco-btn-blue" @click="updateUser('password')">确定</button>
                        <button class="moco-btn moco-btn-normal" @click="cancel('password')">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUser,updateUser } from 'service/user-service';
export default {
    name: 'user-info',
    data() {
        return {
            user: {}
        }
    },
    created(){
        this.getUser();
    },
    methods:{
        async getUser(){
            this.user = getUser();
        },
        async updateUser(){
            let res = await updateUser(this.user);
            if(res.status == 200){
                this.user = res.data; 
            }
        },
        showInfo() {

        },
        showOperation() {
            
        },
        edit(label) {
            $('#'+label).modal('show');
        },
        cancel(label){
            $('#'+label).modal('hide');
        },
        async updateUser(label){
            console.log(label);
            let res = await updateUser(this.user);
            if(res.status==200){
                $('#'+label).modal('hide');
            }
        }
    },
    components: {

    }
}
</script>

<style>
.info-container{
    width: 100%;
    margin: 0 auto;
    padding: 30px 8%;
    background-color: #ffffff;
    display: table;
}
.info-left{
    width: 216px;
    background-color: #f8fafc;
    float: left;
}
.list-wrapper{
    overflow: hidden;
}
.list-wrapper h2{
    font-size: 16px;
    line-height: 24px;
    margin: 12px 24px;
    font-weight: 700;
}
.menu{
    padding: 10px 0 25px;
}
.menu li{
    border: none!important;
}
.menu a{
    color: #1c1f21;
    display: block;
    position: relative;
    padding: 0 0 0 54px;
    height: 48px;
    line-height: 48px;
    transition: background-color .3s 
}
.menu a .arr{
    color: #fff;
    position: absolute;
    right: 25px;
    top: 0;
}
.menu a:hover {
    background-color: #f3f5f7;
    color: #f01414
}
.menu a:hover .arr {
    color: #f01414
}
.menu a.on {
    color: #fff;
    background-color: #f01414
}
.menu a.on .arr {
    color: #fff
}
.icon-right{

}
.icon-right:before {
    content: "\e914"
}
.info-right{
    float: left;
    margin-left: 48px;
    width: 936px;
    box-sizing: border-box;
    background-color: #fff;
}
.avator-wapper{
    padding: 32px 0 24px;
}
.avator-mode{
    position: relative;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 4px solid #d9dde1;
    border-radius: 50px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
}
.des-mode{
    font-size: 16px;
    text-align: center;
}
.avator-img{
    height: 90px;
    width: 90px;
}

.avator-mode:hover > div {
    bottom: 0px;
    color: #fff;
    background-color: #1c1f21;
}

.change-avator{
    font-size: 12px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0px;
    bottom: -30px;
    transition:bottom .3s;
}
.info-title{
    line-height: 40px;
    font-size: 16px;
    font-weight: 700;
}
.info-boxing{
    min-height: 550px
}
.line{
    height: 1px;
    background-color: #d0d6d9;
    margin-top: 12px;
}
.itemBox{
    height: 88px;
    overflow: hidden;
    margin: auto;
    border-bottom: 1px solid #d9dde1;
}
.itemBox .left{
    width: 60px;
    float: left;
    font-size: 36px;
    color: #d9dde1;
    line-height: 98px;
    padding-left: 24px;
    margin-right: 24px;
}
.itemBox .center{
    padding-top: 22px;
    width: 510px;
    float: left;
}
.itemBox .right{
    float: right;
    padding-right: 12px;
    margin-top: 28px;
}
.icon-set_email{
    
}
.icon-set_email:before {
    content: "\e925";
}
.font1{
    color: #2b333b;
    font-size: 16px;
    font-weight: 700;
}
.font2{
    color: #93999f;
    font-size: 14px;
}
.font4{
    color: #f01414;
    font-size: 14px;
}
.moco-btn-normal{
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -weibkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    color: #545c63;
    background-color: transparent;
    border-color: #9199a1;
    opacity: 1;
}
.moco-btn-blue{
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -weibkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    color: #fff;
    background-color: #1481b8;
    border-color: #1481b8;
    opacity: 1;
}
.moco-btn{
    margin-right: 10px;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    text-decoration: none;
    box-sizing: border-box;
    background-image: none;
    border-radius: 0;
    -webkit-appearance: none;
    white-space: nowrap;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -weibkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    color: #545c63;
    background-color: transparent;
    border-color: #9199a1;
    opacity: 1;
    padding: 7px 16px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 18px;
}
[class*=" icon-"],[class^=icon-] {
    font-family: icomoon!important;
    /* speak: none; */
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.close-new{
    margin-top: -12px;
}
.modal-content{
    border-radius: 6px;
}
</style>