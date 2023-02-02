<script >
export default {
  data() {
    return {
      person:['张三','李四','王五'],
    obj:{ age:12,
      sex:'man',
      iaShow:true,},

    }
  },
  methods:{
       addPerson:function(){
        this.person.unshift('小六');
       }
  }



}
</script>

<template>

<div>
    <ul>
        <li v-for="item in person" :key="item">{{item}}</li>
    </ul> 

    <!-- 使用of也可以 -->
    <ul>
        <li v-for="(item,index) in person" :key ="index">{{item}}--{{ index }}</li>
    </ul>

<!-- v-for使用对象 -->
<ul>
    <li v-for="item in obj" :key="item">{{ item }}</li>
</ul>
    <ul>
    <li v-for="(item,key ) in obj" :key="key">{{ key }}</li>

</ul>
<ul>
    <li v-for="(item,key ,index) in obj" >{{item }}--{{ key }}--{{ index }}</li>

</ul>



<!-- 为什么加key -->
<!-- 能跟踪每个节点的身份，从而重用和重新排序现有元素 -->
<!-- 增加小六以后，页面勾选的值改变了 -->
<ul>
        <li v-for="item in person" :key="item"><input type="checkbox" name="" id=""> {{ item }}</li>
    </ul> 
    
<button @click="addPerson">增加元素</button>
</div>

</template>
<style>
</style>