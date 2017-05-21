const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
const config = {
    entry: {
        app:'./src/app.js',
        main:'./src/scripts/main.js',
        a:'./src/scripts/a.js',
        b:'./src/scripts/a.js'
    },
    output:{
        path: __dirname + '/dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: '' //上线地址
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: [{
                    loader:'babel',
                    options: { presets: ['latest'] },
                }],
            },
            {
                test: /\.html$/,
                use: [ "html-loader" ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development 
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                // use: [{ 
                //     // loader:"file-loader",   //打包图片
                //     // loader:"url-loader",       //打包图片转为64：
                //     options:{
                //         // limit: 25000,           //图片大小
                //         // name: 'img/[name]-[hash:5].[ext]'  //打包地址
                //     }
                // }],
                use: [
                  'url-loader?limit=1000&name=img/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
                ]
            },
        ]
    },
    plugins: [
       new htmlWebpackPlugin({
            filename:'app.html',
            template:'app.html',
            inject:'body',  //指定js放那个位子 比如body
            title:'webpakc a App',
            chunks:['app'],   //指定那个js
       }),
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

       extractSass
    ]
}
module.exports=config;