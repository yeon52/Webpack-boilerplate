//https://rrecoder.tistory.com/105
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //.js 파일 templating
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, //scss,sass,css templating
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    devtool: 'source-map',
    mode: 'development'
};