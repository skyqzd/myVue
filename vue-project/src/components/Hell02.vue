<template>
    <div>
        hello
        <h2>{{ message }}</h2>
        <h2>{{ qq }}</h2>
    </div>
</template>
<script>


export default{

    //props:['message'],

 /*    props:{
        //类型限制
     message:String
},
 */
data(){
  return{
    b:10
}  
},

 props:{
    //类型限制加默认值 必须传值
    message:{
        type:String,
        default:"我是默认值",
        required:true,


    },
    qq:{
        type:Array,
        default(){
            //对象或者数组默认值必须是函数
            return[]
        }
    }


 },
    data(){
        return{}
    },
    mounted(){
        //不建议用 因为组件复用性很高
        console.log(this.$parent);
        console.log(this.$root);
    }
}
</script>