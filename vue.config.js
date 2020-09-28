const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'   //判断开发环境还是生产环境
const resolve = dir => path.join(__dirname, dir)              //设置绝对路径

module.exports = {
    publicPath: './',               //hash模式下基本URL
    outputDir: 'dist',              //打包文件放到dist文件夹下
    assetsDir: 'static',            //打包的静态资源存放文件夹
    productionSourceMap: false,     //生产环境下不需要开启SourceMap
    //本地服务器配置
    devServer: {
        port: 8080,                 //端口号
        open: true,                 //启动后打开浏览器
    },

    css: {
        extract: isProduction,    //将所有的css文件打包成一个文件
        sourceMap: true,           //能定位css文件的错误
        loaderOptions: {
            scss: {
                prependData: `
                    @import "assets/css/mixin.scss";
                    @import "assets/css/variables.scss";
                    `
            },
        },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
    }
}