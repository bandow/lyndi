// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {
        main:'./src/scripts/main.js',
        a:'./src/scripts/a.js',
        b:'./src/scripts/a.js'
    },
    output:{
        path: __dirname + '/dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: '' //上线地址
    },
    // module: {
    //     rules: [
    //    {
    //         test: /\.(css|scss)$/,
    //         loader:"style-loader!css-loader!postcss-loader!sass-loader"
    //     }]
    // },
    plugins: [
       new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:false,  //指定js放那个位子 比如body
            title:'webpakc a good',
            date: new Date(),
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            }
       }),
       new htmlWebpackPlugin({
            filename:'a.html',
            template:'template.html',
            inject:false,
            title:'webpakc a',
            //chunks:['a'],   //指定那个js
            excludeChunks:['b']  //排除b
       }),
       new htmlWebpackPlugin({
            filename:'b.html',
            template:'template.html',
            inject:false,
            title:'webpakc b',
            //chunks:['b'],  //指定那个js
            excludeChunks:['a'] //排除a
       }),
    ]
}
module.exports=config;