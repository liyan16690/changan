<template>
    <div>
        <div class="person_title">
            <div class="person_tFont">
                <p>Hi {{$store.getters.getUname}}</p>
                <p class="letter-spacing">欢迎登陆个人中心</p>
            </div>
        </div>
        <div class="person_nav">
            <ul>
                <li class="{'actived':1==curpage}" @click="changepage(1)"><a>个人信息</a></li>
                <li class="{'actived':2==curpage}" @click="changepage(2)"><a>修改密码</a></li>
                <li class="{'actived':3==curpage}" @click="changepage(3)"><a>我的关注</a></li>
                <li class="{'actived':4==curpage}" @click="changepage(4)"><a>订购爱车</a></li>
            </ul>
        </div>
        <div class="person_content">
            <!--个人信息-->
            <div v-show="1==curpage">
                <div class="cont_item">
                    <div class="cont_left"><span>昵称：</span></div>
                    <div class="cont_input">
                        <span>{{$store.getters.getUname?$store.getters.getUname:"填入信息"}}</span>
                    </div>
                    <div class="cont_right"><span>请输入4-10字符</span></div>
                </div>
                <div class="cont_item">
                    <div class="cont_left"><span>姓名：</span></div>
                    <div class="cont_input">
                        <span>{{$store.getters.getUser_name?$store.getters.getUser_name:"填入信息"}}</span>
                    </div>
                    <div class="cont_right"><span></span></div>
                </div>
                <div class="cont_item">
                    <div class="cont_left"><span>手机号：</span></div>
                    <div class="cont_input">
                        <span>{{$store.getters.getPhone?$store.getters.getPhone:"填入信息"}}</span>
                    </div>
                    <div class="cont_right"><span></span></div>
                </div>
                <div class="cont_item">
                    <div class="cont_left"><span>性别：</span></div>
                    <div class="cont_input">
                        <span>{{$store.getters.getGender?'男':'女'}}</span>
                    </div>
                    <div class="cont_right"><span></span></div>
                </div>
            </div>
            <!--修改个人信息-->
            <div v-show="2==curpage">
                <div>
                    <div class="cont_item">
                        <div class="cont_left"><span>昵称：</span></div>
                        <div class="cont_input">
                            <input class="input-text" type="text" v-model="uname" placeholder="请输入您的昵称">
                        </div>
                        <div class="cont_right"><span>请设置6-10字符</span></div>
                    </div>
                    <div class="cont_item">
                        <div class="cont_left"><span>姓名：</span></div>
                        <div class="cont_input">
                            <input class="input-text" type="text" v-model="user_name" placeholder="请输入您的姓名">
                        </div>
                        <div class="cont_right"><span>请设置6-10字符</span></div>
                    </div>
                     <div class="cont_item">
                        <div class="cont_left"><span>手机号：</span></div>
                        <div class="cont_input">
                            <input class="input-text" type="text" v-model="phone" placeholder="请输入您的手机号">
                        </div>
                        <div class="cont_right"><span>请设置13位手机号</span></div>
                    </div>
                    <div class="cont_item">
                        <div class="cont_left"><span>性别：</span></div>
                        <div class="cont_input">
                            <label><input type="radio" value="1" v-model="gender" name="sex">男</label>
                            <label><input type="radio" value="0" v-model="gender" name="sex">女</label>
                        </div>
                        <div class="cont_right"><span></span></div>
                    </div>
                    <button class="sub" @click="subdata">提交</button>
                </div>
            </div>
            <!--我的关注-->
            <div v-show="3==curpage">
                <h1 style="text-align:center">我的关注</h1>
            </div>
             <!--订购爱车-->
            <div v-show="4==curpage">
                <h1 style="text-align:center">订购爱车</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"User",
    data(){
        return{
            curpage:1,
            phone:"",      //用户手机号
            uname:"",      //昵称
            user_name:"",  //姓名
            gender:""
        }
    },
    methods:{
        changepage(page){
            this.curpage=page;
        },
        subdata(){
            var uid=this.$store.getters.getUid//编号
            var phone=this.phone    //用户手机号
            var uname=this.uname   //昵称
            var user_name=this.user_name //姓名
            var gender=this.gender
            this.axios.post(
                'user/update',
                this.$qs.stringify({
                    uid, //编号
                    phone,     //用户手机号
                    uname,    //昵称
                    user_name,  //姓名
                    gender,
                })
            ).then(result=>{
                    console.log(result)
                    if(result.data.code==1){
                            this.$store.commit("setPhone",phone);
                            this.$store.commit("setUname",uname);
                            this.$store.commit("setUser_name",user_name);
                            this.$store.commit("setGender",gender);
                        alert("修改成功")
                    }else{
                         alert("修改失败")
                    }
                }
            )
        }

    },
    mounted(){//挂载

    }


}
</script>

<style scoped>
    .person_nav li:hover{
        cursor: pointer;
    }
    /*个人中心*/
    .person_title{
        height:80px;
        width:100%;
        padding:70px 0;
        text-align:center;
        color:#fff;
        font-size:30px;
        background:#333 url("../assets/img/img-4.jpg") no-repeat;
        background-size:cover;
    }
    .person_tFont p{
        height:40px;
        line-height:40px;
    }
    .letter-spacing{
        letter-spacing:6px;
    }
    .person_nav{
        height:80px;
        text-align:center;
        font-size:20px;
        border-bottom:1px solid #ccc;
    }
    .person_nav ul{
        width:600px;
        margin:0 auto;
        display:flex;
        justify-content: space-around;
    }
    .person_nav ul li{
        height:80px;
        width:100px;
        line-height: 80px;
    }
    .actived{
        border-bottom:3px solid #0066c6;
        font-weight:bold;
    }
    .actived a{
        color:#0066c6;
    }
    .person_content{
        padding:50px 0;
        margin:0 auto;
        width:800px;
        font-size:16px;
        text-align: center;
    }
    .sub{
        width:300px;
        height:40px;
        margin:0 auto;
        background-color:#0066c6;
        border-radius: 8px;
        color:#fff;
        font-size:16px;
    }
    .cont_item{
        margin-bottom: 10px;
        display:flex;
    }
    .cont_left{
        width:200px;
        text-align:right;
        padding-right:10px;
        height:40px;
        line-height: 40px;
    }
    .cont_right{
        height:40px;
        line-height: 40px;
        width:200px;
        text-align:left;
        padding-left:10px;
        font-size:12px;
    }
    .cont_input{
        height:30px;
        width:400px;
        padding:5px 8px;
        border:1px solid #ededed;
        border-radius:4px;
        margin-bottom:15px;

    }
    .cont_input input{
        border:0;
        background:#fff;
        border:0;
        width:100%;
        padding:5px 0;
        font-size:16px;
    }
    .cont_input input[type=radio]{
        width:30px;
    }
  </style>