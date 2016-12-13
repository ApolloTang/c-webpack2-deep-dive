const {resolve} = require('path');
const validator = require('webpack-validator');

module.exports = validator({
    context: resolve('src'), // [!] must be absolute
    entry: './bootstrap.js',
    output: {
        path: resolve('dist'), // [!] must be absolute, bundle file will be save here
        filename: 'bundle.js',
        publicPath: '/dist/'  // dev server will be serve from here
    }
    , devtool: 'source-map'         // source map in separate file
    // , devtool: 'eval'               // inline source map
});

