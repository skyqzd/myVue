<script>
import Hello3 from './Hello3.vue';
export default{
    data(){
    return{
          list:[1,2,3,4,5],
          message:'quanzhide'
    }
},
components:{
    Hello3
}
    
}
</script>

<template>

    <div>
        <h2>------</h2>
        <div>
            <slot :list2="list"  :message2="message"></slot>
        </div>
        <h2>------</h2>
    </div>

    <Hello3></Hello3>
    
</template>
<style>

</style>