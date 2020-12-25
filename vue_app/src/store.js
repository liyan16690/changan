import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{            //保存共享数据
        uid:"",        //编号
        phone:"",      //用户手机号
        uname:"",      //昵称
        user_name:"",  //姓名
        gender:""      //性别
    },
    mutations:{//修改数据
        setUid(state,uid){state.uid=uid},
        setPhone(state,phone){state.phone=phone},
        setUname(state,uname){state.uname=uname},
        setUser_name(state,user_name){state.user_name=user_name},
        setGender(state,gender){state.gender=gender},
    },
    getters:{//获取数据
        getPhone(state){return state.phone;},
        getUname(state){return state.uname},
        getUser_name(state){return state.user_name},
        getGender(state){return state.gender},
        getUid(state){return state.uid;}

    },
    actions:{//异步修改数据
        
    }
})