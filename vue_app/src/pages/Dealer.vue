<template>
    <div>
         <div class="dealer-title main-title">
            <h2><strong>经销商查询</strong></h2>
        </div>
        <div class="container">
            <div class="from-service">
                <div id="allmap"></div>
            </div>
            <div class="search_dealer" data-num="1">
                <div class="layout1">
                    <span class="fl now_city">全国</span>
                    <b class="fl">回到我的当前城市</b>
                    <b class="fr">更改城市</b>
                </div>
                <div class="layout2">
                    <div class="searchText">
                        <select class="search-input innput-wrapper" id="setCar">
                            <option value="64">锐程CC蓝鲸版</option>
                            <option value="63">CS55PLUS蓝鲸版</option>
                            <option value="61">UNI-T</option>
                            <option value="59">逸动PLUS</option>
                        </select>
                        <img class="search_icon" src="/html/images/ico-arr-down-blue.png" alt="">
                    </div>
                    <div class="layout3">
                        "为您找到"<span>8</span>"家经销商"
                    </div>
                    <div class="layout4">
                        <span>列表</span>
                    </div>
                    <div class="layout5">
                        <ul class="fuceng2">
    
                        </ul>
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
    name:"Dealer",
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
    /*order.html*/
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
    .dealer-title {
        text-align:center;
        padding:50px;
    }
    .container {
        position:relative;
    }
    /*地图*/
    .from-service  div{
        height:600px;
        background:#909090;
    }
    /*地图控件*/
    .search_dealer {
        color:#333;
        position:absolute;
        top:40px;
        left:100px;
        height:400px;
        width:400px;
        background:#fff;
        box-shadow:0 0 10px #898989;
    }
     </style>