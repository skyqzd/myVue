<script>
//import Content31a from './components/Content31a.vue'
import Content3 from './components/Content3.vue'
import Home3Vue from './components/Home3Vue.vue'


export default{
    data(){
    return{
         message:'okokok' ,
    }
},
    components:{
        Content3,
       /*  Content31a, */
        Home3Vue,

    }


}
</script>
<template>
<div>
<!-- 有多个值，一起替换掉插槽 --><!-- 
    <Content3><p>我是插槽</p> <button>按钮</button></Content3> -->

<!-- 相当于没有内容也会展示默认按钮 -->
  <!--   <Content3><p>我是插槽</p> </Content3>
    <Content3> <button>按钮</button></Content3>-->
 
<Content3>
    <!-- 可以访问当前页面的变量 子组件的不可以 -->
    <template v-slot:bb> <button>按钮{{ message }}</button> </template>
    <template v-slot:aa>  </template>
     <template v-slot:cc> <h2>我是第三个插槽</h2> </template>
</Content3>  

<!-- 作用域插槽 --><!-- 父组件替换子组件插槽  数据由子组件提供 -->
 <!-- <Content31a> -->
   <!--  无序列表 -->
 <!--   拿到子组件传过来的信息 -->
<!-- <template v-slot:default="slotProps">
<ul>
    <li v-for="item in slotProps.list2" key="item">{{ item }}</li>
</ul -->

  <!-- 有序列表 -->
   
<!-- ol>
    <li v-for="item in slotProps.list2" key="item">{{ item }}</li>
</ol>

</template>

  


</Content31a>  -->
<Home3Vue></Home3Vue>
</div>


</template>