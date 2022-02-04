const path = require('path');

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'main.js',
    },
    devtool: "source-map",
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true, 
        port: 9000,
    },
}