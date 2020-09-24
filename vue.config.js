const webpack = require('webpack');
const path = require('path');
// vue.config.js
module.exports = {
    configureWebpack: { //引入jquery
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery",
                Popper: ["popper.js", "default"]
            })
        ]
    },
    devServer: {
        open: true, //是否自动弹出浏览器页面
        // host: "localhost", 
        // port: '8080',
        https: false,
        hotOnly: false, 
        proxy: {
          '/api': {
            target: 'http://10.60.214.70:8080', //API服务器的地址
            ws: true, //代理websockets
            secure:false, // 使用的是http协议则设置为false，https协议则设置为true
            changeOrigin: true, // 虚拟的站点需要更管origin
            pathRewrite: {  //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'  如果不写pathRewrite 则只能更换域名而不能修改域名（在后面添加路由）
              '^/api': ''
            }
          }
        },
      }
}