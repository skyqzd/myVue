<script >
export default {
  data() {
    return {
      age:12,
      sex:'man',
      iaShow:true,
    }
  }
}
</script>


<template>
<div>
<!-- <p  v-if="true">成年人</p>
<P v-if="false">小朋友</P> -->
<p  v-if="age>18">成年人</p>
<P v-else-if="age<18">小朋友</P>
<P v-else="age==18">今年18</P>

<!-- 在</template>使用v-if渲染整个分组 -->
<template v-if="age>=18">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>3</p>
</template>



<p v-show="sex=='man'">男生</p>
<p v-show="sex=='woman'">男生</p>
<!-- 带有v-show始终会被渲染停留在dom中  用在频繁切换状态比如两个页面的切换-->
<!-- v-if 后面值为false 对应的元素和子元素都不会被销毁，控制dom元素的销毁与创建 运行时条件难改变或者一次性的-->
<h2 v-if="iaShow">v-if</h2>
<h2 v-show="!iaShow">v-show</h2>
<button @click="iaShow=!iaShow">1111</button>
</div>
</template>
<style>
</style>