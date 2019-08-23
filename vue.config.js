// webpack 配置 node.js 文件 

const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    //1. 给路径起别名
    // chainWebpack: callback(config)
    // chainWebpack: config => {
    //     // config.resolve.alias.set(pathName,绝对路径)
    //     config.resolve.alias
    //         .set('components', path.resolve(__dirname, './src/components'))
    //         .set('pages', path.resolve(__dirname, './src/pages'))
    //         .set('styles', path.resolve(__dirname, './src/assets/styles'))
    //         .set('utils', path.resolve(__dirname, './src/utils'))
    // },
    // configureWebpack: {
    //     plugins: [
    //         new CopyWebpackPlugin([
    //             { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist/static') }
    //         ])
    //     ]
    // },
    devServer: { // 跨域配置
        proxy: {
            '/api': {
                target: 'http://m.maoyan.com', // 跨越域名
                // ws: true,通信
                changeOrigin: true
            },
            '/koa': {
                target: 'http://localhost:3000', // 跨越域名
                // ws: true,通信
                changeOrigin: true
            }
        }
    }
}