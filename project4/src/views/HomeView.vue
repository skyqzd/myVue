<template>
 <div>{{ $store.state.count }}</div>
 <div><button @click="increaseCount">增加count</button></div>
 <div>{{  $store.getters.revMeg}}</div>
 <div>{{ $store.getters.getMeglength }}</div>
</template>

<script>
export default{
  name:'HomeView',
methods:{
  increaseCount(){
    this.$store.commit('addCount');
  },
 


},


 mounted(){
   this.$store.dispatch('getHot')
}


}



</script>
