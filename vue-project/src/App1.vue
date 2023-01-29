<script>
import Content from './components/Content.vue'

export default{
    data(){//让每一个组件对象都返回一个新的对象，不会造成数据污染(不会互相影响)
        return{
          message:'',
        }
    },
components:{
    Content
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


<Content @injectMeg="getChildMsg"></Content>
<!-- 拿到子组件Content的数据  通过自定义事件-->
<!-- 2 在父组件中，通过v-on 监听子组件中的事件-->

</template>
<style>




</style>