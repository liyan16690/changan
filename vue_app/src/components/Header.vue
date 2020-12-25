<template>
    <div>
        <div class="header">
            <div><router-link to="/" class="logo"></router-link></div>
            <div class="nav clearfix">
                <ul class="clearfix">
                    <li v-for="(item,i) of nav" :key="i" @mouseenter="showCar(i)">
                        <div :class="{'actived':i==curNav}">{{item}}<span class="ico_arr"></span></div>
                    </li>
                    <li id="jxs"><router-link to="/dealer"><div><p>经销商</p></div></router-link></li>
                </ul>
                <div class="login" v-show="!$store.getters.getUid">
                    <router-link to="/login">登陆</router-link>
                    <span> | </span>
                    <router-link to="/reg">注册</router-link>
                </div>
                <div class="login" v-show="$store.getters.getUid">
                    <img src="../assets/img/user-bg.png"><span>{{$store.getters.getUname}}</span>
                    <ul class="login_dropdown">
                        <li  @click="changepage(1)"><a>个人信息</a></li>
                        <li  @click="changepage(2)"><a>修改密码</a></li>
                        <li  @click="changepage(3)"><a>我的关注</a></li>
                        <li  @click="changepage(4)"><a>订购爱车</a></li>
                    </ul>
                </div>
            </div>
            <div id="drop" class="car_down" :class="{'myheight':curNav>-1}" @mouseleave="noShowCar">
                <div class="header-carlist" v-for="(item,index) of carList[curNav]" :key="index">
                    <router-link :to="'/car/'+item.cid">
                        <img :src="item.imgUrl">
                        <p>{{item.title}}</p>
                        <p class="yuan">￥{{item.price_min}}-{{item.price_max}}万元</p>
                    </router-link>
                </div>
                <div v-show="curNav==5">
					<div class="car_fw">
						<router-link to="/order"><div><p>预约体验</p></div></router-link>
					</div>
                    <div class="car_fw">
                        <router-link to="/dealer"><div><p>经销商查询</p></div></router-link>
					</div>
                    <div class="car_fw">
                        <router-link to="/carPrice"><div><p>车价计算器</p></div></router-link>
					</div>
                    <div class="car_fw">
						<router-link to="/"><div><p>车价计算器</p></div></router-link>
					</div>
                </div>
                <div v-show="curNav==6">
					<div class="car_fw">
						<div><p>套餐保养</p></div>
					</div>
                    <div class="car_fw">
                        <router-link to="/news"><div><p>长安资讯</p></div></router-link>
					</div>
                    <div class="car_fw">
						<div><p>道路救援</p></div>
					</div>
                    <div class="car_fw">
						<div><p>在线客服</p></div>
					</div>
                    <div class="car_fw">
						<div><p>长安出行</p></div>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //使用es6 导入模块
    export default {
        name:"Header",
        data(){
            return{
                nav:["UNI","轿车","SUV","MVP","新能源","爱车导购","服务"],
                curNav:-1,//当前导航选项
                carList:[
                    [{cid:1,title:"UNI-T",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car01.png')}],
                    [
                        {cid:2,title:"第二代逸动",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car02.png')},
                        {cid:3,title:"新CS75",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car03.png')},
                        {cid:4,title:"第锐程CC",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car04.png')},
                        {cid:5,title:"睿骋CC",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car05.png')},
                        {cid:6,title:"第三代悦翔",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car06.png')},
                        {cid:7,title:"凌轩",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car07.png')},
                        {cid:8,title:"经典CS35",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car08.png')},
                        {cid:8,title:"新逸动EV300",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car09.png')}
                    ],
                    [
                        {cid:10,title:"第二代逸动",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car10.png')},
                        {cid:11,title:"新CS75",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car11.png')},
                        {cid:12,title:"第锐程CC",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car12.png')},
                        {cid:13,title:"睿骋CC",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car13.png')},
                        {cid:14,title:"第三代悦翔",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car14.png')},
                        {cid:15,title:"凌轩",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car15.png')},
                        {cid:16,title:"经典CS35",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car16.png')},
                        {cid:17,title:"新逸动EV300",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car17.png')}
                    ],
                    [
                        {cid:14,title:"第三代悦翔",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car18.png')},
                        {cid:15,title:"凌轩",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car19.png')},
                        {cid:16,title:"经典CS35",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car20.png')},
                        {cid:17,title:"新逸动EV300",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car14.png')}
                    ],
                    [
                        {cid:10,title:"第二代逸动",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car10.png')},
                        {cid:11,title:"新CS75",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car11.png')},
                        {cid:12,title:"第锐程CC",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car12.png')},
                        {cid:13,title:"睿骋CC",price_max:13.39,price_min:11.39,imgUrl:require('../assets/img/car/car13.png')}
                    ]
                ]
            }
        },
        methods:{
            /*导航条li触发事件，样式变化*/
            showCar(i){
                this.curNav=i;
            },
            noShowCar(){
                this.curNav=-1;
            },
            /*
            getCar(){
                console.log(1)
                this.axios.get(
                    '/user/list',
                    {}
                ).then(result=>{
                    if(result.data.code==200){
                        var car=result.data.data;
                        var obj=[];
                        for(var n=0; n<5;n++){
                            obj[n]=car.filter(function(value){
                                return value.family_id==n+1;
                            })
                        }
                        console.log(obj)
                    }else{
                        alert("无")
                    }
                })
            }*/

        },
        mounted(){
        }
    }
    //钩子函数，在创建完组件对象和data对象后自动调用
</script>

<style scoped>
    .myheight{
        height:400px;
        overflow:auto;
        border:1px solid rgb(90, 88, 88);
    }
	.actived {
        width:100%;
		background:#0062cc;
		border-radius:15px;
        cursor:hand;
        color:#fff;
	}
	.actived a {
		color:#fff;
	}
	.actived .ico_arr {
		background:url(../assets/img/ico/ico-arr-down-w.png) no-repeat;
		transform:rotate(180deg);
	}
/*下拉菜单*/
    .login{
        position:relative;
        color:#0062cc;
    }
    .login span{
        line-height:31px;
        font-size:16px;
    }
    .login img {
        height:24px;
    }
    .login_dropdown{
        position:absolute;
        width:110px;
        height:80px;
    }
    .login_dropdown li {
        height:20px;
        font-size:16px;
        line-height: 20px;
    }
</style>