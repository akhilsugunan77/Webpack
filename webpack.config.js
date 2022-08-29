const path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const loader = require("sass-loader");
module.exports = {
    mode:"development",
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,"./build"),
        filename:"[name].js",
    },
    plugins:[new HtmlWebpackPlugin({
            template:"./src/index.html"
            }),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'build/**/*')]
            }),
        ],
    devtool:"source-map",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            },
            {
                test:/\.s?css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
            },
            {
                test:/\.(jpe?g|png|gif|svg|wepb)$/i,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[ext]",
                        outputPath:"assets",
                    }
                }
            }
        ]
    },
    devServer:{
        static:"./build",
    }
}