<script>
export default{
    data(){
        return{
            counter:0,
            age:18,
        }
    },

    methods:{
        divClick(){
            console.log('父元素') ;
           
        },

        btnClick(){
            console.log('子元素');
        },
        submitClick(){
            console.log('提交数据成功');
        },
        onClick(){
            console.log('只会触发一次');
        },
        keyUp(){
            console.log('键盘被按下');
        }
    }
}
</script>
<template>
        <!-- 事件修饰符 -->
<!-- .stop阻止事件冒泡 下面例子中父元素不再打印-->
<div @click="divClick">
<button @click.stop="btnClick">点以下呗</button>

</div>

<!-- .prevent 阻止默认行为  下面例子中阻止表单提交然后做自己的事-->
<form method="" action="" >
<input type="submit" value="提交" @click.prevent="submitClick">
</form>


<!-- .once  只触发一次 -->
<button @click.once="onClick">触发一次</button>


<!-- 按键修饰符 -->
<!-- {keyCode(键盘编码)||keyAlias(键盘别名)}  监听键盘-->
<input type="text" @keyup.enter="keyUp">
</template>