<script>
export default ({
    data() {
        return {
            message: 'hellowWorld',
            age: 0
        }
    },
    computed: {
        /* reverseMeg: function () {
           return this.message.split('').reverse().join('')
        } */


        //每一个计算属性会有getter setter
        //完整写法 默认有get  必要时可以提供set
        reverseMsg: {
//在设置和更改计算属性的时候调用
             set:function(newValue){
                   console.log(newValue);//你好
                  //this.message=newValue;
             },


            get: function () {
                return this.message.split('').reverse().join('')
            }
        }
    },
})

</script>

<template>

    <div>
        <p>{{ reverseMsg }}</p>
    </div>
    <div>
        <p>{{ reverseMsg }}</p>
    </div>

    <div>
        <p>{{ reverseMsg }}</p>
    </div>

    <!-- //改变依赖值  会重新打印-->
    <button v-on:click='message = "你好"'>改变message</button>

    <button v-on:click='reverseMsg ="你好"'>改变revermessage</button>

</template>

<style>

</style>
