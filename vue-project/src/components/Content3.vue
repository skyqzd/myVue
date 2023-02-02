<script>

export default{
    data(){
    return{
          list:[1,2,3,4,5],
    }
}
    
}
</script>

<template>

    <div>
        <h2>我是content内容</h2>
        <div>
            <!-- 有多个插槽用name属性加以区分 -->
            <!-- 父组件没有提供内容时候会被渲染 -->
            <slot name="aa"><button>默认按钮</button></slot>
            <slot name='bb'></slot>
            <slot name="cc"></slot>
                 
        
        </div>
    </div>
</template>