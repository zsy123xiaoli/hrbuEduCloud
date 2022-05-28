const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:3000/',
        
        //路径重写
        // pathRewrite:{
        //    "^/api":"" 
        // },
        changeOrigin:true,
        ws:true 
      },
      
    }
  }
})
