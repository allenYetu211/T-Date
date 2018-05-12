const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: "./src/T-Date.ts",
    output: {
        filename: "T-Date.js",
        path: __dirname + "/dist"
    },
    mode: 'production',
    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by
            // 'awesome-typescript-loader'.
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(
            {
                title: '按照ejs模板生成出来的页面',
                filename: 'index.html',
                template: './src/template.ejs'
            }
        ),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // When importing a module whose path matches one of the following, just assume
    // a corresponding global variable exists and use that instead. This is
    // important because it allows us to avoid bundling all of our dependencies,
    // which allows browsers to cache those libraries between builds.
};