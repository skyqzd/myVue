<script >
export default {
  data() {
    return {
      num: 1,
      uname: '张三',
      msg:"<p>1234</p>",
      id:'d1',
      url:'https://www.jdl.com/_nuxt/img/renzheng.27cd1db.png',
      attributeName:'id',
      mouseEvent:'click'
    
    }
  },

  methods: {
    changeUnme: function () {
      //this 指向vue实例
      this.uname = '李四'

    },
    changecolor:function(){
this.id='d2'
    },


    changecurl:function(){
this.url='https://static.ws.126.net/163/f2e/www/index20170701/images/sprite_img20211126.png'

  }


  }}
</script>

<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ uname }}</p>
    <!--   v-once:当数据改变时，插值处的内容不会更新 -->
    <p v-once>{{ uname }}</p>
    <button @click="changeUnme">改变名字</button>
    <p>{{ msg}}</p>
  <!--   解析html代码 -->
    <p v-html="msg"></p>
  <!--   v-bind 动态绑定属性的内容 -->

  <p v-bind:id="id">v-bind绑定</p>
   <img v-bind:src="url"   alt="">

  
 <!--   <img v-bind:src=""   alt=""> -->
<button @click="changecolor()">改变颜色</button>
<button @click=" changecurl()">改变图片</button>
<!-- 可以直接写js表达式 -->
<button @click="id='d2'">改变颜色</button>
<div>{{ num+1 }}</div>
<div>{{ uname.split('').reverse().join('') }}</div>


 <!-- v-bind语法糖 -->
 <p :id="id">v-bind绑定</p>
<!-- v-on用于监听事件    @就是v-on的语法糖 -->
<button v-on:click="changecolor">改变颜色</button>



 <!-- 动态参数 -->
  <!-- 动态属性  []   -->
 <p v-bind:[attributeName]="id">v-bind绑定</p>
 <button v-on:click="attributeName='class'">改变属性</button>

 <!-- 动态事件 -->
 <button @[mouseEvent]="attributeName='class'">改变属性</button>
 <button @click="mouseEvent='mouseover'">改变事件</button>



  </div>
</template>

<style >
  #d1{
    color: aqua;
  }

  #d2{
    color:red;
  }
  .d1{
    font-size: 50px;
  }
</style>
