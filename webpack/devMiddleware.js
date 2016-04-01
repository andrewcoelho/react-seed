import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import devConfig from './config.dev';

const compiler = webpack(devConfig);

const devServer = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: devConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
};

module.exports = devServer;
