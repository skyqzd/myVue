<script>
import Hello4Vue from './components/Hello4.vue';
import{ref,reactive,toRefs} from 'vue'//setup不是响应式的 要引入ref 用reactive定义对象,让解构获得响应式
export default{
    data(){
        return{
            isShow:true
        }
    },



    setup(){//在组件创建之前执行  不要使用this /没有创建组件 哪有数据和属性指谁去
console.log('setup')
//meg的逻辑代码
//没有响应式
let msg="helloquan";

function changeMsg(){
   msg='改变了msg';
   console.log(msg);
}

//通过ref定义响应式变量

const counter=ref(0)//ref返回带有value属性的对象
function changeCounter(){
    counter.value++
}

//通过reactive定义引用类型数据
//obj的逻辑代码
const obj=reactive({
name:"张三",
age:18,
children:{
    name:'小张'
}

})
function chanheObj(){
    obj.name='李四'
}

return{msg,changeMsg,counter,changeCounter,obj,chanheObj,...toRefs(obj)};
    },


    beforeCreate(){
        console.log('beforeCreate');
    },

    created(){
        console.log('created')
    },

components:{
    Hello4Vue
}

}
</script>


<template>

    <div>
        <p>{{ msg }}</p>
       <!--  模板会自动解析value值 -->
        <p>{{ counter}}</p>
        <p>{{ name }}</p> <!-- 原来是<p>{{ obj.name }}</p> 省了obj 但是不能响应式了 加了toRefs就可以了 -->
    <button @click="changeMsg()">改变msg的代码</button>
    <button @click="changeCounter()">改变counter</button>
    <button @click="chanheObj()">改变obj</button>
    <h2>{{ children.name }}</h2>
</div>

    <Hello4Vue v-if="isShow"></Hello4Vue>
    
    <button @click="isShow=!isShow">1111</button>
</template>
