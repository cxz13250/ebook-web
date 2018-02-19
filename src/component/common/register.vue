<template>
  <div class="wrapper" id="register">
    <div id="register-panel" class="col-md-12" v-bind:style="{'background-image': image}">
        <div id="register-body">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="register-content">
                    <dl>
                        <dt>
                            请填写基本信息
                        </dt>
                        <dd class="register-box">
                            <label><i class="glyphicon glyphicon-envelope"></i></label>
                            <input type="text" id="email" name="email" placeholder="请输入邮箱地址" class="login-input" v-model="user.email">
                        </dd>
                        <dd class="register-box">
                            <label><i class="glyphicon glyphicon-phone"></i></label>
                            <input type="text" id="mobile" name="mobile" placeholder="请输入手机号码" class="login-input" v-model="user.mobile">
                        </dd>
                        <dd class="register-box">
                            <label><i class="glyphicon glyphicon-lock"></i></label>
                            <input type="password" id="password1" name="password1" placeholder="请输入密码" class="login-input" v-model="password1">
                        </dd>
                        <dd class="register-box">
                            <label><i class="glyphicon glyphicon-lock"></i></label>
                            <input type="password" id="password2" name="password2" placeholder="请再次输入密码" class="login-input" v-model="password2">
                        </dd>
                        <dd class="login-box">
                            <input type="button" class="login-btn" @click="register" value="立即注册">
                            <router-link to="/login" style="float:right">已有账号，立即登录</router-link>
                        </dd>      
                    </dl>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        <efooter></efooter>
    </div>
  </div>
</template>

<script>
import efooter from './footer.vue';
export default {
  name: 'register',
  data() {
      return {
          password1: '',
          password2: '',
          user: {
              email: '',
              mobile: '',
              password: ''
          },
          image: 'url("./assets/img/login_bg.jpg")'
      }
  },
  created() {
    
  },
  computed: {
      //判断手机号码
      validateMobile: function (){
          return /^1\d{10}$/gi.test(this.user.mobile)
      },
      validateEmail: function (){
          return /^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,3}$/.test(this.user.email);
      }
  },
  methods: {
      register() {
          if(!this.validateEmail) {
              alert('邮箱地址格式不正确');
              return;
          }
          if(!this.validateMobile) {
              alert('手机号码格式不正确');
              return;
          }
          if(this.password1 != this.password2){
              alert('两次输入的密码不一致');
          }
      }
  },
  components: {
    efooter
  }
}
</script>

<style>
#register-panel{
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
#register-body{
    height: 80%;
}
.register-content{
    text-align: center;
    max-width: 80%;
    background-color: #fff;
    box-shadow: 0px 0px 10px #333;
    margin-top: 100px;
    padding: 40px 50px 35px 50px;
    border-radius: 1%;
    font-size: 16px;
    margin-left: 10%;
    margin-right: 10%;
}
.register-content dt {
    text-align: center;
    font-size: 20px;
}
.register-box {
    width: 360px;
    margin: 7% auto;
}
</style>
