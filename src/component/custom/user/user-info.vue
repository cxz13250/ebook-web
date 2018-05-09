<template>
    <div class="info-container">
        <div class="info-left">
            <div class="avator-wapper">
                <div class="avator-mode">

                </div>
                <div class="des-mode">
                    <p>{{user.name}}</p>
                </div>
                <div class="list-wapper">

                </div>
            </div>
        </div>
        <div class="info-right"></div>
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
        }
    },
    components: {

    }
}
</script>

<style>
.info-container{
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
}
.info-left{
    width: 216px;
    background-color: #f8fafc;
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
</style>