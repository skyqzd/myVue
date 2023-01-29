<template>
    <div>
  <!--    父组件访问子组件$refs 通过ref不仅可以访问子组件还可以访问元素-->
<!--   子组件访问父组件$parent -->
<!-- 访问根组件 $root -->
        <Hello2 :message="msg"  :qq="list" ref='aabc'></Hello2>
       <p ref="bb"></p>
    </div>
</template>
<script>
import Hello2 from './Hell02.vue'
export default{
    data(){
return{
    a:10,
    msg:'helloWorld',
    list:[1,2]
}
    },
    methods:{
        
        },
    
components:{
        Hello2
},
mounted(){
    //console.log(this.$refs);
    console.log(this.$refs.aabc.b);
}
}
</script>