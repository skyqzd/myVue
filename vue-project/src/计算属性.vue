<script>
export default ({
    data() {
        return {
            message: 'hellowWorld',
            age: 0
        }
    },
    computed: {
        //计算属性,只要依赖值不变(this.message)就不会重新计算，将第一次打印结果缓存，第二次再调用不会重复计算了
        //则是会取缓存里面的值      计算属性有缓存
        reverseMeg: function () {
            console.log('计算属性');//打印了一次
            return this.message.split('').reverse().join('')
        }
    },

    methods: {
        reverseMeg1:function() {
            console.log('methods');//打印了三次
            return this.message.split('').reverse().join('')
        }
    }

})

</script>

<template>
    <!-- 对于复杂逻辑要使用计算属性 -->
    <div>
        <p>{{ message }}</p>
    </div>
    <!-- 使用js表达式 -->
    <!-- <div> <p>{{  message.split('').reverse().join('')}}</p></div>
<div> <p>{{  message.split('').reverse().join('')}}</p></div>
<div> <p>{{  message.split('').reverse().join('')}}</p></div>
<div> <p>{{  message.split('').reverse().join('')}}</p></div> -->



    <!-- 使用计算属性 -->
    <div>
        <p>{{ reverseMeg }}</p>
    </div>
    <div>
        <p>{{ reverseMeg }}</p>
    </div>

    <div>
        <p>{{ reverseMeg }}</p>
    </div>




    <!-- 使用methods -->

    <div>
        <p>{{ reverseMeg1() }}</p>
    </div>

    <div>
        <p>{{ reverseMeg1() }}</p>
    </div>
    <div>
        <p>{{ reverseMeg1()}}</p>
    </div>
<!-- //改变依赖值  会重新打印-->
<button v-on:click='message="你好"'>改变message</button>

</template>

<style>

</style>
