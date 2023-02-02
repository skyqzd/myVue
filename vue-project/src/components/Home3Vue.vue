<template>

<Content31a></Content31a>
<div>
    <button @click="obj.message44='你好'">验证响应式</button>
    <h2>Home3{{ obj.message44 }}</h2>
</div>
</template>
<script>
import Content31a from './Content31a.vue'
export default{
data(){
  return{
/* message33:'helloworld', */
/*   message44:helloworld, */
   obj:{message44:'helloworld'} 

  }
} , 

/* 要传给孙子的组件 即传给任意隔辈分的组件 */
/* provide:{message33:'helloworld' }, */


/* 如果是想传实例中的属性则需要函数 */
/* provide inject并不是响应式的  如果这页的message33数值改变不会影响到孙子组件之前拿到的值*/
provide(){
    return{

        /* message33:this.message33 */
       /*  1通过响应式对象的方式 变成响应式的*/
       obj:this.obj

       /* 2通过函数 */
     /*   message:()=>this.message44 */

    }
},

components:{
               Content31a
   
   
            }
}


</script>