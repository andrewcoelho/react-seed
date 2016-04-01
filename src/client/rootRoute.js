import RootComponent from './RootComponent';

export default {
  path: '/',
  component: RootCompoent,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        /* require(<layout/route>).default */
      ]);
    });
  }
};
