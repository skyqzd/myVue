<template>
    <div>
        <p>helloworld</p>
        <button @click="counter++">改变counter</button>
        <h2> {{ counter }}</h2>
    </div>
</template>
<script>
export default{

    data(){
        return {
            counter:0
        }
    },
    /* 页面展示之前  执行的勾子*/
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log(' mounted')
    },
    /* 更新以后执行的勾子 */
    beforeUpdate(){
        console.log(' beforeUpdate')
    },
    updated(){
        console.log(' updated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    }
}
</script>