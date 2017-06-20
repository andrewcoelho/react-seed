const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      'babel-polyfill',
      resolve(__dirname, 'app/index.js'),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-saga',
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve(__dirname, 'app'),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: [
      resolve('./app'),
      resolve('./node_modules'),
    ],
  },
};
