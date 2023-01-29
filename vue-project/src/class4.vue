<script>
export default ({
    data() {
        return {
            message: 'hi',
            activeClass:'active',
            age: 0,
            isActive:true,
            error:null,
            classObj:{
                active:true,
                hi:true
            }
        }
    },

})

</script>
<template>
    <p :class="[message,activeClass]" class="hi">hello3</p>
</template>
<style>
.active{
    font-size: 30px;
    color: aquamarine;
}
.hi{
    color: black;
}</style>
