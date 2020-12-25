<template>
    <div>
        <div class="experience-form">
        <div class="experience-form-title main-title">
            <h2><strong>车价计算器</strong></h2>
            <p>长安为您贴心服务</p>
        </div>
        <div class="price_car">
            <div>
                <div class="cont_item">
                    <div class="cont_left"><span>意向车型：</span></div>
                    <div class="cont_input">
                        <select class="input-wrapper select-text" 
                        data-prompt="经销商" id="carMode">
                            <option value="JC05405A" dealer_id="2010093000861388">常州常悦汽车销售服务有限公司</option>
                            <option value="JC08147A" dealer_id="2018071136769841">常州大道汽车销售服务有限公司</option>
                            <option value="JC12646" dealer_id="2019082244311377">溧阳市耀诚汽车销售服务有限公司</option>
                        </select>
                        <i class="input-wrapper-i"></i>
                    </div>
                </div>
                <div class="cont_item">
                    <div class="cont_left"><span></span></div>
                    <div class="cont_input">
                        <select class="input-wrapper select-text" 
                        data-prompt="经销商" id="carMode">
                            <option value="JC05405A" dealer_id="2010093000861388">常州常悦汽车销售服务有限公司</option>
                            <option value="JC08147A" dealer_id="2018071136769841">常州大道汽车销售服务有限公司</option>
                            <option value="JC12646" dealer_id="2019082244311377">溧阳市耀诚汽车销售服务有限公司</option>
                        </select>
                        <i class="input-wrapper-i"></i>
                    </div>
                </div>
            </div>
            <div class="pc_right">
                <img src="../assets/img/car/car04.png">
                <p>官方指导价：￥97000.00 元</p>
            </div>
        </div>
        <div class="price_count">
            <div class="price_nav">
                <ul>
                    <li class="actived"><a>贷款</a></li>
                    <li><a>全款</a></li>
                </ul>
            </div>
        </div>
        <div class="price_cont">
            <!--全款-->
            <div style="display:none;">
                <div class="pc_shui">
                    <div class="pc_item">
                        <div class="pi_left">首付比例：</div>
                        <div class="pi_cen">
                            <div class="range_line"><div class="range_inline"></div></div>
                            <div class="range_cir"></div>
                        </div>
                        <div class="pi_right">35%</div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">贷款期限：</div>
                        <div class="pi_cen">
                            <button class="but">36个月</button>
                            <button class="but">24个月</button>
                            <button class="but">12个月</button>
                        </div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">购置税：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">购置税：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">车船使用税：</div>
                        <div class="pi_center">3330.84</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">商业险：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">上牌费用：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">交强险：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                </div>
                <ul class="pc_sum">
                     <li class="border-bot">
                        <p>首付款</p>
                        <p>￥34265元</p>
                    </li>
                    <li class="border-bot">
                        <p>贷款</p>
                        <p>￥63265元</p>
                    </li>
                    <li class="border-bot">
                        <p>月供</p>
                        <p>￥34265元</p>
                    </li>
                    <li>
                        <button class="butg">立即购买</button>
                    </li>
                </ul>
            </div>
            <!--贷款-->
            <div style="display:display;">
                <div class="pc_shui">
                    <div class="pc_item">
                        <div class="pi_left">首付比例：</div>
                        <div class="pi_cen">
                            <div class="range_line"><div class="range_inline"></div></div>
                            <div class="range_cir"></div>
                        </div>
                        <div class="pi_right">35%</div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">贷款期限：</div>
                        <div class="pi_cen">
                            <button class="but">36个月</button>
                            <button class="but">24个月</button>
                            <button class="but">12个月</button>
                        </div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">购置税：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">购置税：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">车船使用税：</div>
                        <div class="pi_center">3330.84</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">商业险：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">上牌费用：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                    <div class="pc_item">
                        <div class="pi_left">交强险：</div>
                        <div class="pi_center">3330.82</div>
                        <div class="pi_right"><img src="../assets/img/search-ico.png"></div>
                    </div>
                </div>
                <p class="total">全额购车预计费用：<span class="total_money">￥34265元</span><button class="butg">立即购买</button></p>
            </div>
        </div>
        </div>
        <!--服务-->
        <fuwu/>
    </div>
</template>

<script>
export default {
    name:"CarPrice",
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
    /*price*/
    .price_car {
        margin-top:30px;
        height:140px;
        background:#f5f5f5;
        padding:50px 0;
        display:flex;
        justify-content: space-around;
        text-align: center;
    }
    .price_car>div{
        width:500px;
    }
    .pc_right img{
        height:120px;
    }
    .pc_right p{
        font-size:18px;
        margin-top:10px;
    }
    .cont_item{
        margin-bottom: 10px;
        display:flex;
        justify-content: space-between;
    }
    .cont_left{
        width:40%;
        text-align:right;
        padding-right:10px;
        height:40px;
        line-height: 40px;
        font-size:18px;
        font-weight:bold;
    }
    .cont_input{
        height:30px;
        width:60%;
        padding:5px 8px;
        border:1px solid #ccc;
        border-radius:4px;
        margin-bottom:15px;
        background:#fff;
        position: relative;
    }
    select.input-wrapper {
        border:0;
        height:100%;
        width:100%;
    }
    i,u,b,strong {
        text-decoration:none;
        border:0;
        font-style:normal
    }
    /*下拉选方向箭头*/
    .input-wrapper-i {
        z-index:5;
        width:14px;
        height:8px;
        background:#fff url(../assets/img/ico/ico-arr-down.png) no-repeat 0 0;
        position:absolute;
        right:9px;
        top:16px;
    }
    .price_nav{
        height:80px;
        text-align:center;
        font-size:20px;
        border-bottom:1px solid #ccc;
    }
    .price_nav ul{
        width:600px;
        margin:0 auto;
        display:flex;
        justify-content: space-around;
    }
    .price_nav ul li{
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
    /*价格内容*/
    .price_cont{
        padding:40px 0;
    }
    .pc_shui{
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
    }
    .pc_item{
        width:500px;
        height:40px;
        display:flex;
        margin-bottom:20px;
    }
    .pi_left{
        width:30%;
        text-align:right;
        height:40px;
        line-height: 40px;
        font-size:20px;

    }
    .pi_center{
        width:60%;
        height:40px;
        line-height: 40px;
        border:1px solid #aaa;
        border-radius:4px;
        padding:0 10px;
        box-sizing: border-box;
    }
    .pi_cen{
        width:60%;
        height:40px;
        line-height: 40px;
        position: relative;
    }
    .pi_right{
        height:40px;
        line-height:30px;
        padding-left:20px;
    }
    .pi_right img{
        vertical-align:bottom;

    }
    .but{
        width:70px;
        height:36px;
        border:1xp solid #aaa;
        border-radius: 8px;
        background:#0066c6;
        color:#fff;
        margin:0 6px;
    }
    .range_line{
        width:100%;
        height:2px;
        background:#aaa;
        margin-top:20px;
    }
    .range_cir{
        width:20px;
        height:20px;
        border-radius: 10px;
        background:#ffff;
        box-shadow: 1px 1px 3px 1px #ccc;
        position:absolute;
        top:10px;
        left:35px;
    }
    .range_inline{
        width:35px;
        background:#0066c6;
        height:100%;
    }
    .pc_sum{
        display:flex;
        padding:15px 200px;
        text-align:center;
        justify-content: space-between;
    }
    .pc_sum li{
        width:200px;
        padding:0 10px;
        font-size:16px;
    }
    .border-bot{
        border-bottom:3px solid #ccc;
    }
    .pc_sum li p:last-child{
        font-size:24px;
        color:#0066c6;
        margin:10px;
        font-weight: bolder;
    }
    .butg{
        width:180px;
        height:46px;
        border:2px solid #ccc;
        border-radius: 20px;
        background:#0066c6;
        color:#fff;
        margin:10px 6px;
        font-size:16px;
        box-shadow: -4px -4px 5px 4px #014d94 inset;
    }
    .total{
        text-align: center;
        font-size:16px;
    }
    .total_money{
        font-size:24px;
        color:#0066c6;
        display:inline-block;
        margin-right:100px;
    }
</style>