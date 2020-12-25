<template>
    <div>
         <div class="fathor">
            <div>
                <div class="son">
                    <div class="son_img"></div>
                    <div class="son-content">
                        <div class="title">
                            <router-link to="/login">登陆</router-link>
                            <strong>&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;</strong>
                            <router-link to="/reg">注册</router-link></div>
                        <ul class="regin">
                            <li>
                                <img class="phone" src="../assets/img/ico/phone.svg">
                                <input class="input_img_left" type="phone" @blur="testPhone()" v-model="phone" placeholder="请输入手机号">
                            </li>
                            <li>
                                <input class="input_button_right" type="text" @blur="testC()" v-model="textcode" placeholder="请输入验证码">
                                <button @click="code()">获取验证码</button>
                            </li>
                            <li>
                                <img class="phone" src="../assets/img/ico/suo.svg">
                                <input class="input_img_left" type="password" @blur="testUpwd()" v-model="password" placeholder="请输入密码">
                            </li>
                            <p>8-16位字母、数字、符号，至少两种组合</p>
                            <li><label><input type="radio" id="agree" :checked="agree" @click="change()">我已阅读并同意</label><a href="#" class="xieyi">《用户注册协议》</a></li>
                            <li><button class="reg" @click="regin()">注册</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Reg",
    data(){
        return {
            phone:"",
            textcode:null,
            password:"",
            agree:0,
            recode:""
        }
    },
    methods:{
        testPhone(){
            var reg=/^1[3-9]\d{9}$/;
            if(!reg.test(this.phone)){
                alert("手机号格式不正确")
                return;
            }
            this.axios.post(
                "/user/testPhone",
                this.$qs.stringify({
                    phone:this.phone
                })
            ).then(result=>{
                console.log(result.data)
                if(result.data.code==1){
                    alert("此手机号已经被注册")
                }
            })
        },
        change(){
            if(this.agree==1){
                this.agree=0
            }else{
                this.agree=1
            }
        },
        testC(){
            if(!this.textcode){
                alert("请输获取验证码，并输入")
                return
            }
            if(this.textcode!==this.recode){
                alert("验证码错误，请重新输入")
            }
        },
        code(){
            var code=Math.floor(Math.random()*10000);
            this.recode=code.toString();
            alert("验证码"+code)
        },
        testUpwd(){
            if(!this.password){
                alert("请输入密码")
                return
            }
            var reg = /^[a-z0-9]{4,12}$/i;
            if(!reg.test(this.password)){
                alert("密码格式不正确,请输入 4~12位字母或数字");
                return;
            }
        },
        regin(){
            var $phone=this.phone;
            var $upwd=this.password;
            console.log(this.agree)
            if(!$phone){
                alert("请输入手机号")
                return;
            }
            if(!this.textcode){
                alert("请输入验证码")
                return;
            }
            if(!this.password){
                alert("请输入验证码")
                return;
            }
            if(!this.agree){
                alert("请阅读协议并同意")
                return;
            }
            this.axios.post(
                "/user/regin",
                this.$qs.stringify({
                    phone:$phone,
                    upwd:$upwd
                })
            ).then(result=>{
                if(result.data.code==200){
                    alert("注册成功")
                    this.$router.push('/login')
                }else{
                    alert("注册失败")
                }
            })
        }
    }
}
</script>

<style scoped>
</style>