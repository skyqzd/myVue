import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
//组件和仓库相关联了
//挂载以后生成$store 以供访问