<template>
  <div class="wrapper" id="login">
    <div id="login-panel" class="col-md-12" v-bind:style="{'background-image': image}">
        <div id="login-body">
        <div class="pull-right" style="margin-right: 5%">
            <div class="login-content">
              <dl>
                <dt>在线图书借阅系统</dt>
                <dd class="login-box" style="display: block">
                <label><i class="glyphicon glyphicon-user"></i></label>
                <input type="text" id="username" name="username" placeholder="请输入邮箱/手机" class="login-input" v-model="user.email">
                </dd>
                <dd class="login-box" style="display: block">
                <label><i class="glyphicon glyphicon-lock"></i></label>
                <input type="password" id="password" name="password" placeholder="请输入密码" class="login-input" v-model="user.password" @keyup.enter="login">
                </dd>
                <dd class="login-box">
                <input type="button" class="login-btn" @click="userLogin" value="登录">
                <router-link to="/register" style="float:right">没有账号，立即注册</router-link>
                </dd>      
              </dl>
            </div>
        </div>
        </div>
        <efooter></efooter>
    </div>
  </div>
</template>

<script>
import efooter from './footer.vue';
import { login, setUser } from 'service/user-service'
export default {
  name: 'login',
  data() {
      return {
          user: {
              email: '',
              mobile: '',
              password: '',
              roleName: '',
              roleId: 0,
          },
          image: 'url("./assets/img/login_bg.jpg")'
      }
  },
  created() {
    
  },
  methods:{
      async userLogin() {
        if(!this.user.email || this.user.email.trim()==''){
          alert('用户名不可为空');
          return;
        }
        let res=await login(this.user);
        if(res.status == 200) {
          this.user=res.data;
          setUser(this.user);
          if(this.user.roleId == 1){
            this.$router.push({path: '/admin'})
          }else if(this.user.roleId == 2){
            this.$router.push({path: '/custom'})
          }
        }else{
          alert('密码错误');
        }
      },
      register() {
        this.$router.push({path: '/register'})
      }
  },
  components: {
    efooter
  }
}
</script>

<style>
#login-panel{
  padding-top: 40px;
  padding-bottom: 0px;
  background-color: #fff;
  /* background-image: url("/assets/img/bg.jpg"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100%;
  /* min-width: 860px; */
  min-height: 770px;
  overflow: auto;
  position: relative;
}
#login-body{
  height: 80%;
}
.login-content{
  max-width: 439px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #333;
  margin-top: 100px;
  padding: 40px 50px 35px 50px;
  border-radius: 1%;
  font-size: 16px;
}
.login-content dt{
  text-align: center;
  font-size: 20px;
}
.login-form{
  padding-bottom: 51px;
  padding-top: 43px;
}
.login-btn{
  width: 100%;
  color: #fff;
  font-size: 19px;
  display: block;
  margin: auto;
  height: 43px;
  border-radius: 30px;
  background: #3cbbfe;
  background: -webkit-linear-gradient(to right, #36d3ea, #3cbbfe);
  background: linear-gradient(to right,#36d3ea, #3cbbfe);
  /* border-color: rgb(16, 108, 200); */
}
.login-box{
  width: 360px;
  margin: 7% auto;
}
.login-input{
  width:90%;
  border: #e0e0e0 1px solid;
  border-radius: 0 3px 3px 0px;
  padding:8px;
  font-size: 14px;
  height: 40px;
}
</style>


