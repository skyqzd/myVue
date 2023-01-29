<script>
export default ({
    data() {
        return {
            message: 'hellowWorld',
            age: 0,
            isActive:true,
            error:null,
            classObj:{
                active:true,
                hi:true
            }
        }
    },
computed:{
    chassObjCom: function(){
        return {
              active:this.isActive&&!this.error,
              hi:this.error
        }
    }}



})

</script>

<template>
   <!-- 1  最简单的方式 -->
<div><P class="active">hello</P>

<!-- 2放置对象   常用-->
<!-- <p :class="{类名:boolean}" >hello</p> -->
<p :class="{active:isActive}">hello1</p>

<p :class="{active:isActive,hi:isActive}">hello2</p>
<button @click="isActive=!isActive">class改变</button>

<!-- 可以和普通的类一起存在 -->
<p :class="{active:isActive,hi:isActive}" class="hi">hello3</p>



<!-- //对象比较多 -->
<p :class="classObj">hello4</p>



<!-- 3使用computed -->
<p :class=" chassObjCom">computed</p>



</div>
</template>

<style>
.active{
    font-size: 30px;
    color: aquamarine;
}
.hi{
    color: black;
}
</style>