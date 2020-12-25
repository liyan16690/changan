<template>
    <div>
        <ul class="fw">
            <li @mouseover="change(1)" @mouseleave="change(0)">
                <router-link to="/carprice">
                    <img src="../assets/img/ico/ico-kefu-h.png" alt="">
                    <img v-show="actived==1" class="seconde-img" src="../assets/img/ico/ico-kefu-l.png" alt="">
                    <h3 :class="{'actived':actived==1}">车价计算器</h3>
                    <p>让您轻松预估费用</p>
                </router-link>
            </li>
            <li @mouseover="change(2)" @mouseleave="change(0)">
                <router-link to="/order">
                    <img src="../assets/img/ico/ico-fxp-h.png" alt="">
                    <img v-show="actived==2" class="seconde-img" src="../assets/img/ico/ico-fxp-l.png" alt="">
                    <h3 :class="{'actived':actived==2}">预约体验</h3>
                    <p>试驾您中意的车型</p>
                </router-link>
            </li>
            <li  @mouseover="change(3)" @mouseleave="change(0)">
                <router-link to="/dealer">
                    <img src="../assets/img/ico/ico-dibiao-h.png" alt="">
                    <img v-show="actived==3" class="seconde-img" src="../assets/img/ico/ico-dibiao-l.png" alt="">
                    <h3 :class="{'actived':actived==3}">经销商查询</h3>
                    <p>选择您最近的店面</p>
                </router-link>
            </li>
            <li @mouseover="change(4)" @mouseleave="change(0)">
                <router-link to="/finance">
                    <img src="../assets/img/ico/ico-jinrong-h.png" alt="">
                    <img v-show="actived==4" class="seconde-img" src="../assets/img/ico/ico-jinrong-l.png" alt="">
                    <h3 :class="{'actived':actived==4}">金融支持</h3>
                    <p>了解最新金融政策</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"Fuwu",
        data(){
            return{
                actived:0
            }
        },
        methods:{
            change(m){
                this.actived=m;
            }
        }

    }
</script>

<style scoped>
.actived{
    color:#0f509b;
}
.fw li{
    position:relative;
}
.seconde-img{
    margin-left:-30px;
    position:absolute;
    left:50%;
}
</style>