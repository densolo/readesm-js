const path = require('path');

module.exports = {
    entry: './src/main.EsmDownloader.ts',
    mode: 'development',
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
        filename: 'main.EsmDownloader.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'EsmDownloader'
    },
};
