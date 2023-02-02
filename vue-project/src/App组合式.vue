<script>

import{ref,toRefs,reactive,watch,watchEffect,computed} from 'vue'//用watchEffect来深度监听即监测对象中的属性
export default{
    data(){
        return{
            message:'helloWorld'
        }
    },



    setup(){
        const msg=ref('are you ok')
        const reverseMsg=computed(()=>{//返回带有value属性的对象
            return msg.value.split('').reverse().join('')
        })
        console.log(reverseMsg.value);


        const counter =ref(0);
        function changecounter(){
                counter.value++
        }

        const user=reactive({
            name:'quan',
            age:15,
//还可以在里面使用
reverseMsg:computed(()=>{//返回带有value属性的对象
            return msg.value.split('').reverse().join('')
        })
             })
console.log(reverseMsg.value);


function changeuser(){
    user.name='李四'
}
//watch(要侦听的响应式引用,回调函数)
watch(counter,(newVal,oldVal)=>{
 console.log(newVal);
 console.log(oldVal);

}),
//组件初始化会执行一次回调函数 会直接收到quan 并打印出来
//只要在回调中引用到了响应式的属性，只要这些属性发生改变，回调就会执行,watch只会监听指定的属性
watchEffect(()=>{
console.log(user.name);


})




        return{user,counter,changecounter,changeuser,msg,reverseMsg};
    },


    watch:{
        message:function(newVal,oldVal){

        }
    }
}
</script>
<template>
    <div> {{ counter }} </div>
       <button @click="changecounter()">改变counter</button>
   
    <div>{{  user.name}}</div>
    <button @click="changeuser()">改变name></button>
</template>