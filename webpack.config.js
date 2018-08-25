const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.jsx',
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react','stage-0']
                },
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: { minimize: true }
            }]
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
              }
            ]
          }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}