import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// 封装读本地数据的文件
 function readByLocalStorage(){
     var cartsStr = localStorage.getItem('carts-info');
     if(cartsStr==null || cartsStr.trim().length == 0){
         return  [];
     }else{
         return JSON.parse(cartsStr)
     }
 }
 function writeByLocalStorage(cart){
    localStorage.setItem('carts-info',JSON.stringify(cart))
 }

 export default new Vuex.Store({
    state:{
        carts:readByLocalStorage()
    },
    getters:{
        totalCount:state=>{
            var result = 0
            state.carts.forEach(v => {
                result += v.count
            });
            return result
        },
        getProdArray(state){
            return state.carts
        }
 
    },
    mutations:{
        addTocart(state,cart){
            let temp = state.carts.find(v=>{
                return v.id == cart.id
            });
            if(temp){
                temp.count = cart.count
            }else{
                state.carts.push (cart)
            }
            state.carts.forEach((v,i)=>{
                if(v.count ==0){
                    state.carts.splice(i,1)
                }
            })
            writeByLocalStorage(state.carts)
        },
        
    }
})