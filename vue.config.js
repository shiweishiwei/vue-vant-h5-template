const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    css: {
        extract: isProduction,    //将所有的css文件打包成一个文件
        sourceMap: true,           //能定位css文件的错误
        loaderOptions: {
            scss: {
                prependData: `
                    @import "./src/assets/css/mixin.scss";
                    @import "./src/assets/css/variables.scss";
                    `
            },
        },
    },
}