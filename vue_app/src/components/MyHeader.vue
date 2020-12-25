<template>
    <div>
        <div class="header">
            <div><router-link to="/" class="logo"></router-link></div>
            <div class="nav clearfix">
                <ul class="clearfix">
                    <li v-for="(item,i) of nav" :key="i" @mouseenter="showCar(i)">
                        <div :class="{'actived':i==curNav}">{{item}}<span class="ico_arr"></span></div>
                    </li>
                    <li id="jxs"><a href="#">经销商</a></li>
                </ul>
                <div class="login">
                    <router-link to="/login">登陆</router-link>
                    <span> | </span>
                    <router-link to="/reg">注册</router-link>
                </div>
            </div>
            <div id="drop" class="car_down" :class="{'myheight':curNav>-1}" @mouseleave="noShowCar">
                <div class="header-carlist" v-for="(item,index) of carList[curNav]" :key="index">
                    <router-link :to="'/car/:'+item.cid">
                        <img :src="item.imgUrl">
                        <p>{{item.name}}</p>
                        <p class="yuan">￥{{item.priceS}}-{{item.priceL}}万元</p>
                    </router-link>
                </div>
                <div v-show="curNav==5">
					<div class="car_fw">
						<router-link to="/order"><div><p>预约体验</p></div></router-link>
					</div>
                    <div class="car_fw">
                        <router-link to="/order"><div><p>经销商查询</p></div></router-link>
					</div>
                    <div class="car_fw">
						<div><p>车价计算器</p></div>
					</div>
                    <div class="car_fw">
						<div><p>金融支持</p></div>
					</div>
                </div>
                <div v-show="curNav==6">
					<div class="car_fw">
						<div><p>套餐保养</p></div>
					</div>
                    <div class="car_fw">
						<div><p>服务活动</p></div>
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
                    [
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")}
                    ],
                    [//轿车
                        {name:'UNI-T',cid:'2',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car02.png")},
                        {name:'UNI-T',cid:'3',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car03.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car04.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car05.png")},
                    ],
                    [//suv
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car06.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car07.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car08.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car09.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car10.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car11.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car12.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car13.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car14.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car15.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car16.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car17.png")},
                    ],
                    [//MVP
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car18.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car19.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car20.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car21.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car22.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                    ],
                    [//新能源
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
                        {name:'UNI-T',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car01.png")},
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
            }
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
</style>