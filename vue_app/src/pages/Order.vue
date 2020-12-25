<template>
    <div>
        <div class="experience-kv">
            <img src="../assets/img/img-4.jpg" alt="预约试驾">
        </div>
        <div class="experience-form">
            <div class="experience-form-title main-title">
                <h2><strong>预约体验</strong></h2>
                <p>完善您的信息，即刻开始愉悦驾驶</p>
            </div>
            <div class="experience-form-wrapper">
                <form id="experienceForm">
                    <ul class="ul-form">
                        <li>
                            <strong>姓名：</strong>
                            <span class="input-wrapper">
                                <input class="input-text" type="text" id="username" 
                                name="username" placeholder="请输入您的姓名" >
                            </span>
                        </li>
                        <li>
                            <strong>手机号：</strong>
                            <span class="input-wrapper">
                                <input class="input-text" type="text" max-length="11" id="userphone" 
                                name="userhpone" placeholder="请填写您的手机号" >
                            </span>
                        </li>
                        <li>
                            <strong>意向车型：</strong>
                            <div class="select-wra">
                                <select class="input-wrapper select-text" 
                                data-prompt="选择车型" id="carMode">
                                    <option>选择意向车型</option>  
                                    <option value="64" >锐程CC蓝鲸版</option>
                                    <option value="63" >CS55PLUS蓝鲸版</option>
                                    <option value="61" >UNI-T</option>
                                    <option value="59" >逸动PLUS</option>
                                </select>
                                <i class="input-wrapper-i"></i>
                            </div>
                        </li>
                        <li>
                            <strong>选择经销商：</strong>
                            <div class="select-wra">
                                <select class="input-wrapper select-text" 
                                data-prompt="选择省市" id="carMode">
                                    <option value="120000">天津市</option>
                                    <option value="120000">河北省</option>
                                    <option value="120000">辽宁省</option>
                                    <option value="120000">上海市</option>
                                </select>
                                <i class="input-wrapper-i"></i>
                            </div>
                            <div class="select-wra">
                                <select class="input-wrapper select-text" 
                                data-prompt="选择城市" id="carMode">
                                    <option value="120000">南京市</option>
                                    <option value="120000">无锡市</option>
                                    <option value="120000">常州市</option>
                                    <option value="120000">苏州市</option>
                                </select>
                                <i class="input-wrapper-i"></i>
                            </div>
                            <div class="select-wra">
                                <select class="input-wrapper select-text" 
                                data-prompt="经销商" id="carMode">
                                <option value="JC05405A" dealer_id="2010093000861388">常州常悦汽车销售服务有限公司</option>
                                <option value="JC08147A" dealer_id="2018071136769841">常州大道汽车销售服务有限公司</option>
                                <option value="JC12646" dealer_id="2019082244311377">溧阳市耀诚汽车销售服务有限公司</option>
                                </select>
                                <i class="input-wrapper-i"></i>
                            </div>
                        </li>
                        <li>
                            <div class="label-div">
                                <label class="input-checkbox" type="checkbox">我已阅读同意</label><b>《隐私政策》</b>
                            </div>
                            <div class="checkbox-txt">
                                *本人特此授权重庆长安汽车股份有限公司，须按照数据保护规定，保留本页面信息，并认可此信息予以重庆长安汽车股份有限公司及其中国经销商共享。本人接受重庆长安汽车股份有限公司及其中国经销商所发送的相关商业信息，并允许上述公司与我联系。
                            </div>
                            <input class="input-submit" type="button" value="确认提交">
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <fuwu/>
    </div>
</template>

<script>
export default {
    name:"Order",
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>

</style>