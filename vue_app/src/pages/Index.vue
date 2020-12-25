<template>
    <div>
         <div class="main">
        <!--轮播图-->
        <div class="carousel"  @mouseenter="handStop()" @mouseleave="handGo()">
            <div class="carousel-inner">
                <div v-for="(item,i) of images" :key="i" v-show="curIndex==i">
                    <a :href="item.url" target="_blank"><img :src="item.src"></a>
                </div>
            </div>
            <div class="arr">
                <span class="arr_left" @click="handChange(prev)"></span>
                <span class="arr_right" @click="handChange(next)"></span>
            </div>
            <ul class="direct">
                <li  v-for="(item,i) of images" :key="i" :class="{'dir-ad':i==curIndex}" @click="handChange(i)"></li>
            </ul>
        </div>
        <!--1L-->
        <div class="c">
            <div class="experience-form-title main-title c_top">
                <h2><strong>热门车型</strong></h2>
                <p>打造世界一流汽车企业</p>
            </div>
            <div class="c_bot">
                <div class="c_left" @click="ulNext"></div>
                <div class="c_ul">
                    <ul :style="{width:ulWidth, 'margin-left':move}">
                        <li class="car_list" v-for="(item,i) of suv" :key="i">
                            <img :src="item.imgUrl">
                            <p>{{item.name}}</p>
                            <p class="yuan">￥{{item.priceS}}-{{item.priceL}}万元</p>
                        </li>
                    </ul>
                </div>
                <div class="c_right" @click="ulPrev"></div>
            </div>
            <ul class="inner">
                <li v-for="(item,i) of suv" :key="i" :class="{'ulactived':i==ulCur}"></li>
            </ul>
        </div>
        <!--2L-->
        <fuwu/>
        <!--3L-->
        <div class="new">
            <div class="new-1"><img src="../assets/img/dg-4.jpg"><p>长安动态</p></div>
            <div class="new-2"><img src="../assets/img/dg-5.jpg"><p>大客户业务</p></div>
            <div class="new-3"><img src="../assets/img/dg-6.jpg"><p>小安视讯</p></div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:"Index",
        data(){
            return {
                curIndex:1,
                images:[//轮播图片
                    {url:"/login",src:require("../assets/img/banner01.jpg")},
                    {url:"/login",src:require("../assets/img/banner02.jpg")},
                    {url:"/login",src:require("../assets/img/banner03.jpg")},
                    {url:"/login",src:require("../assets/img/banner04.jpg")}
                ],
                timer:"",
                suv:[//suv
                    {name:'UNI-T1',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car06.png")},
                    {name:'UNI-T2',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car07.png")},
                    {name:'UNI-T3',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car08.png")},
                    {name:'UNI-T4',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car09.png")},
                    {name:'UNI-T5',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car10.png")},
                    {name:'UNI-T6',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car11.png")},
                    {name:'UNI-T7',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car12.png")},
                    {name:'UNI-T8',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car13.png")},
                    {name:'UNI-T9',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car14.png")},
                    {name:'UNI-T10',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car15.png")},
                    {name:'UNI-T11',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car16.png")},
                    {name:'UNI-T12',cid:'1',priceL:13.39,priceS:11.39,imgUrl:require("../assets/img/car/car17.png")},
                ],
                ulCur:1

            }
        },
        methods:{
            //轮播图自动播放
            handGo(){
                this.timer=setInterval(()=>{
                    this.curIndex++;
                    if(this.curIndex>this.images.length-1){
                        this.curIndex=0;
                    }
                },1000)
            },
            //轮播图播放停止
            handStop(){
                clearInterval(this.timer);
                this.tiemr=null;
            },
            //改变当前轮播图
            handChange(i){
                this.curIndex=i;
            },
            //改变热门车型轮播
            ulPrev(){
                if(this.ulCur<this.suv.length-1){
                    this.ulCur++;
                }else{
                    this.ulCur=0;
                }
            },
            ulNext(){
                if(this.ulCur>0){
                    this.ulCur--;
                }else{
                    this.ulCur=this.suv.length-1;
                }
            },
            //加载商品信息
            loadcar(){
                this.axios.get(
                    '/user/car',
                    {}
                ).then(result=>{
                    console.log(result.data)
                })
            }
        },
        computed:{
            //轮播图左移动
            prev(){
                if(this.curIndex==0){
                    return this.images.length-1;
                }else{
                    return this.curIndex-1;
                }
            },
            //轮播图右移动
            next(){
                if(this.curIndex==this.images.length-1){
                    return 0;
                }else{
                    return this.curIndex+1;
                }
            },
            ulWidth(){
                return this.suv.length*320+"px"
            },
            move(){
                return -this.ulCur*320+"px"
            }
        },
        //组件生命周期挂载
        mounted(){
            this.handGo();
        }
    }
</script>

<style scoped>
/*轮播图指示器被选中 */
.dir-ad{
    background:#fff;
}
.ulactived{
    background:rgb(54, 35, 223);
}
</style>