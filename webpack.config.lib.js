const path = require('path');

var webpackConfig = require("./webpack.config");

var webpackConfigMin = {
    devtool: 'source-map',
    output: {
        filename: 'main.EsmDownloader.lib.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'EsmDownloader',
        libraryTarget: 'commonjs2'
    }
}

module.exports = Object.assign({}, webpackConfig, webpackConfigMin);
