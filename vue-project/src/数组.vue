<script>
export default{
    data(){
        return{
            list:[1,2,3,4,5],
        }
    },

    methods:{
        changeList:function(){
            this.list.push('a',0,'q');
            //this.list[5]='a'

            //splice()
            //pop
            //shift...
            //sort()
            //reserve()
           

        }
    }
}
</script>
<template>
<ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
    
</ul>
<button @click="changeList">改变数组</button>
</template>
<style>
</style>