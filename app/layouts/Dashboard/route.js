import Dashboard from './';
import Inbox from './screens/Inbox';

export default {
  path: 'dashboard',
  component: Dashboard,
  indexRoute: { onEnter: (nextState, replace) => replace('/posts') },
  childRoutes: [
    { path: '/posts', component: Inbox },
  ],
};
