const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    entry: {
        index:'./src/scripts/index.js'
    },
    output:{
        path: __dirname + '/build/scripts',
        filename: '[name].js'
    },
    module: {
        rules: [
       {
            test: /\.(css|scss)$/,
            loader:"style-loader!css-loader!postcss-loader!sass-loader"
        }]
    },
    plugins: [
       new ExtractTextPlugin('../styles/[name].css'),
    ]
}
module.exports=config;