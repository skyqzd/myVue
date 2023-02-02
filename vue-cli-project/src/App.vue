<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 -->

 
<!-- <script>
 import HomeView from './views/HomeView.vue'

 export default{
    name:'HomoView'
}
</script><template>
  <div>
    <HomeView></HomeView>
  </div>
</template> -->

<template>
    <div>
       <h2> {{ $store.state.count }}</h2>
    </div>
</template>
<script>
/* export default{
    name:'App.vue'
} */
</script>