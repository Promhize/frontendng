const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './dev/ClientEntry.jsx',
  ],
  output: {
    path: path.resolve(__dirname, './prod'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'prod'),
    hot: true,
    port: 1960,
    open: false,
    openPage: '',
    stats: 'errors-only',
    historyApiFallback: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/prod/icons/[name].[ext]',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/url',
          'file-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     // modules: true,
          //     importLoaders: 1,
          //   },
          // },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    modules: ['dev', 'node_modules'],
    extensions: ['.jsx', '.js', '.json', '.css', '*'],
  },
  node: { fs: 'empty' },
}
