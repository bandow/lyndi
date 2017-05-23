const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
const config = {
    entry: {
        app:'./src/app.js',
        index:'./src/scripts/index.js',
    },
    output:{
        path: __dirname + '/dist',
        filename: 'scripts/[name]-[chunkhash].js',
        //publicPath: '' //上线地址
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: /(src)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['env']
                    }
                }
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
                    // loader:"file-loader",   //打包图片
                //     loader:"url-loader",       //打包图片转为64：
                //     options:{
                //         // limit: 25000,           //图片大小
                //         // name: 'img/[name]-[hash:5].[ext]'  //打包地址
                //     }
                // }],
                use: [
                  'url-loader?limit=1000&name=images/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
                ]
            },
        ]
    },
    plugins: [
       new htmlWebpackPlugin({
            filename:'app.html',
            template:'src/views/app.html',
            inject:'body',  //指定js放那个位子 比如body
            chunks:['app'],   //指定那个js
       }),
       new htmlWebpackPlugin({
            filename:'index.html',
            template:'src/views/index.html',
            inject:'body',  //指定js放那个位子 比如body
            minify:{            //压缩
                removeComments:false,   //true去掉注释
                collapseWhitespace:false  //true去掉空格
            },
            chunks:['index'],   //指定那个js
            //excludeChunks:['app']  //排除app
       }),
       
       //转化sass的方法
       extractSass
    ]
}
module.exports=config;