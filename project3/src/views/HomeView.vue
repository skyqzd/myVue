<template>
    <div>
       <h2> {{ $store.state.count }}</h2>
       
       <button @click="addCount">改变仓库的值</button>
       <h2>{{ $store.getters.revMsg }}</h2>
       <p>{{ $store.getters.revMsgLength }}</p>
       <!-- 用户模块 -->
       <h2>-----</h2>
    <!-- <div> {{ $store.getters.userName }}</div> -->
    <div> {{ $store.getters['a/userName'] }}</div><!-- 加了命名空间以后 -->
    <div>{{ $store.state.a.username }}</div>
    <button @click="changeName">改李四</button>
  <!--   使用辅助函数以后 -->
  <div>{{ count }}</div>
    <div>{{ mag }}</div>
    </div>
</template>
<script>

import { onMounted } from 'vue'
import { mapState} from 'vuex'

export default{
    name:'HomoView',


    methods:{
     addCount(){
      this.$store.commit('increment')//使用commit方法改变state状态
     },

     /* this.increment() */
     /* ..mapMutations(['increment'])  不用commit方式进行提交了*/

     /* this.updateUserName */
    /*  ...mapMutations('a',['updateUserName'])加了命名空间如何使用辅助函数 */
      
     /* mapActions(['getHot']) */
//模块a
changeName(){
  this.$store.commit('a/updaateUserName')
}
/* 加A原因 子模块加了命名空间 */
    },




computed:mapState({
  count:'count',
  mag:'meg'
}

/*  computed:mapState(['count']) */
/* ..mapGetters(['revMsg']) */

),


/* computed:{
  addNum:function(){
return this.num*10
  }

...mapState(['count','mag']])
同时用自己的数据还有index.js的数据
} ,

*/
mounted(){
   this.$store.dispatch('getHot') //dispatch派发用来去结收后端数据
//console.log(this.$store);
/* console.log('count','mag') */
},



}
</script>