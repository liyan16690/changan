<template>
    <div>
        <div class="news_cont">
            <div @mouseenter="showImg()" @mouseleave="hiddenImg()" class="news_cont_bg">
                <canvas v-show="showOn" id="c3" width="1100" height="500"></canvas>
                <video controls loop  preload="metadata" class="kv" id="v3">
                    <source src="../assets/img/kv.mp4">
                        浏览器版本太低请升级
                </video>
                <div v-show="showImage" id="ctrl" @click="videoPlay()"><img :src="imgSrc?require('../assets/img/play.png'):require('../assets/img/pause.png')"></div>
            </div>
            <div class="video_control">
                <div class="controls_left">
                    <div>
                        <img src="../assets/img/zan.svg">
                        <span>172</span>
                    </div>
                    <div>
                        <img src="../assets/img/msg.svg">
                        <span>336</span>
                    </div>
                    <div>
                        <img src="../assets/img/play.svg">
                        <span>123</span>
                    </div>
                </div>
                <div class="controls_right">
                    <div class="danmu_on" @click="showDanmu()">
                        <div class="danmu_on_cir" :class="{'danmu_on_actived':!showOn}">弹</div>
                    </div>
                    <div class="danmu">
                        <input type="text" placeholder="发条弹幕，让世界充满爱" id="inputMsg">
                        <button id="inputBtn">发射</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="news_ping clear_both">
            <div class="news_title">评论 <span> (668)</span></div>
            <div class="news_add">
                <textarea id="text"></textarea>
                <div class="add_cont">
                    <div class="add_left">
                        <img src="../assets/img/pinglun.svg">
                        <div><input type="text" id="add_title" placeholder="请输入标题"></div>
                        <img src="../assets/img/tupian.svg">
                    </div>
                    <div class="add_right">
                        <span>{{sum}}/300</span>
                        <button @click="showDate()">发布</button>
                    </div>
                </div>
            </div>
            <div class="news_title2"><div>最新</div><div>最热</div></div>
            <div>
                <div class="news_item clear_both">
                    <div class="item_img">
                        <img src="../assets/img/tupian.svg">
                    </div>
                    <div class="item_right">
                        <p class="item_name">芒果评论君</p>
                        <p class="item_title">长安行天下，明天更美好</p>
                        <div class="item_cont">
                            互帮共助，有问有答！长安百科里可有你活跃的足迹？你是别人眼中的知识大咖吗？欢迎车圈百科达人前来挑战。活动期间，登录长安FAN进入长安百科，参与寻宝互动，即可有机会赢取1000长安积分！活动具体参与规则详见长图海报~
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"News",
    data(){
        return{
           showImage:0,
           showOn:1,
           imgSrc:1,
           sum:0
        }
    },
    methods:{
        //1.2:移入显示  移出隐藏
        showImg(){this.showImage=1;},
        hiddenImg(){this.showImage=0;},
        //注意:调低音量
        videoVolume(){
            var v3=document.getElementById("v3");
            v3.volume=0.3
        },
        //2.1:获取按钮元素并且为其绑定点击事件
        videoPlay(){
            var v3=document.getElementById("v3");
            //2.2:阻止事件默认行为 a image submit button
           // e.preventDefault();
            console.log(1);
            //2.3:播放视频并且切换图片
            if(v3.paused){
                v3.play();
                this.imgSrc=0
            }else{
                v3.pause();
                this.imgSrc=1
            }
        },
        //弹幕是否显示
        showDanmu(){
            if(this.showOn){
                this.showOn=0;
            }else{
                this.showOn=1;
            }
        },//弹幕程序
        show(){
            //创建全局变量
            var c3;
            var ctx;
            var canWidth;
            var canHeight;
            var inputMsg;
            var inputBtn;
            var msg;
            //定义构造函数
            var msgObj = function(){
                this.m = [];    //1.1:弹幕中显示文字
                this.x = [];    //1.2:弹幕坐标x
                this.y = [];    //1.3:弹幕坐标y
                this.spd = [];  //1.4:弹幕移动速度
                this.font = []; //1.5:弹幕文字大小
                this.color = [];//1.6:弹幕中文字颜色
                //1.7:弹幕状态 true 显示 false 隐藏
                this.alive = [];
            }
            msgObj.prototype.num = 100; // 弹幕数量
            //2:为构造函数添加方法init  为弹幕数据初始赋值
            msgObj.prototype.init = function(){
                //2.1:创建循环遍历数组中元素
                for(var i=0;i<this.num;i++){
                //2.2:初始化x 在画布最侧 856 !!!
                this.x[i] = canWidth;
                //2.3:初始化y 临时100  11:40
                this.y[i] = 0;
                //2.4:初始化m  临时 ""
                this.m[i] = "";
                //2.5:初始化font 12px
                this.font[i] = "12px";
                //2.6:初始化color #000
                this.color[i] = "#000";
                //2.7:初始化spd   3
                this.spd[i] = 3;
                //2.8:初始化alive 临时true 后面false
                this.alive[i] = false;
                }//for end
            }
            //3:为构造函数添加方法draw  将数据绘制网页中
            msgObj.prototype.draw = function(){
                //3.0:清除画布 
                ctx.clearRect(0,0,canWidth,canHeight);
                //3.1:创建循环遍历所有弹幕
                for(var i=0;i<this.num;i++){
                    //3.2:判断alive==true 绘制
                    if(this.alive[i]){
                        //3.3:获取当前弹幕内容 m
                        var m = this.m[i];
                        //3.4:获取当前弹幕颜色
                        var c = this.color[i];
                        //3.5:获取当前弹幕文字大小
                        var f = this.font[i];
                        //3.6:获取当前弹幕速度 3
                        var spd = this.spd[i];
                        //3.7:修改当前弹幕 x -= 3
                        this.x[i]-=spd;
                        //3.8:修改当前弹幕文字大小
                        ctx.font = f +" SimHei";
                        //3.9:修改当前弹幕颜色
                        ctx.fillStyle = c;
                        //3.10:绘制实心文字
                        ctx.fillText(m,this.x[i],this.y[i]);
                        //3.11:判断弹幕中文字是否移动出屏幕
                        if(this.x[i]<0){//???
                        //3.12:修改状态false
                        this.alive[i] = false;
                        //3.13:修改x:等待一次使用
                        this.x[i] = canWidth;
                        }
                    }//end if alive 
                }
            }
            //index.html 用户输入内容,如果用户点击发送按钮
            //将文字/颜色/文字
            //将内容显示画布
            //接收三个数据(文字/颜色/大小) 
            //m = {m:"666",color:"red",font:"22px"}
            //4:为构造函数添加方法add   
            //将新弹幕添加弹幕池中  100 false
            msgObj.prototype.add = function(m){
            //功能:挑选一个状态为false弹幕,将文字内容
            //     大小,颜色赋值
            //    挑选从头开始按顺序找到第一个false元素
            //    将他它true 
            //1:创建循环遍历数组元素
                for(var i=0;i<this.num;i++){
                    //2:查找到第一个为false元素
                    if(this.alive[i]==false){  //隐藏
                    //3:将修改状态 true
                    this.alive[i] = true;
                    //4:分配文字大小
                    this.font[i] ='20px';
                    //5:分配文字颜色
                    this.color[i] ='#fff'; 
                    //6:生新分配y
                    this.y[i] = Math.random() * canHeight;
                    //7:分配随机速度
                    this.spd[i] = 1 + Math.random()*3;
                    //8:分配显示文字
                    this.m[i] = m.msg; 
                    //9:return 一次挑一个
                    return;
                    }//if end
                }//for end
            }
            //5:创建函数获取用户输入内容并发送弹幕池
            function handleMsg(){
                //5.1:获取用户输入内容 颜色 大小 内容
                //  转换js对象
                var m = {
                    msg:inputMsg.value,   //用户输入内容
                }    
                //5.2:调用 msg.add
                msg.add(m)
            }
            //定义初始化函数
            function init(){
                c3=document.getElementById('c3');
                //2.3:初始化画布与画笔对象  14:55
                c3 = document.getElementById("c3");
                ctx = c3.getContext("2d");
                //2.4:初始化画布宽度和高度
                canWidth = c3.width;
                canHeight = c3.height;
                //2.5:将用户输入框按钮赋值 11:14
                inputMsg = document.getElementById("inputMsg");
                inputBtn = document.getElementById("inputBtn");
                msg = new msgObj();
                //2.2:调用弹幕对象初始化方法 
                msg.init();
                //2.5:main.js 为发送按钮绑定点击事件
                inputBtn.addEventListener("click",handleMsg)
            }
            function gameloop(){
                //3.1:创建智能定时器
                requestAnimationFrame(gameloop);
                //3.2:调用弹幕对象绘制方法
                msg.draw();
            }
            init();
            gameloop();
        },
        //worker线程
            /*showDate(){
                var w=new Worker('../assets/js/sum.js')
                var text=document.getElementById('text').value;
                console.log(text,typeof(text));
                w.postMessage(text);
                w.onmessage=function(event){
                    this.sum=event.data;
                }
            }*/
        //socket.io对象
   

    },
    mounted(){
        this.show();
    }  
}
</script>
<style scoped>
    /*公共样式*/
	body,ul,ol,h1,h2,h3,h4,h5,h6,p,input,button{
		padding:0;
		margin:0;
	}
	body {
        background:#2a2a3a;
        color:#fff;
		min-width:1200px;
		font-family:"Micosoft YaHei";
		font-size:14px;
		line-height:24px;
	}
	ul,ol {
		list-style:none;
	}
	input,button {
		font-family:"Micosoft YaHei";
	}
	a {
		text-decoration:none;
		color:#333;
	}
	a:hover {
		text-decoration:none;
		cursor:hand;
	}
    /*news*/
    .news_cont{
        background:#2a2a3a;
        text-align:center;
    }
    .news_cont_bg{
        height:500px;
        width:1100px;
        background:#000;
        margin:0 auto;
        padding-top:20px;
        position:relative;
    }
    #c3{
       position: absolute;/*画布元素绝对定位*/
       left:0px;
       top:0px;
       z-index:1;
       height:450px;
       width:100%;
       
       
    }
    .kv{
        position:absolute;
        height:100%;
        width:100%;
        left:0;
        z-index:0;
    }
    #ctrl{
        position:absolute;
        left:50%;
        top:50%;
        margin-top:-50px;
        margin-left:-50px;
        z-index:1
    }
    #ctrl img {
        width:100px;
        height:100px;
    }
    .video_control{
        height:90px;
        width:1000px;
        margin:0 auto;
        background:#1a1a21;
        padding:0 50px;
    }
    .controls_left{
        width:300px;
        float:left;
        display:flex;
    }
    .controls_left div{
        width:100px;
        height:90px;
        line-height:90px;
        font-size:20px;
        color:#bebec1;
    }
    .controls_left div img{
        height:20px;
        vertical-align:center;
    }
    .controls_right{
        float:right;
        width:540px;
        padding:20px 0;
    }
    .danmu_on{
        float:left;
        width:60px;
        height:30px;
        margin:10px 0 ;
        background:hsl(34, 92%, 47%);
        border-radius: 15px;
        position:relative;

    }
    .danmu{
        float:right;
        width:420px;
        background:#32323d;
        height:50px;
        border-radius:25px;
        overflow: hidden;
    }
    .danmu_on_cir{
        background:#fff;
        width:30px;
        height:30px;
        border-radius:15px;
        color:hsl(34, 92%, 47%);
        text-align:center;
        line-height:30px;
        font-size:20px;
        position:absolute;
        left:0;
    }
    .danmu_on_actived{
        left:30px;
        content:"关"
    }
    .danmu input{
        border:0;
        width:300px;
        color:#757575;
        background:#32323d;
        height:50px;
        line-height: 50px;
        font-size:16px;
        padding-left:20px;
    }
    .danmu button{
        width:94px;
        height:50px;
        background:#5b5b63;
        border-bottom-left-radius:30px;
        border:0;
        font-size:16px;
        color:#bebec1;
    }
    /*新闻评论*/
    .news_ping{
        background:#2a2a3a;
        color:#fff;
    }
    .news_title,.news_title2{
        height:60px;
        width:1100px;
        font-size:30px;
        font-weight: 800;
        margin:0 auto;
        line-height:60px;
    }
    .news_title span{
        font-weight: 400;
        font-size:24px;
    }
    .news_add{
        width:1100px;
        border:2px solid #535361;
        border-radius: 8px;
        height:160px;
        box-shadow: 2px 2px 4px 1px #535361;
        margin:0 auto;
        position: relative;
        overflow:hidden;
        background-color: #31313e;
    }
    .add_cont{
        position:absolute;
        bottom:10px;
        left:0;
        padding:0 40px;
        width:1020px;
    }
    .add_left{
        float:left;
        width:500px;
        height:36px;
    }
    .add_right{
        float:right;
        width:200px;
        position: relative;
    }
    #text{
        width:100%;
        height:90px;
        border:0;
        color:#fff;
        font-size:20px;
        padding:10px 20px;
        background-color: #31313e;
    }
    .add_left img{
        height:100%;
    }
    .add_left div{
        width:300px;
        height:34px;
        background:#ccc;
        border-radius: 13px;
        overflow:hidden;
        display:inline-block;
        margin:0 10px;

    }
    .add_left div input{
        border:0;
        width:100%;
        border-radius: 13px;
        height:34px;
        line-height: 34px;
        font-size:18px;
        padding:4px 20px;
        background:#ddd;
        box-sizing: border-box;
    }
    .add_right button{
        height:36px;
        width:110px;
        background:hsl(34, 92%, 47%);
        border-top-left-radius:30px;
        border-top-right-radius: 18px;
        border-bottom-right-radius: 18px;
        box-shadow:1px 2px 3px 1px #ddd;
        border:0;
        color:#fff;
        font-size:18px;
        margin-left:40px;
    }
    .news_title2 div{
        display: inline-block;
        padding:0 20px;
        border-bottom:1px solid #333;
    }
    .news_title2{
        font-weight:600px;
    }
    .news_item{
        width:1060px;
        margin:20px auto;
        border:1px solid #666;
        border-radius: 10px;
        padding:20px;
    }
    .clear_both:after{
        content:"";
        display:block;
        clear:both;
    }
    .item_img{
        float:left;
        width:50px;
        height:50px;
        border-radius: 50%;
        margin-right:30px;
        overflow: hidden;
    }
    .item_img{
        width:30px;
    }
    .item_right{
        float:left;
        width:980px;
        height:100%;
        margin-bottom:10px;
    }
    .item_title{
        font-size:16px;
        color:hsl(34, 92%, 47%);
        font-weight: 600;
        padding-bottom: 5px;
    }
    .item_name{
        font-size:22px;
        font-weight:500px;
        padding-bottom: 10px;
    }
    .item_cont{
        font-size:14px;
    }
  </style>