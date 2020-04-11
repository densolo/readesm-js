const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/main.EsmDownloader.ts',
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'download.html',
            template: 'htmlpage/download.html.template'
        })
    ],
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'main.EsmDownloader.bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'EsmDownloader'
    },
};
