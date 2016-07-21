const path = require('path');
const webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, '..', 'app');
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      path.resolve(APP_DIR, 'index.js'),
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
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: APP_DIR,
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
    alias: {
      components: path.resolve(APP_DIR, 'components'),
      containers: path.resolve(APP_DIR, 'containers'),
      layouts: path.resolve(APP_DIR, 'layouts'),
      reduxModules: path.resolve(APP_DIR, 'reduxModules'),
    },
  },
};
