import { createStore } from "vuex";
import user from './user'
//创建实例
const store = createStore({
    state() {//存储基本数据
        return {
            count: 0,
            meg:"你好吗",
        }
    },

    getters:{/* 认为是store中的计算属性   getters会暴露store.getters我们可以访问其中的属性*/
         revMsg:function(state){
        return  state.meg.split('').reverse().join('')
         },


revMsgLength:function(state,getters){//第二个参数表示当前store中的getters对象
       return getters.revMsg.length
}


    },
    mutations:{//用于改变仓库的值
      increment(state){//就是上面的state  value传过来的参数
         state.count++
      }
    },


actions:{//异步操作用于与后端交互
   getHot:function( context){//用代理解决跨域问题 在vue.config.js中解决 context和store有相同的属性和方法的对象
    fetch('/path/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4').then((data)=>{return data.text()
 
      
    }).then((res)=>console.log( JSON.parse(res)));
console.log(context); 

   }
},

modules:{
  a:user,
}


})
export default store //导出仓库 再到main.js中引入仓库


