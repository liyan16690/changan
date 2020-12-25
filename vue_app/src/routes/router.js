import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Index from "../pages/Index.vue"
import Car from "../pages/Car.vue"
import Login from "../pages/Login.vue"
import Reg from "../pages/Reg.vue"
import Order from "../pages/Order.vue"
import CarP from "../pages/CarPrice.vue"
import Dealer from "../pages/Dealer.vue"
import Finance from "../pages/Finance.vue"
import User from "../pages/User.vue"
import CarPrice from "../pages/CarPrice.vue"
import News from "../pages/News.vue"

export const router=new VueRouter({
    routes:[
        {path:"/",component:Index,name:"Index"},
        {path:"/car/:lid",component:Car,name:"Car",props:true},
        {path:"/login",component:Login,name:"Login"},
        {path:"/reg",component:Reg,name:"Reg"},
        {path:"/order",component:Order,name:"Order"},
        {path:"/carP",component:CarP,name:"CarP"},
        {path:"/dealer",component:Dealer,name:"Dealer"},
        {path:"/finance",component:Finance,name:"Finance"},
        {path:"/user",component:User,name:"User"},
        {path:"/carprice",component:CarPrice,name:"CarPrice"},
        {path:"/news",component:News,name:"News"},
        {path:"/*",component:{
            template:`<h1 style="color:red">404:Not Found</h1>`
          }},
    ]
})