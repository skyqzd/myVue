<script>
export default {
    data() {
        return {
            message: 'hellowWorld',
            age: 0,
            user: {//用watch监听不到里面的属性  要使用深度监听deep
                name: "quan"
            }
        }
    },
    methods: {

    },
    watch: {//侦听数据变化

        /* message:function(newValue,oldValue){
             console.log(newValue);
             console.log(oldValue);
             //执行异步操作 或者复杂代码
        if(newValue.length<5||newValue.length>10)
        console.log('不能这样输入');
        }
         */


        message: {
            immediate: true,//初始化的时候调用函数
            handler: function (newValue, oldValue) {
                console.log(newValue);
                if (newValue.length < 5 || newValue.length > 10) {
                    console.log('不能这样输入');
                }
            }
        },




/* user:function(newValue){
    console.log(newValue);
},
 */

/* user :{
handler:function(newValue){

console.log(newValue);
},
deep:true,//是否深度监听 一层层向下遍历 给对象属性都弄上监听器
}
 */

 'user.name ':{//只给user里面的name加监听器
handler:function(newValue){

console.log(newValue);
},
deep:true,//是否深度监听 一层层向下遍历 给对象属性都弄上监听器
} 




    }

}

</script>


<template>
    <div>{{ message }}</div>
    <button @click="message = '你好'">改变message</button>

    <!--  v-model 数据的双向绑定 -->
    <input type="text" v-model="message">
    <button @click="user.name = '李四'">改变user</button>
</template>



<style>

</style>