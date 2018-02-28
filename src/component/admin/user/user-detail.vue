<template>
  <div>
    <section class="content-header">
    <h1>
      用户详情
    </h1>
    <ol class="breadcrumb">
      <li>
        <a href="#">
          <i class="fa fa-dashboard"></i>首页
        </a>
      </li>
      <li>
        <router-link to="/admin/users">用户列表</router-link>
      </li>
      <li class="active">
        <router-link to="/admin/user">用户详情</router-link>
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
                <div class="col-md-3"></div>
                <div class="col-md-8">
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userName">用户姓名</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" v-model="user.name" name="userName" id="userName" @blur="checkName">
                        </div>
                        <label class="col-sm-3 control-label warning" for="userName" v-if="nameInvalid"><i class="fa fa-close"></i>姓名不可为空</label>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userEmail">用户邮箱</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" v-model="user.email" name="userEmail" id="userEmail" @blur="checkEmail">
                        </div>
                        <label class="col-sm-3 control-label warning" for="userEmail" v-if="emailInvalid"><i class="fa fa-close"></i>邮箱不可为空</label>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userMobile">用户手机</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" v-model="user.mobile" name="userMobile" id="userMobile" @blur="checkMobile">
                        </div>
                        <label class="col-sm-3 control-label warning" for="userMobile" v-if="mobileInvalid"><i class="fa fa-close"></i>手机不可为空</label>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userPassword">用户密码</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="password" v-model="user.password" name="userPassword" id="userPassword">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userRole">用户角色</label>
                        <div class="col-sm-6">
                            <select class="form-control" v-model="user.roleId" id="userRole" @blur="checkRole">
                                <option value="-1">请选择角色</option>
                                <option v-for="role in roleNames" v-bind:value="role.id" :key="role.id">{{role.name}}</option>
                            </select>
                        </div>
                        <label class="col-sm-3 control-label warning" for="userRole" v-if="roleIdInvalid"><i class="fa fa-close"></i>角色不可为空</label>
                    </div>
                    <div class="form-group">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <input type="button" class="btn btn-primary" @click="save" value="保存"/>
                            <input type="button" class="btn btn-default" @click="goBack" value="返回"/>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import { getUserInfo, updateUser } from 'service/user-service';
import { roles } from '../../../constants/role'
export default {
    name: 'user-admin',
    data() {
        return {
            //form validate
            nameInvalid: false,
            emailInvalid: false,
            mobileInvalid: false,
            roleIdInvalid: false,

            roleNames: [],
            user: {
                id: 1,
                name: '',
                email: '',
                mobile: '',
                password: '',
                roleId: -1,
                roleName: ''
            }
        }
    },
    created() {
        this.roleNames=roles;
        if(this.$route.query.id){
            this.search(this.$route.query.id);
        }
    },
    methods: {
        async search(id) {
            let res = await getUserInfo(id);
            console.log(res.data);
            if(res.status == 200){
                this.user = res.data;
                console.log(this.user);
            }
        },
        goBack() {
            window.history.go(-1);
        },
        async save() {
            this.checkName();
            this.checkEmail();
            this.checkMobile();
            this.checkRole();
            if(this.nameInvalid || this.emailInvalid || this.mobileInvalid || this.roleIdInvalid){
                return;
            }
            let res = await updateUser(this.user);
            if(res.status == 200){
                this.$router.push({path:'users'});
            }
        },
        checkName(){
            if(!this.user.name||this.user.name.trim()==''){
                this.nameInvalid=true;
            }else{
                this.nameInvalid=false;
            }
        },
        checkEmail(){
            if(!this.user.email||this.user.email.trim()==''){
                this.emailInvalid=true;
            }else{
                this.emailInvalid=false;
            }
        },
        checkMobile(){
            if(!this.user.mobile||this.user.mobile.trim()==''){
                this.mobileInvalid=true;
            }else{
                this.mobileInvalid=false;
            }
        },
        checkRole(){
            if(!this.user.roleId||this.user.roleId==-1){
                this.roleIdInvalid=true;
            }else{
                this.roleIdInvalid=false;
            }
        },
    }
}
</script>

<style>

</style>
