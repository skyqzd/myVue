<template>
    <div>
    
        <Hello :message="msg"  :qq="list"></Hello>
        <h2>我是content组件内容</h2>
        <h2>{{ msg }}</h2>
        <Hello :message="msg"></Hello>
<button @click="send">提交数据给父组件</button>
    </div>
</template>
<script>
import Hello from './Hello.vue'
export default{
    data(){
return{
    msg:'helloWorld',
    list:[1,2]
}
    },
    methods:{
        // 1 在子组件中，通过$emit来触发事件
        send(){
//this.$emit('事件名称','发送的事件参数')
this.$emit('injectMeg',this.msg)
        }
    },
components:{
        Hello
}
}
</script>