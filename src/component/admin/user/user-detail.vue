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
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userName">用户姓名</label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" v-model="user.name" name="userName" id="userName">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userEmail">用户邮箱</label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" v-model="user.email" name="userEmail" id="userEmail">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userMobile">用户手机</label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" v-model="user.mobile" name="userMobile" id="userMobile">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userPassword">用户密码</label>
                        <div class="col-sm-9">
                            <input class="form-control" type="password" v-model="user.password" name="userPassword" id="userPassword">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label" for="userRole">用户角色</label>
                        <div class="col-sm-9">
                            <select class="form-control" v-model="user.roleId" id="userRole">
                                <option value="-1">请选择角色</option>
                                <option v-for="role in roleNames" value="role.id" :key="role.id">{{role.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-3"></div>
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
        }
    }
}
</script>

<style>

</style>
