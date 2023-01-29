<script>
import Content2 from './components/Content2.vue'

export default{
    data(){//让每一个组件对象都返回一个新的对象，不会造成数据污染(不会互相影响)
        return{
          message:'',
        }
    },
components:{
    Content2
},
methods:{
    getChildMsg:function(value){
         console.log(value);
         // 应用拿过来的值this.message=value
    }
}

}
</script>
<template>


<Content2 ></Content2>


</template>
<style>




</style>