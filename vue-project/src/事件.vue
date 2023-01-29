<script>
export default{
    data(){
        return{
            counter:0,
            age:18,
        }
    },
    methods:{
         /* addNum(number){
            this.counter+=number;
         } */
         addNum(number,event){
            this.counter+=number;
            console.log(event);
         },
         addAge(){
            this.age++
         },

    }
}
</script>
<template>
    <div>
       <!--  <h3  @click="counter++">{{ counter }}</h3> -->
       <!--  通过函数 -->
       <h3 @click="addNum(4)">{{ counter }}</h3>
      <!--  绑定事件，即传参数也要事件对象 -->
      <h3 @click="addNum(4,$event)">{{ counter }}</h3>
      <!-- 一个事件绑定多个处理函数 -->
      <h3 @click="addNum(4),addAge()">{{ counter }}--{{ age }}</h3>

    </div>
</template>