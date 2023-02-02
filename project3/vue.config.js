const {
    defineConfig
}=require('@vue/cli-service')
module.exports=defineConfig({
    transpileDependencies:true,
    devServer:{
        proxy:{
            '/path':{
                target:'https://i.maoyan.com',//替换的服务端地址
                changeOrigin:true,//开启代理允许跨域
               pathRewrite:{
                '^/path':'' 
               } //设置重写的路径
            }
        }
    }
})