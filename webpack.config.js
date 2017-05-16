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
            test: /\.css$/,
			use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    plugins: [
       new ExtractTextPlugin('../styles/[name].css'),
    ]
}
module.exports=config;