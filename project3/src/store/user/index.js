//子模块a

const user=
{

  namespaced:true,//命名空间 让主模块可以分清楚哪个模块的数据
  state(){//通过$store.state.模块名.数据名
    return{
      username:'用户张三'
    }
  },


getters:{//通过$store.getters可以直接获取
  userName:function(state,getters,rootState){//第二个参数是合并的getters,第三个是根节点状态
    return state.username+'今年18'
  }},


mutations:{//通过$store.commit触发即可
  updaateUserName:function(state){
    state.username='改成李四了'
  }
}



}
export default user;