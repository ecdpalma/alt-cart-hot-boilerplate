var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './js/App.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader', 'babel-loader?optional=runtime']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?optional=runtime']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
