var path = require('path');
var webpack = require('webpack');




module.exports = {
    context: path.resolve('js'), //sets a relative root directory for the entry
    entry: {
        about: './about.js',
        index: './index.js',
        contact: './contact.js',
    }, //source-code
    output: {
        path: path.resolve('build/js/'), //build path
        publicPath: '/public/assets/js/', //must mach index.html <script src='/public/assets/js/bundle.js' anropas publikt men ligger i build/js
        filename: '[name].js' //bundlad source-code
    },


    devServer: {
        contentBase: 'public' //base directory
    },

    module: {
        loaders: [ //lär webpack nya trix med loaders
            {
                test: /\.js?$/, //regex, what kind of files to run through this loader
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: 'pre'
            }
        ]
    },

    resolve: { //what kind of file type that can be processed without specifying file extension
        extensions: [' ', '.js', 'jsx']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "shared",
            filename: "shared.js",
        })
    ]
};