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
                        <div class="mlogin">
                            <!--微信登录-->
                            <div v-show="curLogin=='wx'">
                                <img src="../assets/img/ico/weixin.svg">
                                <p>微信登陆</p>
                                <div>
                                    <a href="javascript:;" @click="changeLogin('ph')">手机验证码登陆</a>
                                    <strong> | </strong>
                                    <a href="javascript:;" @click="changeLogin('up')">账号密码登陆</a>
                                </div>
                                <div><label><input type="radio" id="agree" @click="change()" v-model="agree">我已阅读并同意</label><a href="javascript:;" class="xieyi">《用户注册协议》</a></div>
                            </div>
                            <!--手机验证码登录-->
                            <div v-show="curLogin=='ph'">
                                <ul class="regin hspace">
                                    <li>
                                        <img class="phone" src="../assets/img/ico/phone.svg">
                                        <input class="input_img_left" type="phone" v-model="phone" placeholder="请输入手机号">
                                    </li>
                                    <li>
                                        <input class="input_button_right" type="text" @blur="testC()" v-model="textcode" placeholder="请输入验证码">
                                        <button @click="code()">获取验证码</button>
                                    </li>
                                    <li><button class="reg" @click="login('phone')">登录</button></li>
                                    <div class="lf"><a href="javascript:;"  @click="changeLogin('up')">账号密码登录</a></div>
                                    <div class="rg"><a href="">忘记密码</a></div>
                                    <div class="th3"  @click="changeLogin('wx')">
                                        <img src="../assets/img/ico/weixin.svg">
                                        <p>第三方登录</p>
                                    </div>
                                </ul>
                            </div>
                            <!--账号密码码登录-->
                            <div v-show="curLogin=='up'">
                                <ul class="regin hspace">
                                    <li>
                                        <img class="phone" src="../assets/img/ico/user.svg">
                                        <input class="input_img_left" type="phone" v-model="name" placeholder="请输入账号">
                                    </li>
                                    <li>
                                        <img class="phone" src="../assets/img/ico/suo.svg">
                                        <input class="input_img_left" type="password" v-model="upwd" placeholder="请输入密码">
                                    </li>
                                    <li><button class="reg" @click="login()">登录</button></li>
                                    <div class="lf"><a href=""  @click="changeLogin('ph')">手机验证码登录</a></div>
                                    <div class="rg"><a href="">忘记密码</a></div>
                                    <div class="th3"  @click="changeLogin('wx')">
                                        <img src="../assets/img/ico/weixin.svg">
                                        <p>第三方登录</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            phone:"",
            name:"",
            upwd:"",
            curLogin:"wx",
            agree:0,
            recode:"",
            textcode:""
        }
    },
    methods:{
        changeLogin(msg){
            this.curLogin=msg
        },
        change(){
            if(!this.agree){
                this.agree=1
            }else{
                this.agree=0
            }
        },
        testC(){
            if(this.textcode!==this.recode){
                alert("验证码错误，请重新输入")
            }
        },
        code(){
            var code=Math.floor(Math.random()*10000);
            this.recode=code.toString();
            alert("验证码"+code)
        },
        login(msg){
            var $phone=this.phone;
            var $upwd=this.upwd;
            var $uname=this.name;
            var reg_ph=/^1[3-9]\d{9}$/;
            //2: 创建正则表达式  6~12位置 字母数字
            var reg = /^[a-z0-9]{4,12}$/i;
            if(msg=='phone'){
                 //4: 判断如何错误 密码提示
                if(!reg_ph.test($phone)){
                    alert("手机号不正确");
                    return;
                }
                if(!this.recode){
                    alert("输入验证码");
                    return;
                }
            }else{
                 //3: 判断如何错误 用户名提示
                if(!reg.test($uname)){
                    alert("用户名格式不正确,请输入 4~12位字母或数字");
                    return;
                }
                //4: 判断如何错误 密码提示
                if(!reg.test($upwd)){
                    alert("密码格式不正确,请输入 4~12位字母或数字");
                    return;
                }
            }
            this.axios.post(
                "/user/login",
                this.$qs.stringify({
                    uname:$uname,
                    phone:$phone,
                    upwd:$upwd
                })
            ).then(result=>{
                    console.log(result)
                    if(result.data.code==1){
                            var data=result.data.data;
                            var uid=data.uid;
                            var phone=data.phone;
                            var uname=data.uname;
                            var user_name=data.user_name;
                            var gender=data.gender;
                            console.log(uid)
                            this.$store.commit("setPhone",phone);
                            this.$store.commit("setUname",uname);
                            this.$store.commit("setUser_name",user_name);
                            this.$store.commit("setGender",gender);
                            this.$store.commit("setUid",uid);

                            alert("登录成功");
                            this.$router.push('/user')
                    }else{
                            alert("登录失败")
                    }
                }
            )
           
        }
    }


}
</script>

<style scoped>
        /*登陆*/
        .mlogin p,.mlogin div {
            margin-top:10px;
        }
        .mlogin a {
            color:#0056b3;
        }
		.lp>input{display:inline-block;}
		.lp>div{border:1px solid #ccc;margin:13px;}
		.lp .p {
			width:205px;
        }
        #agree {
            border:0;
            vertical-align: middle;
        }
        .xieyi {
            color:#0056b3;
        }
        .lf{
            float:left;
        }
        .rg{
            float:right;
        }
        .th3{
            padding-top:50px ;
            clear:both;
        }
        .th3 img {
            width:30px;
        }
</style>