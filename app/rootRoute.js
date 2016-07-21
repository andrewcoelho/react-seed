import RootComponent from './RootComponent';

export default {
  path: '/',
  component: RootComponent,
  childRoutes: [
    require('layouts/Dashboard/route').default,
  ],
};
