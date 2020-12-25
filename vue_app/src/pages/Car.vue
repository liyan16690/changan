<template>
    <div>
        <div class="main">
            <!--轮播图-->
            <div class="carousel">
                <div class="carousel-inner">
                    <div class="carP1"></div>
                    <div class="carP2"></div>
                </div>
            </div>
            <!--导航-->
            <div class="nav-series" id="nav" :class="{'nav-fixed':navFixed}">
                <div class="wrap clearfix">
                    <div class="car-title">{{title}}</div>
                    <div class="price_top">
                        <p>官方指导价{{price_min}}万起</p>
                    </div>
                    <div class="yuyuetiyan">
                        <img src="../assets/img/nav_img.png" alt="">
                        <a href="#" class="ty">
                            <img class="cir" src="../assets/img/navbg2.png">
                            <span>预约体验</span>
                        </a>
                    </div>
                    <ul>
                        <li><a :class="{'actived':actived==1}" href="#peizhi">概览</a></li>
                        <li><a :class="{'actived':actived==2}" href="#sheji">设计</a></li>
                        <li><a :class="{'actived':actived==3}" href="#zhihui">智慧</a></li>
                        <li><a :class="{'actived':actived==4}" href="#dongli">动力</a></li>
                        <li><a :class="{'actived':actived==5}" href="#anquan">安全</a></li>
                        <li><a :class="{'actived':actived==6}" href="#canshu">配置参数</a></li>
                        <li><a :class="{'actived':actived==7}" href="#jianshang">精彩鉴赏</a></li>
                    </ul>
                </div>
            </div>
            <!--概览-->
            <div class="trans_top" id="peizhi"></div>
            <div class="peizhi">
                <div class="pz-con">
                    <div class="pz-title"><strong>配置概览</strong>
                        <div><a href="#" target="_blank">3D数字展厅 <img src="../assets/img/ico/ico-arr-more.png"></a></div>
                    </div>
                    <a  id="peizhi"></a>
                    <div class="pz-content clearfix">
                        <div class="pz-left">
                            <div class="canshu1">
                                <ul>
                                    <li>
                                        <p>{{engine}}T</p>
                                        <p>蓝鲸NE1.5T<br>高压直喷发动机</p>
                                    </li>
                                    <li>
                                        <p>{{lay}}速</p>
                                        <p>蓝鲸7速湿式双离合变速器</p>
                                    </li>
                                    <li>
                                        <p>{{nj}}</p>
                                        <p>发动机最大扭矩<br>（N.m/rpm)</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <p>{{gl}}KW</p>
                                        <p>发动机最大功率<br>（KW/rpm)</p>
                                    </li>
                                    <li>
                                        <p>{{rxl}}%</p>
                                        <p>最高热效率</p>
                                    </li>
                                    <li>
                                        <p>国六B</p>
                                        <p>排放标准</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="canshu2">
                                <ul>
                                    <li>长度 <span>4515mm</span></li>
                                    <li>宽度 <span>1870mm</span></li>
                                    <li>高度 <span>1565mm</span></li>
                                    <li>轴距 <span>2710mm</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="pz-right">
                            <div class="show-car">
                                <div v-show="color==0"><img src="../assets/img/color/car-c1.png"></div>
                                <div v-show="color==1"><img src="../assets/img/color/car-c2.png"></div>
                                <div v-show="color==2"><img src="../assets/img/color/car-c3.png"></div>
                                <div v-show="color==3"><img src="../assets/img/color/car-c4.png"></div>
                                <div v-show="color==4"><img src="../assets/img/color/car-c5.png"></div>
                                <div v-show="color==5"><img src="../assets/img/color/car-c6.png"></div>
                            </div>
                            <div class="show-color">
                                <ul>
                                    <li :class="{'active':color==0}" @click="changeColor(0)">
                                        <img src="../assets/img/color/color01.png">
                                        <p>星际灰</p>
                                    </li>
                                    <li :class="{'active':color==1}" @click="changeColor(1)">
                                        <img src="../assets/img/color/color02.png">
                                        <p>钻石黑</p>
                                    </li>
                                    <li :class="{'active':color==2}" @click="changeColor(2)">
                                        <img src="../assets/img/color/color03.png">
                                        <p>星辰白</p>
                                    </li>
                                    <li :class="{'active':color==3}" @click="changeColor(3)">
                                        <img src="../assets/img/color/color04.png">
                                        <p>原子灰</p>
                                    </li>
                                    <li :class="{'active':color==4}" @click="changeColor(4)">
                                        <img src="../assets/img/color/color05.png">
                                        <p>时空蓝</p>
                                    </li>
                                    <li :class="{'active':color==5}" @click="changeColor(5)">
                                        <img src="../assets/img/color/color06.png">
                                        <p>星云红</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--服务-->
            <fuwu/>
            <!--设计-->
            <div class="trans_top" id="sheji"></div>
            <div class="sheji">
                <img src="../assets/img/bg1.jpg">
                <div class="left-font">
                    <h2><span class="big-title">型格引力</span>&nbsp;&nbsp;|&nbsp;&nbsp;自有，全新美学</h2>
                    <h3>灵感肆放，让常规成为陈规；独特姿态，令远见成为眼见。</h3>
                    <h3>UNI-T，引人注目的无边界设计语言，</h3>
                    <h3>世界，亦是你的舞台。</h3>
                    <h4></h4>
                    <ul>
                        <li>无边界前格栅 参数化设计，释放无限引力</li>
                        <li>分体式LED前大灯 洞穿黑夜的深邃目光</li>
                        <li>“纯粹曲面”车身设计 以光影雕塑动感之姿</li>
                        <li>隐藏式门把手 近身感应自动迎宾，专属于你的仪式感</li>
                    </ul>
                    <div class="more"><a href="">探索更多 <img src="../assets/img/ico/ico-arr-more.png"></a></div>
                </div>
            </div>
            <!--智慧-->
            <div class="trans_top" id="zhihui"></div>
            <div class="sheji">
                <img src="../assets/img/bg2.jpg">
                <div class="right-font">
                    <h2><span class="big-title">型格引力</span>&nbsp;&nbsp;|&nbsp;&nbsp;自有，全新美学</h2>
                    <h3>灵感肆放，让常规成为陈规；独特姿态，令远见成为眼见。</h3>
                    <h3>UNI-T，引人注目的无边界设计语言，</h3>
                    <h3>世界，亦是你的舞台。</h3>
                    <h4></h4>
                    <ul>
                        <li>无边界前格栅 参数化设计，释放无限引力</li>
                        <li>分体式LED前大灯 洞穿黑夜的深邃目光</li>
                        <li>“纯粹曲面”车身设计 以光影雕塑动感之姿</li>
                        <li>隐藏式门把手 近身感应自动迎宾，专属于你的仪式感</li>
                    </ul>
                    <div class="more"><a href="">探索更多 <img src="../assets/img/ico/ico-arr-more.png"></a></div>
                </div>
            </div>
            <!--动力-->
            <div class="trans_top" id="dongli"></div>
            <div class="sheji">
                <img src="../assets/img/bg3.jpg">
                <div class="left-font">
                    <h2><span class="big-title">型格引力</span>&nbsp;&nbsp;|&nbsp;&nbsp;自有，全新美学</h2>
                    <h3>灵感肆放，让常规成为陈规；独特姿态，令远见成为眼见。</h3>
                    <h3>UNI-T，引人注目的无边界设计语言，</h3>
                    <h3>世界，亦是你的舞台。</h3>
                    <h4></h4>
                    <ul>
                        <li>无边界前格栅 参数化设计，释放无限引力</li>
                        <li>分体式LED前大灯 洞穿黑夜的深邃目光</li>
                        <li>“纯粹曲面”车身设计 以光影雕塑动感之姿</li>
                        <li>隐藏式门把手 近身感应自动迎宾，专属于你的仪式感</li>
                    </ul>
                    <div class="more"><a href="">探索更多 <img src="../assets/img/ico/ico-arr-more.png"></a></div>
                </div>
            </div>
            <!--安全-->
            <div class="trans_top" id="anquan"></div>
            <div class="sheji">
                <img src="../assets/img/bg4.jpg">
                <div class="right-font">
                    <h2><span class="big-title">型格引力</span>&nbsp;&nbsp;|&nbsp;&nbsp;自有，全新美学</h2>
                    <h3>灵感肆放，让常规成为陈规；独特姿态，令远见成为眼见。</h3>
                    <h3>UNI-T，引人注目的无边界设计语言，</h3>
                    <h3>世界，亦是你的舞台。</h3>
                    <h4></h4>
                    <ul>
                        <li>无边界前格栅 参数化设计，释放无限引力</li>
                        <li>分体式LED前大灯 洞穿黑夜的深邃目光</li>
                        <li>“纯粹曲面”车身设计 以光影雕塑动感之姿</li>
                        <li>隐藏式门把手 近身感应自动迎宾，专属于你的仪式感</li>
                    </ul>
                    <div class="more"><a href="">探索更多 <img src="../assets/img/ico/ico-arr-more.png"></a></div>
                </div>
            </div>
            <!--配置价格对比-->
            <div class="trans_top" id="canshu"></div>
            <div class="price" >
                <div class="p-con">
                    <div class="p-til">配置参数</div>
                    <div class="p-bottom">
                        <div class="p-content">
                            <h2>旗舰型</h2>
                            <h2>官方指导价：<span>13.39万元</span></h2>
                            <ul>
                                <li>手机无线充电</li>
                                <li>等离子空气净化</li>
                                <li>遥控发动机启动</li>
                                <li>APA 5.0 遥控代客泊车系统</li>
                                <li>IACC全速智能巡航系统</li>
                            </ul>
                            <div class="yuyue">预约体验<img src="../assets/img/ico/ico-arr-down.png"></div>
                            <div class="detail">了解详细配置<img src="../assets/img/ico/ico-arr-down.png"></div>
                        </div>
                        <div class="p-content">
                            <h2>旗舰型</h2>
                            <h2>官方指导价：<span>13.39万元</span></h2>
                            <ul>
                                <li>手机无线充电</li>
                                <li>等离子空气净化</li>
                                <li>遥控发动机启动</li>
                                <li>APA 5.0 遥控代客泊车系统</li>
                                <li>IACC全速智能巡航系统</li>
                            </ul>
                            <div class="yuyue">预约体验<img src="../assets/img/ico/ico-arr-down.png"></div>
                            <div class="detail">了解详细配置<img src="../assets/img/ico/ico-arr-down.png"></div>
                        </div>
                        <div class="p-content">
                            <h2>旗舰型</h2>
                            <h2>官方指导价：<span>13.39万元</span></h2>
                            <ul>
                                <li>手机无线充电</li>
                                <li>等离子空气净化</li>
                                <li>遥控发动机启动</li>
                                <li>APA 5.0 遥控代客泊车系统</li>
                                <li>IACC全速智能巡航系统</li>
                            </ul>
                            <div class="yuyue">预约体验<img src="../assets/img/ico/ico-arr-down.png"></div>
                            <div class="detail">了解详细配置<img src="../assets/img/ico/ico-arr-down.png"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--地图-->
            <div class="service">
                <div class="s-title">附近经销商</div>
                <div class="s-line"></div>
                <div class="s-map" id="allmap"></div>
                <div id="r-result">
                    <div>北京市</div>
                </div>
            </div>
            <!--预约体验-->
            <div class="tiyansubmit">
                <div class="ty-title">预约体验</div>
                <div class="s-line"></div>
                <div class="tijiao">
                    <p>欢迎你在线申请预约驾驶，请在下方填写您的联系方式</p>
                    <input type="text" placeholder="姓名">
                    <input type="phone" placeholder="手机号">
                    <select>
                        <option>北京市</option>
                        <option>河北省</option>
                        <option>天津市</option>
                        <option>陕西省</option>
                        <option>江苏省</option>
                    </select>
                    <select>
                        <option>北京市</option>
                        <option>河北省</option>
                        <option>天津市</option>
                        <option>陕西省</option>
                        <option>江苏省</option>
                    </select>
                    <input type="text" placeholder="请选择经销商">
                    <div class="yuedu"><div class="my-radio"></div>我已阅读并同意<a href="#">《隐私政策》</a></div>
                    <div class="tj-sub">确定提交</div>
                </div>
            </div>
            <!--精彩鉴赏-->
            <div class="trans_top" id="jianshang"></div>
            <div class="jingcai">
                <div class="jc-bg">
                    <div class="ty-title">精彩鉴赏</div>
                    <div class="s-line"></div>
                    <div class="jc-tu">
                        <div class="jc-l"><img src="../assets/img/tu1.jpg"></div>
                        <div class="jc-r"><img src="../assets/img/tu2.jpg"></div>
                    </div>
                </div>
            </div>
            <!--返回顶部-->
            <div class="back">
                <div class="b-share"></div>
                <div class="b-kefu"></div>
                <div class="b-top"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Car",
        data(){
            return {
                navFixed:0,
                actived:0,
                color:0,
                engine:"", //发动机
                family_id:"",
                price_max:"", //高价格
                price_min:"", //低价格
                title:"" ,  //主标题
                lay:"", //变速器
                nj:"",  //扭矩
                gl:"", //功率
                rxl:"" //热效率
            }
        },
        props:['lid'],
        methods:{
            //滚动页面，导航条吸顶效果
            handleScroll(){
                let scrollTop=window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                if(scrollTop<640){
                    this.navFixed=0;
                }else if(scrollTop<1100){
                    this.navFixed=1;
                    this.actived=1;
                }else if(scrollTop<1600){
                    this.navFixed=1;
                    this.actived=2;
                }else if(scrollTop<2100){
                    this.navFixed=1;
                    this.actived=3;
                }else if(scrollTop<2700){
                    this.navFixed=1;
                    this.actived=4;
                }else if(scrollTop<3300){
                    this.navFixed=1;
                    this.actived=5;
                }else if(scrollTop<4000){
                    this.navFixed=1;
                    this.actived=6;
                }else if(scrollTop<5100){
                    this.navFixed=1;
                    this.actived=0;
                }else if(scrollTop<5600){
                    this.navFixed=1;
                    this.actived=7;
                }
            },
            getcarDetail(){
                this.axios.get(
                    "user/detail",
                    {
                        params:{
                            cid:this.lid
                        }
                    }
                ).then(result=>{
                    console.log(result)
                    if(result.data.code==200){
                        this.engine=result.data.data.engine
                        this.family_id=result.data.data.family_id
                        this.lay=result.data.data.lay
                        this.price_max=result.data.data.price_max
                        this.price_min=result.data.data.price_min
                        this.title=result.data.data.title
                        this.nj=result.data.data.nj  //扭矩
                        this.gl=result.data.data.gl//功率
                        this.rxl=result.data.data.rxl //热效率
                    }else{
                        alert("请求失败")
                    }
                })
            },
            changeColor(n){
                this.color=n;
                this.addNum();
            },
            addNum(){
                var time=1000;

                var lay=this.lay
                var lay_time=time/(this.lay/1);
                var lay_num=0;
                var t_lay=setInterval(()=>{
                    lay_num++;
                    this.lay=lay_num
                    if(lay_num==lay){
                         clearInterval(t_lay)
                    }
                },lay_time)

                var nj=this.nj
                var nj_time=time/(this.nj/1);
                var nj_num=0;
                var t_nj=setInterval(()=>{
                    nj_num++;
                    this.nj=nj_num
                    if(nj_num==nj){
                         clearInterval(t_nj)
                    }
                },nj_time)

                var gl=this.gl
                var gl_time=time/(this.gl/1);
                var gl_num=0;
                var t_gl=setInterval(()=>{
                    gl_num++;
                    this.gl=gl_num
                    if(gl_num==gl){
                         clearInterval(t_gl)
                    }
                },gl_time)

                var rxl=this.rxl
                var rxl_time=time/(this.rxl/1);
                var rxl_num=0;
                var t_rxl=setInterval(()=>{
                    rxl_num++;
                    this.rxl=rxl_num
                    if(rxl_num==rxl){
                         clearInterval(t_rxl)
                    }
                },rxl_time)

                var engine=this.engine
                var engine_time=time/(this.engine*10);
                var engine_num=0;
                var t_engine=setInterval(()=>{
                    engine_num+=0.1;
                    this.engine=Number(engine_num).toFixed(1)
                    if(engine_num>engine){
                         clearInterval(t_engine)
                    }
                },engine_time)
            }
        },
        watch:{
            lid(){
                this.getcarDetail();
            }
        },
        computed:{},
        mounted(){
            //当这个组件对象创建后，自动执行！
            this.getcarDetail();
            //当这个组件对象创建后,添加滚动事件监听
            window.addEventListener("scroll",this.handleScroll)
        },
        beforeDestroy(){
            //组件销毁前，移除事件
            window.removeEventListener("scroll",this.handleScroll)
        }

    }
</script>

<style scoped>
.trans_top{
    position: relative;
    top:-130px;
}
.actived{
    font-weight: bolder;
    font-size:16px;
    color:#0066c6;
}
.cir{
    transition:all 2s;
}
</style>