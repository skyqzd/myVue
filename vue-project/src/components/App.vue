<script>
export default{
    data(){
        return{
            items:[1,2,3,4,5]
        }
    },
    methods:{
        addfunc(){
            this.items.unshift(Math.floor(Math.random() * 10 + 1))
        },
removefunc(){
    this.items.shift(3)
}
    }
}
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
<template>
    <button @click="addfunc">添加</button>
    <button @click="removefunc">移除</button>
    <TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>

</template>