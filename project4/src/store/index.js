import { createStore } from 'vuex'

const store =createStore({
  state(){
    return{
      meg:'hellowWorld',
      count:0
    }
  },
mutations:{
  addCount(state){
    return  state.count++
  }
},

getters:{
  revMeg(state){
   return  state.meg.split('').reverse().join('')
   
  },

  getMeglength(state,getters){
        return getters.revMeg.length
  }
},

actions:{
  getHot:function(){
   fetch('/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4').then((data)=>{return data.text()

     
   }).then((res)=>console.log( JSON.parse(res)));

  }
},





})


export default store