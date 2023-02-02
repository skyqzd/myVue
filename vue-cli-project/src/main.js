import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import store from './store'
createApp(App).use(store).mount('#app')
//组件和仓库相关联了
//挂载以后生成$store 以供访问