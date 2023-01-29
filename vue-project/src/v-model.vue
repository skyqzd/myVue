<script>
export default{
    data(){
        return{
            counter:0,
            msg:"hello",
            checked:true,
            fruit:[],
            sex:"man",
            city:'',
            citys:[],
            city1:'ok',
        }
    },
methods:{
    downmsg(){
console.log(this.msg);
    }
}

}
</script>


<template>
 <!--    v-model双向绑定 -->
<input type="text" v-model="msg">
    <div >{{ msg }}</div>


    <!-- 复选框 -->
    <!-- 单个勾选框，v-model相当于一个布尔值 -->
    <input type="checkbox" v-model="checked">
    <h2>{{ checked }}</h2>


   <!--  多个勾选框 -->
   <input type="checkbox" v-model="fruit" value="苹果">苹果
   <input type="checkbox" v-model="fruit" value="香蕉">香蕉
   <input type="checkbox" v-model="fruit" value="蓝莓">蓝莓
   <input type="checkbox" v-model="fruit" value="橙子">橙子
   <h2>喜欢的水果{{ fruit }}</h2>


   <!-- 单选框 -->
   <input type="radio" v-model="sex" value="男" >男
   <input type="radio" v-model="sex" value="女" >女
   <h2>{{ sex }}</h2>


 <!--   选项框 -->
<!-- 1 单选 -->
<select name="" id=""  v-model="city">
    <option value="张家口">张家口</option>
    <option value="北京">北京</option>
    <option value="上海">上海</option>
    <option value="广州">广州</option>

</select>
<h3>{{ city }}</h3>


<!-- 多选框  -->
<select name="" id=""  v-model="citys" multiple>
    <option :value="city1">张家口</option>
    <option value="北京">北京</option>
    <option value="上海">上海</option>
    <option value="广州">广州</option>

</select>
<h3>{{ citys }}</h3>



<!-- 修饰符1 .lazy 不会实时更新，最后才显示出来-->
<input type="text" v-model.lazy="msg">
    <div >{{ msg }}</div>
   <!--  2 .number  将用户输入类型转换为数字 -->
   <input type="text" v-model.number="counter">
    <div >{{ typeof counter }}</div>

 <!--    .trim  取消输入框中的空格-->
 <input type="text" v-model.trim="msg" @keydown="downmsg">
    <div >{{ msg }}</div>
</template>