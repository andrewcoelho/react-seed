import Dashboard from './';
import Inbox from './screens/Inbox';

export default {
  path: 'dashboard',
  component: Dashboard,
  indexRoute: { onEnter: (nextState, replace) => replace('/inbox') },
  childRoutes: [
    { path: '/posts', component: Inbox }
  ]
};
