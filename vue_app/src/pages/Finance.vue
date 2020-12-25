<template>
    <div>
       <div class="experience-form">
            <div class="experience-form-title main-title">
                <h2><strong>金融支持</strong></h2>
                <p>长安为您提供专业金融支持</p>
            </div>
            <div class="finance_cont">
                <div class="finance_item">
                    <div class="fi_left">
                        <div class="fl_top">
                            <p class="fl_title">逸动PLUS</p>
                            <p>官方指导价：￥7.29-10.39万</p>
                        </div>
                        <div>
                            <p class="fl_title">90天0日供，3年零利率</p>
                            <button class="fi_more">探索更多</button>
                            <button class="fi_more">车价计算器</button>
                        </div>
                    </div>
                    <div class="fi_right">
                        <img src="../assets/img/car/car02.png">
                    </div>
                </div>
                <div class="finance_item">
                    <div class="fi_left">
                        <div class="fl_top">
                            <p class="fl_title">逸动PLUS</p>
                            <p>官方指导价：￥7.29-10.39万</p>
                        </div>
                        <div>
                            <p class="fl_title">90天0日供，3年零利率</p>
                            <button class="fi_more">探索更多</button>
                            <button class="fi_more">车价计算器</button>
                        </div>
                    </div>
                    <div class="fi_right">
                        <img src="../assets/img/car/car02.png">
                    </div>
                </div>
                <div class="finance_item">
                    <div class="fi_left">
                        <div class="fl_top">
                            <p class="fl_title">逸动PLUS</p>
                            <p>官方指导价：￥7.29-10.39万</p>
                        </div>
                        <div>
                            <p class="fl_title">90天0日供，3年零利率</p>
                            <button class="fi_more">探索更多</button>
                            <button class="fi_more">车价计算器</button>
                        </div>
                    </div>
                    <div class="fi_right">
                        <img src="../assets/img/car/car02.png">
                    </div>
                </div>
                <div class="finance_item">
                    <div class="fi_left">
                        <div class="fl_top">
                            <p class="fl_title">逸动PLUS</p>
                            <p>官方指导价：￥7.29-10.39万</p>
                        </div>
                        <div>
                            <p class="fl_title">90天0日供，3年零利率</p>
                            <button class="fi_more">探索更多</button>
                            <button class="fi_more">车价计算器</button>
                        </div>
                    </div>
                    <div class="fi_right">
                        <img src="../assets/img/car/car02.png">
                    </div>
                </div>
            </div>
        </div>
        <!--服务-->
        <fuwu/>
    </div>
</template>

<script>
export default {
    name:"Finance",
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    /*金融支持组件*/
    .experience-form {
        border-bottom:1px solid #cbcbcb;
        padding-bottom:50px;
    }
    .experience-form-title {
        padding-top:60px;
        text-align:center;
    }
    /*order 标题*/
    .main-title h2 {
        display:inline-block;
        vertical-align:top;
        font-size:26px;
        color:#333;
        background:url(../assets/img/ico/ico-line.png) no-repeat right center;
        padding-right: 140px;
    }
    .main-title h2 strong {
        display:block;
        font-weight:bold;
        background:url(../assets/img/ico/ico-line.png) no-repeat 0 center;
        padding-left:140px;
    }
    .main-title p {
        font-size:14px;
        color:#666;
        padding-top:8px;
        letter-spacing:6px;
    }
    .finance_cont{
        padding:40px;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    .finance_item{
        width:580px;
        height:210px;
        background:#fbfbfb;
        margin-bottom:20px;
    }
    .fi_left{
        float:left;
        padding:10px 20px;
    }
    .fi_right{
        height:100%;
        float:right;
        width:300px;
        background:url("../assets/img/carblock.png") no-repeat 35px 5px;
        padding-top:30px;
    }
    .fi_right img{
        height:130px;
        text-align:center;
    }
    .fi_left p{
        margin:6px 0;
    }
    .fl_top{
        height:60px;
        border-bottom: 1px solid #ccc;
    }
    .fl_title{
        font-size:18px;
        font-weight: bold;
    }
    .fi_more{
        border:1px solid #0066c9;
        height:26px;
        margin:10px;
        padding:0 10px;
        background:#fbfbfb;
        color:#0066c9;
    }
  </style>