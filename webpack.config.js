const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[contenthash:5].css",
    // disable: process.env.NODE_ENV === "development"
});
const config = {
    entry: {
        app:'./src/app.js',
        index:'./src/scripts/index.js',
        // headerCommon:'./src/scripts/headerCommon.js',
    },
    output:{
        path: __dirname + '/dist',
        filename: 'scripts/[name]-[chunkhash:5].js',
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
                    // options: {
                    //   presets: ['env']
                    // }
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
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  'url-loader?limit=3500&name=images/[name]-[hash:5].[ext]',
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