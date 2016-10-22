var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css!sass') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(eot|svg|ttf|woff2?).*$/, loader: 'url?limit=10000' },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.[hash].css'),
    new HtmlWebpackPlugin({
      title: 'React',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  entry: ['babel-polyfill', './src/index.js', './src/index.scss'],
  output: {
    path: 'build/',
    filename: 'bundle.[hash].js',
  },

  devServer: {
    inline: true,
    stats: {
      chunks: false,
    },
  },

}
