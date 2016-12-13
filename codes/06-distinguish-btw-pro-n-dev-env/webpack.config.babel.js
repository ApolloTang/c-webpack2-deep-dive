const {resolve} = require('path');
const validator = require('webpack-validator');

module.exports = (env) => {

    console.log('env.prod: ', env.prod);
    console.log('env.dev: ', env.dev);

    // $ ./node_modules/.bin/webpack -p --env.dev
    // env.prod:  undefined
    // env.dev:  true

    // $ ./node_modules/.bin/webpack -p --env.prod
    // env.prod:  true
    // env.dev:  undefined

    return validator({
        context: resolve('src'), // [!] must be absolute
        entry: './bootstrap.js',
        output: {
            path: resolve('dist'), // [!] must be absolute, bundle file will be save here
            filename: 'bundle.js',
            publicPath: '/dist/'  // dev server will be serve from here
        },
        devtool: (env.prod)
            ? 'source-map'      // production enviroment: source map in separate file
            : 'eval-source-map' // non production env:    inline source map

        ////// The next configuration won't pause in debugger, and show no code
        // devtool: (env.prod)
        //     ? 'cheap-module-eval-source-map' // production enviroment: source map in separate file
        //     : 'cheap-module-source-map'      // non production env:    inline source map
    });
}

