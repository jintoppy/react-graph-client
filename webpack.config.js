var path = require('path');
module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: {
        index: './src/Main.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)/,
                loader: 'babel',
                include: [__dirname + '/src']
            }
        ]       
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};