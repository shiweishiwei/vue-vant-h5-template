const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'   //判断开发环境还是生产环境
const resolve = dir => path.join(__dirname, dir)              //设置绝对路径

module.exports = {
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
            .set('assets',resolve('src/assets'))
    }
}