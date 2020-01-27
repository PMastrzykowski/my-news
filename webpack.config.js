const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'none',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[hash]-[name].[ext]',
            },
          }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        title: "My news"
       }),]
};
