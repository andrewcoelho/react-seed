import path from 'path';
import webpack from 'webpack';

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.resolve(__dirname, '..', 'src');
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const CLIENT_DIR = path.resolve(SRC_DIR, 'client');

export default {
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.resolve(CLIENT_DIR, 'index.js')
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: SRC_DIR
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    alias: {
      reduxModules: path.resolve(CLIENT_DIR, 'reduxModules')
    }
  }
};
