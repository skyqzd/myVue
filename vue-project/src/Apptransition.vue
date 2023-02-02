<script>
export default{
    data(){
        return{
            show:true,
            show1:true,
            show2:true,
        }
    },
}
</script>

<template>
    <div>
    <button @click="show=!show">Toggle</button>
    <Transition>
  <p v-if="show">hello</p>
</Transition>
</div>



<!--  可以给Transition组件传一个name prop来声明一个过渡效果名  -->
    <button @click="show1=!show1">Toggle</button>
 <Transition name="slide-fade">
<div>

  
    <p v-if="show1">:你好</p>
<P>======</P>

</div>
</Transition>
 <button @click="show2=!show2">原生css</button>
<Transition name="bounce">


   
  <p v-if="show2" style="text-align: center;">Hello here is some bouncy text!</p>
  
  

</Transition>


</template>




<style>

.v-enter-active,/* 进入动画的生效状态  应用于整个动画阶段 在元素被插入之前添加 在过渡或动画完成之后移除
定义进入动画的持续时间，延迟与速度曲线类型*/

.v-leave-active {/* 离开动画的生效状态  应用于整个离开动画阶段 在离开过渡效果被触发立即添加 在过渡或者动画完成之后移除
    定义离开动画的持续时间延迟与速度曲线类型*/
  transition: opacity 0.5s ease;/* ease 缓和的 */
}
/* v-enter=to进入动画的结束状态 在元素插入完成后的下一帧添加(也就是v-enter-from被移除的同时) 在过渡或者动画完成被移除*/
.v-enter-from,/* 进入动画的起始状态  在元素插入之前添加 在元素插入完成后的下一帧移除*/
.v-leave-to {/* 离开动画的结束状态  在一个离开动画被触发后的下一帧被添加(也就是.v-enter-from被移除的同时) 在过渡或动画完成时被移除*/
  opacity: 0;
}
/* v-leave-from 离开动画的起始状态 在离开过渡效果被触发时立即添加，在一帧后被移除*/



/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
 */

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/


/*  .slide-fade-enter-active {
  transition: all 0.3s ease-out; 
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
 */






.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>