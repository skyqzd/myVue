<template>
    <div>
        <!-- <h2>我是孙子组件{{ message33 }}</h2> -->
        <h2>我是孙子组件{{ obj.message44 }}</h2>
       
    </div>

</template>
<script>


export default{
    data(){
        return{
        
        }
    },
  /*   inject:['message33'], */
  inject:['obj'],
}
</script>