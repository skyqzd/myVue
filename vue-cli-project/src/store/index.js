import { createStore } from "vuex";
//创建实例
const store = createStore({
    state() {//存储基本数据
        return {
            count: 0
        }
    },
})
export default store //导出仓库 再到main.js中引入仓库

