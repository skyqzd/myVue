 <script>

</script>
<template>
  <div id="app">
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/user/123">Go User</router-link>
    <router-link to="/news/456">Go news</router-link>
  </p>

  <!-- 路由出口 先占位置然后-->
  <!-- router-link to匹配到的路径渲染到这里 -->
  <router-view></router-view>
</div>  

</template>

<style>
</style>
