<script >
export default {
  data() {
    return {
      activeColor:'blue',
      sontSize:"50px",
      showBack:'orange',
      styleobj:{
        color:'blue',
      fontSize:"50px",
      'background-color':'orange',
      }
    }
  }






}
</script>
<template>
  
    <div>
  <!-- 第一种，放置字符串 -->
<p style="color:red">hello1</p>
<!-- 2 放置对象 -->
<p :style="{color:activeColor,fontSize:sontSize,'background-color':showBack}">hello2</p>
<p :style="styleobj">hello3</p>

<!-- 使用数组 -->
<p :style=[styleobj]>hello4</p>
    </div>
</template>
<style></style>